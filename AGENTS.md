<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Sorra White Night Website

Static single-page marketing site for the Sorra White Night café & restaurant (Wardha). **Next.js produces a static export (no backend/DB/auth).**

For working context, read the docs:

- `docs/README.md` — index & read order
- `docs/PROJECT_OVERVIEW.md` — business, contact, sections, gotchas
- `docs/TECH_STACK.md` — exact versions & config
- `docs/ARCHITECTURE.md` — components, data flow
- `docs/CONVENTIONS.md` — style & safety rules
- `docs/LOCAL_SETUP.md` — run it locally
- `docs/DEPLOYMENT.md` — AWS S3 + Cloudflare runbook
- `docs/TASKS.md` — common maintenance edits

Non-negotiable: contact info lives in `src/lib/contact.ts`; menu has NO prices; logo must not change; run `npm run lint` + `npm run build` before committing.
