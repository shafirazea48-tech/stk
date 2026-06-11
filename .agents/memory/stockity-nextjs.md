---
name: Stockity Next.js setup
description: Key decisions and gotchas for the Stockity website artifact built in Next.js
---

## Rule
Use `next@latest` (16.x) for the stockity-web artifact — `next@15.3.3` is blocked by Replit package firewall due to a security vulnerability.

**Why:** `pnpm --filter @workspace/stockity-web add next@15.3.3` returns HTTP 403 from `package-firewall.replit.local`. The latest version (16.x+) installs cleanly.

**How to apply:** When adding or upgrading next.js in this workspace, always use `next@latest` or a specific patched version ≥ 15.3.4.

## Tailwind v4 + Next.js
- Use `@tailwindcss/postcss` as the PostCSS plugin (NOT `@tailwindcss/vite`)
- `app/globals.css` starts with `@import "tailwindcss"` (v4 syntax)
- No `tailwind.config.ts` needed — configuration is done in CSS

## Dev origins (Replit proxy)
- next.config.ts reads `process.env.REPLIT_DEV_DOMAIN` to set `allowedDevOrigins`
- Without this, Next.js dev logs warn about blocked cross-origin requests for HMR and fonts

## PORT
- dev script: `next dev -p $PORT` — Replit workflow system injects PORT automatically
