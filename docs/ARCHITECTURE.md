# Architecture

Feature-based single-page app. All code lives under `src/`. No backend, no state management library — components are self-contained presentational units composed in the page.

## Folder structure (`src/`)

```
src/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, PWA head tags, <InstallPrompt/>
│   ├── page.tsx          # Home page — composes all 13 sections in order
│   ├── globals.css       # Tailwind v4 import + theme tokens + utility classes
│   ├── not-found.tsx     # 404 page
│   └── favicon.ico
├── components/           # 15 feature components + icons
└── lib/
    └── contact.ts        # SINGLE SOURCE of truth for phone/email/WhatsApp
```

## Page composition (`src/app/page.tsx`)

Header → Hero → BrandIntro → Experience → MenuPreview → SignatureDishes → Ambience → Occasions → SocialGallery → Reviews → Reservation → Footer. Plus `<InstallPrompt/>` mounted once in the root layout.

## Component inventory

| Component | File | Purpose | Notes |
|-----------|------|---------|-------|
| Header | `components/Header.tsx` ("use client") | Fixed nav + mobile hamburger menu, reserve CTA | Scroll state, body-scroll lock on menu open |
| Hero | `components/Hero.tsx` ("use client") | Photo hero, tagline, CTAs, scroll indicator | Parallax via scrollY + rAF |
| BrandIntro | `components/BrandIntro.tsx` | Logo/photo + about, `#about` |
| Experience | `components/Experience.tsx` | 4 experience pillars |
| MenuPreview | `components/MenuPreview.tsx` | Wardha menu grid (12 dishes, **no prices**) | Data array at top of file |
| SignatureDishes | `components/SignatureDishes.tsx` | Horizontal snap swiper (6 dishes) |
| Ambience | `components/Ambience.tsx` | Gallery mosaic, `#gallery` |
| Occasions | `components/Occasions.tsx` | Booking & Celebrations cards, `#events` | Uses `WHATSAPP_EVENT` |
| SocialGallery | `components/SocialGallery.tsx` | Instagram-style grid |
| Reviews | `components/Reviews.tsx` | Testimonial cards |
| Reservation | `components/Reservation.tsx` | Contact card + map iframe, `#contact` | Uses `WHATSAPP_RESERVE` |
| Footer | `components/Footer.tsx` | Links, contact, social icons |
| InstallPrompt | `components/InstallPrompt.tsx` ("use client") | Mobile A2HS prompt, first-visit-only via localStorage | Uses `/icons/icon-192.png` |
| Reveal | `components/Reveal.tsx` ("use client") | Scroll-reveal wrapper (IntersectionObserver + rAF) | Wrap any section to fade-in |
| icons | `components/icons.tsx` | Shared `WhatsAppIcon` (and others) | Reuse, don't re-inline SVGs |

## Data flow

No fetches. Each component owns static data at the top of its file (the `categories`, `dishes`, `occasions`, `reviews`, etc. arrays). Editing the site = editing these arrays + `src/lib/contact.ts`.

## Assets (`public/`)

| Folder | Contents |
|--------|----------|
| `public/images/` | Brand photos (rooftop.webp, dining.webp, garden.webp, banner.webp, logos) |
| `public/menu-images/` | Dish photos (`vada-pav.jpg`, `saoji-chicken.jpg`, ...) — free Wikimedia Commons (CC BY-SA 4.0) |
| `public/icons/` | PWA icons (icon-192/512, apple-touch-icon) |
| `public/manifest.json` | PWA web manifest |

Rules:
- Add new images under `public/`, use Next `<Image>` with `fill` + `sizes` (matching how neighbors do it) or plain `img`.
- Compress images (WebP preferred) — banner was optimized from 1.87MB → 122KB.

## PWA / Install prompt

- `public/manifest.json` + PWA head meta in `layout.tsx`.
- `InstallPrompt.tsx` shows a bottom sheet:
  - Chrome/Android: drives the native `beforeinstallprompt`.
  - iOS Safari: shows Share → "Add to Home Screen" instructions.
  - Only first-time mobile visitors (localStorage `swn-install-dismissed`), hidden for desktop/standalone.
- No service worker / offline caching (S3 static export limitation)**.