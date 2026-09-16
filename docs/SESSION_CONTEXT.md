# Session Context — Sorra White Night Website

Snapshot of the build session. Combine with the docs (`docs/README.md` + files it points to) for complete context.

- **Session date:** 15–16 Sep 2026
- **Machine:** /data/avinya-projects (Linux, `satish` user)
- **Repo:** /data/avinya-projects/sorrawhitenight-website (git, branch `main`)
- **Remote:** https://github.com/avinyaaisolutionspvtltd-cloud/sorrawhitenight.com.git
- **Live site:** https://www.sorrawhitenight.com (HTTPS via Cloudflare)

---

## Environment facts

- Dev server daemon: `nohup npm run dev > /tmp/next-dev.log 2>&1 &` → http://localhost:3000
- AWS CLI: `/home/satish/.local/bin/aws`, account `323477258751`, region `ap-south-1`
- Analytics: none. Backend: none. Env vars: none needed.

## What was built this session (chronological)

1. **PWA install prompt** (commit `6db75a7`)
   - `public/manifest.json` (renamed from `.webmanifest` for S3 content-type safety)
   - PWA head meta in `layout.tsx` (manifest link, theme-color, apple-mobile-web-app, apple-touch-icon)
   - PWA icons from logo: `public/icons/icon-192.png`, `icon-512.png`, `apple-touch-icon.png`
   - `src/components/InstallPrompt.tsx` — first-visit-only (localStorage `swn-install-dismissed`), `beforeinstallprompt` for Chrome, iOS Share→A2HS fallback, hidden if standalone
   - Also fixed Hero heading overflow on small phones.

2. **Mobile responsiveness fixes** (commit `80e90b0`)
   - SignatureDishes: dish descriptions now visible on mobile (were hover-only), `overscroll-x-contain`
   - Reservation: full-width WhatsApp CTAs on mobile (`w-full sm:w-auto`)
   - Audited Header/MenuPreview/Occasions/Reviews/Experience/SocialGallery/Footer — all already responsive.

3. **Production deployment** (commits `e6ea768` and infra)
   - Attempted CloudFront: **blocked** — AWS error "account must be verified before you can add new CloudFront resources" (requires AWS Support case).
   - Deployed to S3 static website hosting instead.
   - Discovered S3 routes by `Host` header → bucket name, so created bucket named exactly `www.sorrawhitenight.com`.
   - Live topology: GoDaddy domain → Cloudflare (CDN + Let's Encrypt HTTPS) → S3 origin bucket `www.sorrawhitenight.com`.
   - Apex bucket `sorrawhitenight.com` = 301 redirect to www.
   - Removed GoDaddy Domain Forwarding (it caused "This page isn't working" redirect loops + 404s from parked A records).

4. **Wardha menu with matched free images, no prices** (commits `7f1506c`, `8ea9fc0`)
   - MenuPreview: 12 Wardha/Vidarbha dishes (Vada Pav, Misal Pav, Batata Vada, Tarri Poha, Saoji Chicken, Shev Bhaji, Zunka Bhakri, Thalipeeth, Pithla Bhakri, Puran Poli, Modak, Sabudana Khichdi).
   - SignatureDishes: updated to Wardha dishes too.
   - **All prices removed.**
   - Images: free Wikimedia Commons, license CC BY-SA 4.0, verified via file description metadata to match each dish name.
   - Matki Usal image was wrong → replaced dish with Sabudana Khichdi.
   - Pending (optional): add Wikimedia attribution credit line in Footer.

5. **Booking & Celebrations** (commit `cb4e6a8`)
   - Occasions.tsx redesigned: Birthday Party, Kitty Party, Wedding Anniversary, Retirement Program, Ring Ceremony, "And More Little Moments".
   - Used attached WhatsApp photo `public/images/celebration-birthday.jpg` for Birthday card (image could not be visually verified — model limitation).

6. **Agent-context docs** (commit `691fc6d`)
   - Full `docs/` set (see `docs/README.md` index): PROJECT_OVERVIEW, TECH_STACK, ARCHITECTURE, CONVENTIONS, LOCAL_SETUP, DEPLOYMENT, TASKS.
   - Updated AGENTS.md, CLAUDE.md, README.md to point at docs.

## Current infrastructure state (verified 16 Sep 2026)

- **S3 buckets (ap-south-1):** `www.sorrawhitenight.com` = live origin (website hosting, index `index.html`, error `404.html`, public-read policy); `sorrawhitenight.com` = apex 301 redirect; `sorrawhitenight-website` = legacy/unused.
- **Cloudflare zone:** `sorrawhitenight.com`, Free plan, NS = `asa.ns.cloudflare.com` + `brett.ns.cloudflare.com` (GoDaddy points at these).
  - DNS: `@` and `www` → CNAME → `www.sorrawhitenight.com.s3-website.ap-south-1.amazonaws.com`, both Proxied.
  - SSL: Flexible; Always Use HTTPS ON. Edge IPs: 104.21.79.166 / 172.67.146.154.
- **Live checks:** `https://www.sorrawhitenight.com` = 200; `https://sorrawhitenight.com` = 301 → www.

## Git history (latest → oldest)

691fc6d docs / cb4e6a8 celebrations / 8ea9fc0 sabudana fix / 7f1506c wardha menu / e6ea768 deploy www bucket / 80e90b0 mobile fixes / 6db75a7 PWA install prompt / b5eb381 whatsapp booking / 0f9a800 premium redesign / c77224d banner / 9786b08 logo / 6c02aed real photos / 67f3634 init

## Verified commands (always run before commit)

```bash
cd /data/avinya-projects/sorrawhitenight-website
npm run lint
npm run build
aws s3 sync ./out s3://www.sorrawhitenight.com --delete --region ap-south-1 --exact-timestamps
```

## Notes / decisions for the owner

- WhatsApp number `918329120266` assumed working — confirm it's registered on WhatsApp.
- Google Maps embed in `Reservation.tsx` is placeholder coordinates; real map link not yet provided.
- Prices intentionally not shown (owner decision).
- CloudFront is not needed now; Cloudflare handles HTTPS/CDN. Revisit only if owner wants AWS-native CDN.
- Instagram/Facebook footer links point to generic homepages (not business profiles) — need real profile URLs when available.
- Menu/event images are CC BY-SA 4.0 — a small credit line in the Footer is recommended (not yet added).