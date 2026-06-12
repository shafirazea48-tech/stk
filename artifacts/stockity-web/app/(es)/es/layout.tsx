import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.id");

const title = "Stockity | Plataforma de Trading Online – 140+ Activos desde $10";
const description =
  "\u00danete a m\u00e1s de 3,5 millones de traders en Stockity. Opera acciones, forex, cripto y materias primas desde $10. Plataforma legal, segura y con retiros r\u00e1pidos. \u00a1Reg\u00edstrate gratis!";
const keywords =
  "plataforma trading online, inversi\u00f3n online, trading acciones, forex, criptomonedas, cripto, copy trading, app de inversi\u00f3n, trading principiantes, stockity";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Stockity",
  },
  description,
  keywords,
  authors: [{ name: "Stockity" }],
  creator: "Stockity",
  publisher: "Stockity",
  category: "finanzas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/es`,
    siteName: "Stockity",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Stockity \u2014 Plataforma de Trading Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/es`,
    languages: {
      en: siteUrl,
      id: `${siteUrl}/id`,
      es: `${siteUrl}/es`,
      "pt-BR": `${siteUrl}/pt`,
      "x-default": siteUrl,
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
