# Two Sky Dine In - Website

Official website for Two Sky Dine In, a rooftop restaurant in Wardha, Maharashtra.

## Tech Stack

- **Framework:** Next.js 15 (Static Export)
- **Styling:** Tailwind CSS
- **Hosting:** AWS S3 + CloudFront

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Static files will be in the `out/` directory.

## AWS Deployment

### First-time Setup

```bash
./deploy/setup-aws.sh
```

### Deploy Updates

```bash
./deploy/deploy.sh
```

## AWS Monthly Cost Estimate

| Service | Cost |
|---------|------|
| S3 (Static Hosting) | ~$0.02 |
| CloudFront (CDN) | ~$1-5 |
| Route 53 (DNS) | ~$0.50 |
| **Total** | **~$2-6/month** |

## Domain Configuration

1. Purchase SSL certificate in AWS ACM (us-east-1 region)
2. Create CloudFront distribution with custom domain
3. Update DNS records:
   - `sorrawhitenight.com` → CloudFront alias
   - `www.sorrawhitenight.com` → CloudFront alias

## Contact

- **Phone:** +91 8329 120 266
- **Email:** sorra.whitenight@gmail.com
- **Address:** Nagthana Square, Sawangi, Wardha, Maharashtra 442001
