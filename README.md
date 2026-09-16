# Sorra White Night — Website

Official website for **Sorra White Night**, an upscale rooftop café & restaurant in Wardha, Maharashtra.

Live at [https://www.sorrawhitenight.com](https://www.sorrawhitenight.com)

## Tech Stack

- **Framework:** Next.js 16 (static export — `output: "export"`)
- **Styling:** Tailwind CSS v4
- **Icons/Fonts:** Google Fonts via `next/font` (Cormorant Garamond, Manrope, Great Vibes)
- **Hosting:** AWS S3 static website + Cloudflare CDN (HTTPS)

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

Verify before committing:

```bash
npm run lint
npm run build      # static export → out/
```

## Docs

Full agent/developer context lives in [`docs/`](docs/README.md):
overview, tech stack, architecture, conventions, local setup, deployment, and maintenance tasks.

## Deployment

Site is static export in `out/`, synced to the S3 bucket `www.sorrawhitenight.com`,
fronted by Cloudflare. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the runbook.

## Contact

- **Phone:** +91 8329 120 266
- **Email:** sorra.whitenight@gmail.com
- **Address:** Nagthana Square, Sawangi, Wardha, Maharashtra 442001