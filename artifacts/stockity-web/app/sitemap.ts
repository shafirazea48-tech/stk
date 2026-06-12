import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.link");

const homeLangs = {
  en: siteUrl,
  id: `${siteUrl}/id`,
  es: `${siteUrl}/es`,
  "pt-BR": `${siteUrl}/pt-br`,
};

const pricingLangs = {
  en: `${siteUrl}/pricing`,
  id: `${siteUrl}/id/pricing`,
  es: `${siteUrl}/es/pricing`,
  "pt-BR": `${siteUrl}/pt-br/pricing`,
};

const tournamentsLangs = {
  en: `${siteUrl}/tournaments`,
  id: `${siteUrl}/id/tournaments`,
  es: `${siteUrl}/es/tournaments`,
  "pt-BR": `${siteUrl}/pt-br/tournaments`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1.0, alternates: { languages: homeLangs } },
    { url: `${siteUrl}/id`, changeFrequency: "weekly", priority: 0.95, alternates: { languages: homeLangs } },
    { url: `${siteUrl}/es`, changeFrequency: "weekly", priority: 0.95, alternates: { languages: homeLangs } },
    { url: `${siteUrl}/pt-br`, changeFrequency: "weekly", priority: 0.95, alternates: { languages: homeLangs } },
    { url: `${siteUrl}/pricing`, changeFrequency: "monthly", priority: 0.85, alternates: { languages: pricingLangs } },
    { url: `${siteUrl}/id/pricing`, changeFrequency: "monthly", priority: 0.8, alternates: { languages: pricingLangs } },
    { url: `${siteUrl}/es/pricing`, changeFrequency: "monthly", priority: 0.8, alternates: { languages: pricingLangs } },
    { url: `${siteUrl}/pt-br/pricing`, changeFrequency: "monthly", priority: 0.8, alternates: { languages: pricingLangs } },
    { url: `${siteUrl}/tournaments`, changeFrequency: "daily", priority: 0.85, alternates: { languages: tournamentsLangs } },
    { url: `${siteUrl}/id/tournaments`, changeFrequency: "daily", priority: 0.8, alternates: { languages: tournamentsLangs } },
    { url: `${siteUrl}/es/tournaments`, changeFrequency: "daily", priority: 0.8, alternates: { languages: tournamentsLangs } },
    { url: `${siteUrl}/pt-br/tournaments`, changeFrequency: "daily", priority: 0.8, alternates: { languages: tournamentsLangs } },
    { url: `${siteUrl}/agreement`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/aml-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/copy-trading-agreement`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
