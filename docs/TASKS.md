# Common Tasks

Repeatable edits owners ask for, and the exact file to touch. After any change: `npm run lint && npm run build`, then deploy (see `DEPLOYMENT.md`).

## Add / change menu dishes

File: `src/components/MenuPreview.tsx` → `categories` array.
Mirror in `src/components/SignatureDishes.tsx` → `dishes` array if it should appear in the swiper.

Dish object shape (MenuPreview):
```
{ name: "Street Favourite", image: "/menu-images/vada-pav.jpg", dish: "Vada Pav", desc: "..." }
```
- `name` = category badge; `dish` = title; `desc` = one line.
- **No price field.** Do not add prices without explicit owner approval.
- Image file goes in `public/menu-images/` (name it `dish-slug.jpg`, e.g. `puran-poli.jpg`).
- Use free images only (Wikimedia Commons CC-BY-SA or owner-provided). Verify the photo actually shows the dish.

## Add / change celebration types (Booking & Celebrations)

File: `src/components/Occasions.tsx` → `occasions` array.
Item shape: `{ title, image, note }`. Update at most ~6 cards; the grid is 3-per-row.

## Change contact details (phone / email / WhatsApp)

File: `src/lib/contact.ts` (single source of truth).
- `PHONE_DISPLAY`, `PHONE_TEL`, `EMAIL`
- `WHATSAPP_RESERVE` / `WHATSAPP_EVENT` / `WHATSAPP_GENERAL` pre-fill messages
- All components import from here — you only edit this one file.

## Change hours / reservation copy

File: `src/components/Reservation.tsx`. Currently all days "Open 24 Hours". Update the `hours` array and the "Visit Us" card text.

## Update real photos / banner / logos

Directory: `public/images/`.
- Hero: `Hero.tsx` refs `/images/rooftop.webp`.
- Ambience gallery & SocialGallery: refs in `Ambience.tsx`, `SocialGallery.tsx`, `BrandIntro.tsx`.
- Banner: `public/images/banner.webp` (compressed; keep under ~150KB, WebP).
- Logos: `sorra_logo_transparent.png` / `sorra_logo_cropped.png` (header, hero, footer, favicon) — **do not change the logo** without owner approval.

## Rebuild favicon / PWA icons

Logo-derived icons in `public/icons/` (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`). Manifest: `public/manifest.json`. Unless the logo changes, leave alone.

## Change site metadata / SEO

File: `src/app/layout.tsx` → `metadata` export (title, description, keywords, OpenGraph, Twitter card, `metadataBase`).
PWA head tags + manifest link live in `<head>` in the same file.

## Fix something on mobile

Follow existing patterns:
- Horizontally scrollable strips: `overflow-x-auto overscroll-x-contain snap-x` (see `SignatureDishes.tsx`).
- Stacked full-width CTAs on small screens: `w-full sm:w-auto` (see `Reservation.tsx`, `Hero.tsx`).
- Hover-only reveals: gate with `md:` so mobile still shows content (see `SignatureDishes` card description).
- Check for horizontal overflow on a 320px viewport after changes.

## Troubleshooting

| Symptom | Likely cause / fix |
|---------|--------------------|
| Browser shows old page | Hard refresh; Cloudflare caches ~seconds; clear CDN edge by re-running the sync (new object version busts cache). |
| Page won't load over https | Open `https://www...` explicitly; browser HTTPS-first can fail on mixed content; Cloudflare Flexible SSL expects HTTP origin. |
| DNS not resolving | Check Cloudflare NS on GoDaddy; verify `dig +short @8.8.8.8 www...` returns 104.21.x / 172.67.x. |
| 404 on www | Bucket name must equal `www.sorrawhitenight.com`; check `curl -s http://www.sorrawhitenight.com.s3-website.ap-south-1.amazonaws.com`. |
| lint/build fail | Fix; must be clean before deploy. |
| Images missing | File uploaded? Path correct in `public/`? `--delete` removed it? Re-sync. |