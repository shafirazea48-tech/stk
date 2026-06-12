---
name: Stockity i18n multilingual setup
description: How EN/ID multilingual support is implemented — route structure, component pattern, hreflang
---

## Route structure
- `/` → English homepage
- `/id` → Indonesian homepage  
- `/about`, `/pricing`, `/tournaments` → English only (+ locale="en" prop)
- `/id/about`, `/id/pricing`, `/id/tournaments` → Indonesian pages
- `/agreement`, `/aml-policy`, `/copy-trading-agreement` → English only, NO /id/ versions

## Component pattern
Every section component accepts `locale?: Locale` prop. Call `getT(locale ?? 'en')` at top of function. Single source of truth in `lib/i18n/translations.ts`.

```tsx
import { getT, Locale } from "@/lib/i18n/translations";
export default function MySection({ locale }: { locale?: Locale }) {
  const t = getT(locale ?? "en");
  return <p>{t.section.key}</p>;
}
```

## Highlighted spans
For headings with colored spans where word order differs between EN/ID, use locale-conditional variables in the component (not in translations):
```tsx
const before = locale === 'id' ? 'Belajar dari para ' : 'Learn from the ';
const highlight = locale === 'id' ? 'ahli' : 'experts';
// <p>{before}<span style={{ color: "#0C8DF8" }}>{highlight}</span></p>
```

## hreflang (Google-standard)
- `app/layout.tsx`: global `<link rel="alternate" hrefLang="en/id/x-default">` tags in `<head>`
- Each page exports `metadata.alternates.languages` for page-specific canonical/language pairs
- `app/sitemap.ts`: all pages include `alternates.languages` with EN/ID counterparts

## Language switcher
Header shows flag (GB or ID) that links to the opposite locale's URL.  
EN (`/`) → ID flag links to `/id`; ID (`/id`) → GB flag links to `/`.

**Why:** Use locale prop + conditional rendering rather than a context provider — avoids client-side hydration complexity and keeps components SSR-friendly.
