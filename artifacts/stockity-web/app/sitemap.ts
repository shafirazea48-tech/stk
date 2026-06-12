import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.id");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: siteUrl,
          id: `${siteUrl}/id`,
        },
      },
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/about`,
          id: `${siteUrl}/id/about`,
        },
      },
    },
    {
      url: `${siteUrl}/pricing`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteUrl}/pricing`,
          id: `${siteUrl}/id/pricing`,
        },
      },
    },
    {
      url: `${siteUrl}/tournaments`,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${siteUrl}/tournaments`,
          id: `${siteUrl}/id/tournaments`,
        },
      },
    },
    {
      url: `${siteUrl}/id`,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          en: siteUrl,
          id: `${siteUrl}/id`,
        },
      },
    },
    {
      url: `${siteUrl}/id/about`,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${siteUrl}/about`,
          id: `${siteUrl}/id/about`,
        },
      },
    },
    {
      url: `${siteUrl}/id/pricing`,
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: {
        languages: {
          en: `${siteUrl}/pricing`,
          id: `${siteUrl}/id/pricing`,
        },
      },
    },
    {
      url: `${siteUrl}/id/tournaments`,
      changeFrequency: "weekly",
      priority: 0.55,
      alternates: {
        languages: {
          en: `${siteUrl}/tournaments`,
          id: `${siteUrl}/id/tournaments`,
        },
      },
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
