# Conventions

Guidelines that keep the codebase consistent. Follow these exactly when modifying the site.

## Code style (Next.js 16 / TypeScript / Tailwind v4)

- TypeScript strict mode is on. Type everything; avoid `any`.
- **No comments unless asked.** The repo has essentially zero code comments — keep it that way.
- Prefer server components where possible; add `"use client"` only when interactivity requires it (state, effects, events) — e.g. Header, Hero, Reveal, InstallPrompt.
- Components: functional components with a default export, PascalCase filenames.
- Data arrays live at the top of their component file. Keep that pattern.
- One component = one responsibility. Do not build god components.

## Styling rules

- Use design tokens (Tailwind color utilities derived from `globals.css`): `bg-background`, `bg-background-deep`, `bg-surface`, `text-ivory`, `text-muted`, `text-primary`, `text-primary-light`, `border-border-gold`.
- Reuse the shared CSS classes: `.eyebrow`, `.serif-display`, `.script-accent`, `.gold-line-short`, `.gold-frame`, `.img-zoom`, `.glass`, `.text-shadow-hero`.
- Do **not** invent new hex colors inline. If a new shade is genuinely needed, add a token to `globals.css`.
- Keep the luxury dark/gold aesthetic. No bright/light pops of color.
- Keep sections responsive: mobile-first, `px-5 sm:px-8`, stacking grids with `sm:`/`lg:` breakpoints. Verify no horizontal overflow on 320px-wide phones.

## Contact info — rule

**Phone, email, WhatsApp all live in `src/lib/contact.ts`. Import and reuse. Never hardcode numbers/emails in components.**

## Menu & images — rule

- Menu dish cards have **no prices** (explicit business decision).
- Dish images must be **free to use** (Wikimedia Commons / CC or owner-provided). Download + verify the image actually matches the dish name before shipping.
- If adding a non-Wikimedia image, ensure license permits commercial use and add attribution in the Footer (a small credit line is pending — add one if requested).

## Content placement

- Menu items → `MenuPreview.tsx` (`categories` array) and/or `SignatureDishes.tsx` (`dishes` array).
- Event/celebration types → `Occasions.tsx` (`occasions` array).
- Reviews → `Reviews.tsx`.
- Business contact → `Contact` section (`Reservation.tsx`) and `Footer.tsx`.

## Safety rules

- Changes require: `npm run lint` + `npm run build` both clean before commit.
- Deploy = run the deploy script (see `DEPLOYMENT.md`); verify the live URL after.
- Never commit directly to production infra state from experimentation; follow the deploy runbook.
- Don't change the logo, brand name, or tagline without explicit owner approval.
- Static export: no runtime secrets, no `.env` needed at runtime, nothing server-side.

## Git

- Repo: `sorrawhitenight-website`, single branch `main`.
- Commit messages: concise, `type: subject` (conventional-commit style, matching history).
- Do not commit `/out`, `/node_modules`, `.next` (gitignored already).