# Project Overview

## Business

**Sorra White Night** is an upscale rooftop café & restaurant in Wardha, Maharashtra (Vidarbha region). The site is a premium, single-page marketing site — an "online presence" + online booking front-door. There is **no backend, no database, no auth**. Everything is static and served from a CDN.

Tagline: *Good Food. Great Vibes. Better Together.*

## Key Contact Details (used across the site)

| Item | Value |
|------|-------|
| Display phone | `+91 8329 120 266` |
| Phone link | `tel:+918329120266` |
| Email | `sorra.whitenight@gmail.com` |
| WhatsApp number | `918329120266` |
| Address | Nagthana Square, Sawangi T Point to Nagthana/Nagpur Bypass Road, near Chintamani Lawn, Sawangi, Wardha, Maharashtra 442001 |

These live in a single source of truth: `src/lib/contact.ts`. **Never hardcode them in components** — import from there.

## WhatsApp Booking (the KISS feature)

There is no booking form/submission. Three pre-filled WhatsApp deep links (+ prefilled message) are used:

- `WHATSAPP_RESERVE` — "reserve a table" (Reservation card, Header CTA)
- `WHATSAPP_EVENT` — "plan an event" (Occasions section)
- `WHATSAPP_GENERAL` — generic "Hi" (misc chat links)

## Design Identity

Luxury, dark, gold-and-ivory. Learn this before touching UI:

- **Backgrounds** — deep black/charcoal `#0b0a08`, near-black `#070605`
- **Surface cards** — `#14120e`
- **Gold (primary)** — `#c9a96a`; light gold `#e0c897`; dark gold `#a5824a`
- **Ivory text** — `#f5efe3`; muted text `#a89f8d`
- **Fonts (Google, via next/font):**
  - `Cormorant Garamond` — serif display headings
  - `Manrope` — body/sans
  - `Great Vibes` — script accents
- Sections are introduced with an "eyebrow" label (small, tracked-out uppercase gold text) and a **gold-line** divider.

## Current Site Sections (top to bottom, see `src/app/page.tsx`)

1. Header (fixed nav, mobile hamburger)
2. Hero — rooftop photo, tagline, dual CTAs, scroll indicator
3. BrandIntro (`#about`)
4. Experience — 4 pillars (Fine Dining, Café & Coffee, etc.)
5. MenuPreview (`#menu`) — Wardha dishes, photo cards, no prices
6. SignatureDishes (`#dishes`) — horizontal swiper
7. Ambience (`#gallery`) — photo mosaic
8. Occasions (`#events`) — Booking & Celebrations
9. SocialGallery
10. Reviews
11. Reservation (`#contact`) — contact card + Google Map iframe + WhatsApp CTA
12. Footer
13. InstallPrompt — mobile "Add to Home Screen" prompt (first-time visitors only)

## Launch Status

- Live in production at `https://www.sorrawhitenight.com`
- HTTPS via Cloudflare (free plan)
- No prices shown on the menu (business decision)
- Menu & event images are free Wikimedia Commons photos (CC BY-SA 4.0)

## Important Gotchas

- **No prices anywhere.** Removing/adding prices required explicit owner request only.
- **Site is a static export** — no server runtime, no API routes, no SSG data fetching. Client-side interactivity only.
- **Logo must not be changed** (owner requirement).
- Google Map iframe embed in `Reservation.tsx` is a placeholder coordinate; owner has not supplied the exact map URL.