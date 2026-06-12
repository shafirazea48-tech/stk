import { NextResponse } from "next/server";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.link");

interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
  alternates?: { hreflang: string; href: string }[];
}

function buildXml(urls: UrlEntry[]): string {
  const urlBlocks = urls
    .map((u) => {
      const alts = u.alternates
        ? u.alternates
            .map(
              (a) =>
                `  <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`
            )
            .join("\n")
        : "";
      return [
        "<url>",
        `  <loc>${u.loc}</loc>`,
        alts,
        `  <changefreq>${u.changefreq}</changefreq>`,
        `  <priority>${u.priority}</priority>`,
        "</url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks}
</urlset>`;
}

export function GET() {
  const homeAlts = [
    { hreflang: "en", href: siteUrl },
    { hreflang: "id", href: `${siteUrl}/id` },
    { hreflang: "es", href: `${siteUrl}/es` },
    { hreflang: "pt-BR", href: `${siteUrl}/pt-br` },
    { hreflang: "x-default", href: siteUrl },
  ];
  const pricingAlts = [
    { hreflang: "en", href: `${siteUrl}/pricing` },
    { hreflang: "id", href: `${siteUrl}/id/pricing` },
    { hreflang: "es", href: `${siteUrl}/es/pricing` },
    { hreflang: "pt-BR", href: `${siteUrl}/pt-br/pricing` },
    { hreflang: "x-default", href: `${siteUrl}/pricing` },
  ];
  const tournamentsAlts = [
    { hreflang: "en", href: `${siteUrl}/tournaments` },
    { hreflang: "id", href: `${siteUrl}/id/tournaments` },
    { hreflang: "es", href: `${siteUrl}/es/tournaments` },
    { hreflang: "pt-BR", href: `${siteUrl}/pt-br/tournaments` },
    { hreflang: "x-default", href: `${siteUrl}/tournaments` },
  ];

  const urls: UrlEntry[] = [
    { loc: siteUrl, changefreq: "weekly", priority: "1.0", alternates: homeAlts },
    { loc: `${siteUrl}/id`, changefreq: "weekly", priority: "0.95", alternates: homeAlts },
    { loc: `${siteUrl}/es`, changefreq: "weekly", priority: "0.95", alternates: homeAlts },
    { loc: `${siteUrl}/pt-br`, changefreq: "weekly", priority: "0.95", alternates: homeAlts },
    { loc: `${siteUrl}/pricing`, changefreq: "monthly", priority: "0.85", alternates: pricingAlts },
    { loc: `${siteUrl}/id/pricing`, changefreq: "monthly", priority: "0.8", alternates: pricingAlts },
    { loc: `${siteUrl}/es/pricing`, changefreq: "monthly", priority: "0.8", alternates: pricingAlts },
    { loc: `${siteUrl}/pt-br/pricing`, changefreq: "monthly", priority: "0.8", alternates: pricingAlts },
    { loc: `${siteUrl}/tournaments`, changefreq: "daily", priority: "0.85", alternates: tournamentsAlts },
    { loc: `${siteUrl}/id/tournaments`, changefreq: "daily", priority: "0.8", alternates: tournamentsAlts },
    { loc: `${siteUrl}/es/tournaments`, changefreq: "daily", priority: "0.8", alternates: tournamentsAlts },
    { loc: `${siteUrl}/pt-br/tournaments`, changefreq: "daily", priority: "0.8", alternates: tournamentsAlts },
    { loc: `${siteUrl}/agreement`, changefreq: "yearly", priority: "0.4" },
    { loc: `${siteUrl}/aml-policy`, changefreq: "yearly", priority: "0.3" },
    { loc: `${siteUrl}/copy-trading-agreement`, changefreq: "yearly", priority: "0.3" },
  ];

  return new NextResponse(buildXml(urls), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
