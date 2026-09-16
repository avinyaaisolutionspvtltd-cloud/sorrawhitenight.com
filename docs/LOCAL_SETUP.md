# Local Setup

Get the site running locally for development.

## Prerequisites

- **Node.js** 20+ (tested on recent LTS)
- **npm** (comes with Node)
- **Git**

You do **not** need AWS, network access, or any env vars for local development.

## 1. Clone

```bash
git clone https://github.com/avinyaaisolutionspvtltd-cloud/sorrawhitenight.com.git
cd sorrawhitenight-website
```

(Location on this machine already: `/data/avinya-projects/sorrawhitenight-website`.)

## 2. Install

```bash
npm install
```

Uses `package-lock.json`, so it's reproducible. No `.env` files needed.

## 3. Run dev server

```bash
npm run dev
```

Open http://localhost:3000

- Hot reload works for edits to `src/`.
- The dev server is currently run via `nohup` on this machine; log: `/tmp/next-dev.log`.
- Press `Ctrl+C` in the foreground dev server to stop.

### If you run it as a background daemon

```bash
nohup npm run dev > /tmp/next-dev.log 2>&1 &
```

## 4. Verify (before committing changes)

```bash
npm run lint
npm run build
```

- `lint`: ESLint flat config.
- `build`: Next static export → writes `out/`, also runs TypeScript typecheck.
- Both must pass clean.

## 5. View the production-style build

`npm run build` writes a static site to `out/`. To serve it locally:

```bash
npx serve out
# or
python3 -m http.server 3000 --directory out
```

## Project layout quick map

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Page composition (section order) |
| `src/components/` | All UI sections |
| `src/lib/contact.ts` | Phone/email/WhatsApp constants |
| `public/` | Static images, manifest, PWA icons |
| `deploy/` | Deployment scripts (see DEPLOYMENT.md) |

## Common issues

- **Port 3000 busy** → `npm run dev -- -p 3001`.
- **Fonts fail to load offline** → `next/font/google` downloads at build time; needs internet for the first build.
- **`images` lint warnings** → this build uses unoptimized images by design (`next.config.ts`); `img-zoom` and `fill`+`sizes` are the established pattern.
- **node_modules issues** → delete `node_modules` + `package-lock.json`? No — keep the lockfile; just `npm ci`.