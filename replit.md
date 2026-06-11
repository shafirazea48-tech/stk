# Stockity Website

A full Next.js rebuild of the Stockity trading platform marketing website (stockity.id/en), faithfully recreating all sections with dark theme, responsive design, and all original content.

## Run & Operate

- `pnpm --filter @workspace/stockity-web run dev` — run the Stockity website (port 20544)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- **Stockity Website**: Next.js 16 (App Router), Tailwind CSS v4, `@tailwindcss/postcss`
- API: Express 5
- Build: Next.js Turbopack (dev), esbuild (API)

## Where things live

- `artifacts/stockity-web/` — Stockity website (Next.js)
  - `app/page.tsx` — main landing page (imports all section components)
  - `app/layout.tsx` — root layout with Nunito Sans font, metadata
  - `app/globals.css` — Tailwind v4 + dark theme CSS variables
  - `components/` — all section components (Header, HeroSection, TradersNeedsSection, etc.)
  - `public/images/` — all extracted images from original HTTrack ZIP
  - `next.config.ts` — Next.js config with REPLIT_DEV_DOMAIN allowedDevOrigins
- `artifacts/api-server/` — Express API server

## Architecture decisions

- **Next.js App Router** over Pages Router: uses `app/` directory for modern React patterns
- **Tailwind CSS v4** with `@tailwindcss/postcss` (NOT `@tailwindcss/vite` which was for the old Vite setup)
- **`"use client"`** only on interactive components (Header, ReviewsSection, FaqSection) — server components for static sections
- **`images.unoptimized: true`** in next.config.ts — local images in public/ need no CDN optimization for dev/Replit hosting
- **Dark theme colors** inlined as Tailwind arbitrary values (`bg-[#151723]`, etc.) matching original CSS variables

## Product

Stockity is a trading platform landing page with sections:
1. Header (nav with dropdowns, EN/ID language switcher, login/register)
2. Hero ("Stockity. Making investing clear" with background image)
3. Traders Needs (4.8 rating, 3.5M+ investors, 140+ assets, $10 min, 170+ countries)
4. Usable/Reliable/Secure section
5. Assets (140+ categories: currencies, stocks, crypto, commodities)
6. Protect (fund protection + no hidden fees cards)
7. Copytrading ("Learn from the experts")
8. Withdraw (payment methods)
9. Device (mobile apps + web platform)
10. Charity (social impact)
11. Partner (licensed & regulated)
12. Reviews (7 testimonials with carousel)
13. FAQ (4 accordion questions)
14. Join CTA ("3.5M+ investors")
15. Footer (links, disclaimer, socials)

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `next dev -p $PORT` — the PORT env var is set by the Replit workflow system; always use it in the dev/start scripts
- `allowedDevOrigins` in next.config.ts uses `REPLIT_DEV_DOMAIN` env var to avoid cross-origin dev warnings
- Next.js 15.3.3 is blocked by Replit package firewall (security vulnerability); installed `next@latest` (16.x) instead
- Tailwind v4 uses `@import "tailwindcss"` in globals.css and `@tailwindcss/postcss` plugin (NOT `tailwind.config.ts`)
- All images are in `public/images/` mapped from the HTTrack ZIP structure

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Original ZIP source: `attached_assets/stockity_1781147730997.zip`
