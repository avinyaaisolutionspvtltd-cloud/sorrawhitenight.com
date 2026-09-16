# Sorra White Night — Project Docs

Agent context for the Sorra White Night restaurant website. Start here, then go to the specific area you need.

## Read Order

| File | What it tells you |
|------|-------------------|
| [`PROJECT_OVERVIEW.md`](./PROJECT_OVERVIEW.md) | What the site is, who owns it, contact details |
| [`TECH_STACK.md`](./TECH_STACK.md) | Exact versions, tools, and config |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Folder structure, components, data flow |
| [`CONVENTIONS.md`](./CONVENTIONS.md) | Style/quality rules, how to work safely |
| [`LOCAL_SETUP.md`](./LOCAL_SETUP.md) | Get it running on your machine |
| [`DEPLOYMENT.md`](./DEPLOYMENT.md) | Live infra, AWS, Cloudflare, DNS, deploy runbook |
| [`TASKS.md`](./TASKS.md) | Common maintenance tasks (menu, events, contact) |

## Quick Facts

- **Brand:** Sorra White Night — Café & Restaurant
- **Location:** Nagthana Square, Sawangi, Wardha, Maharashtra 442001
- **Links:** [sorrawhitenight.com](https://sorrawhitenight.com), [GitHub repo](https://github.com/avinyaaisolutionspvtltd-cloud/sorrawhitenight.com)
- **Stack:** Next.js (static export) + Tailwind CSS v4 + AWS S3 + Cloudflare
- **Repo folder:** `sorrawhitenight-website/`

## Repo Layout (top level)

```
sorrawhitenight-website/
├── src/               # All app + UI code
├── public/            # Static assets (images, manifest, icons)
├── deploy/            # Deployment scripts
├── docs/              # This documentation
├── out/               # Build output (static export), gitignored
├── next.config.ts
└── package.json
```

> Note: the site is *not* the "Avinya GEO" platform. The parent `AGENTS.md` in `/data/avinya-projects/` is for a different project. This repo has its own `AGENTS.md`.