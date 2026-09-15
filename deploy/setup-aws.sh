#!/bin/bash
set -e

# Configuration
BUCKET_NAME="www.sorrawhitenight.com"
DOMAIN="sorrawhitenight.com"
REGION="ap-south-1"

echo "=== AWS Setup for Sorra White Night Website ==="
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
  echo "AWS CLI not found. Please install it first."
  echo "  https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
  exit 1
fi

# Check if AWS is configured
if ! aws sts get-caller-identity &> /dev/null; then
  echo "AWS CLI not configured. Run 'aws configure' first."
  exit 1
fi

echo "Step 1: Creating S3 bucket..."
aws s3 mb s3://$BUCKET_NAME --region $REGION 2>/dev/null || echo "Bucket may already exist"

echo "Step 2: Enabling static website hosting..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document 404.html

echo "Step 3: Setting bucket policy for public access..."
cat > /tmp/bucket-policy.json << 'POLICY'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    }
  ]
}
POLICY

sed -i "s/BUCKET_NAME/$BUCKET_NAME/g" /tmp/bucket-policy.json
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file:///tmp/bucket-policy.json

echo "Step 4: Creating CloudFront distribution..."
cat > /tmp/distribution-config.json << CONFIG
{
  "CallerReference": "$(date +%s)",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-$BUCKET_NAME",
        "DomainName": "$BUCKET_NAME.s3-website.$REGION.amazonaws.com",
        "CustomOriginConfig": {
          "HTTPPort": 80,
          "HTTPSPort": 443,
          "OriginProtocolPolicy": "http-only"
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-$BUCKET_NAME",
    "ViewerProtocolPolicy": "redirect-to-https",
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "MinTTL": 0,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000,
    "Compress": true
  },
  "Comment": "Two Sky Dine In Website",
  "Enabled": true,
  "Aliases": {
    "Quantity": 1,
    "Items": ["$DOMAIN", "www.$DOMAIN"]
  },
  "CustomErrorResponses": {
    "Quantity": 1,
    "Items": [
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/404.html",
        "ResponseCode": "404",
        "ErrorCachingMinTTL": 300
      }
    ]
  }
}
CONFIG

echo ""
echo "=== Setup Notes ==="
echo "1. Create the CloudFront distribution via AWS Console for easier setup:"
echo "   https://console.aws.amazon.com/cloudfront/home"
echo ""
echo "2. After CloudFront is created, update DNS in Route 53 or your registrar:"
echo "   - A Record (Alias) -> CloudFront distribution"
echo "   - CNAME www -> CloudFront distribution"
echo ""
echo "3. Request SSL certificate in ACM (us-east-1 region) for:"
echo "   - $DOMAIN"
echo "   - www.$DOMAIN"
echo ""
echo "4. Once done, deploy with: ./deploy.sh"
