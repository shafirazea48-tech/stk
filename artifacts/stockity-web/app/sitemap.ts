import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.id");

const allLangs = {
  en: siteUrl,
  id: `${siteUrl}/id`,
  es: `${siteUrl}/es`,
  "pt-BR": `${siteUrl}/pt-br`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: allLangs },
    },
    {
      url: `${siteUrl}/id`,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: allLangs },
    },
    {
      url: `${siteUrl}/es`,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: allLangs },
    },
    {
      url: `${siteUrl}/pt-br`,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: allLangs },
    },
    {
      url: `${siteUrl}/agreement`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/aml-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/copy-trading-agreement`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
