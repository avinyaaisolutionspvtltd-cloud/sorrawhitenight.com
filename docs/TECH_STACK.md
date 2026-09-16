# Tech Stack

## Versions (from package.json / lockfile)

| Tool | Version |
|------|---------|
| Next.js | **16.3.5** (Turbopack) |
| React | **19.2.8** |
| TypeScript | ^5 |
| Tailwind CSS | **v4** (via `@tailwindcss/postcss`) |
| ESLint | ^9 (flat config `eslint.config.mjs`) |
| Node | use Node 20/22+ (modern LTS; anything supporting Next 16) |
| Package manager | npm (`package-lock.json` present) |

## Framework configuration

**`next.config.ts` — static export:**
```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
```

Consequences:
- `npm run build` emits a fully static site into `out/`.
- **No** API routes, middleware, server actions, or server components that call data.
- `next/image` is used but outputs plain `<img>` (no optimizer) — add new images as static files under `public/`, reference by absolute path like `/menu-images/x.jpg`.
- `trailingSlash: true` → S3/Cloudflare must serve `index.html` per directory (S3 static website hosting handles this automatically).

## Styling

- Tailwind CSS **v4** (CSS-first config — no `tailwind.config.js`; theme is declared in CSS via `@theme inline` in `src/app/globals.css`).
- Design tokens are CSS variables (`--primary`, `--ivory`, etc.) mapped into Tailwind color utilities (`bg-primary`, `text-ivory`, `text-muted`, `border-border-gold`, ...).
- Reusable CSS utility classes defined in `globals.css`: `.eyebrow`, `.serif-display`, `.script-accent`, `.gold-line`, `.gold-line-short`, `.gold-frame`, `.img-zoom`, `.glass`, `.reveal-anim`, `.text-shadow-hero`.

## Fonts

Loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables:
- `--font-cormorant` (Cormorant Garamond)
- `--font-manrope` (Manrope)
- `--font-great-vibes` (Great Vibes)

Tailwind maps them: `--font-serif`, `--font-sans`, `--font-script`.

## JavaScript dependencies

Only three runtime deps: `next`, `react`, `react-dom`. **No** state library, no HTTP client (TanStack Query/Axios do not apply — static site). Do not add heavy dependencies; the site is tiny and must stay fast.

## Aliases

`@/*` → `./src/*` (see `tsconfig.json`). Import components as `@/components/X` and lib as `@/lib/contact`.

## Verification commands

```bash
npm run lint   # ESLint (flat config)
npm run build  # typecheck + static export to out/
```

There are **no tests** in this repo.