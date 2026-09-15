#!/bin/bash
set -e

# Configuration
BUCKET_NAME="sorrawhitenight-website"
DISTRIBUTION_ID=""  # Add your CloudFront distribution ID after first deployment
REGION="ap-south-1"

echo "Building Next.js static export..."
npm run build

echo "Syncing to S3..."
aws s3 sync ./out s3://$BUCKET_NAME --delete --region $REGION

if [ -n "$DISTRIBUTION_ID" ]; then
  echo "Invalidating CloudFront cache..."
  aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
fi

echo "Deployment complete!"
