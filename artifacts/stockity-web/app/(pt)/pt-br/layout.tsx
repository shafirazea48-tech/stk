import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.link");

const title = "Stockity | Corretora de Trading Online – 140+ Ativos a partir de $10";
const description =
  "Junte-se a mais de 3,5 milh\u00f5es de traders na Stockity. Opere a\u00e7\u00f5es, forex, cripto e commodities a partir de $10. Corretora legal, segura e com saques r\u00e1pidos. Cadastre-se gr\u00e1tis!";
const keywords =
  "corretora online, trading online, day trade, investir na bolsa, mercado financeiro, a\u00e7\u00f5es, forex, criptomoedas, copy trading, investimento online, renda vari\u00e1vel, stockity";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Stockity",
  },
  description,
  keywords,
  authors: [{ name: "Stockity" }],
  creator: "Stockity",
  publisher: "Stockity",
  category: "finan\u00e7as",
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
    url: `${siteUrl}/pt-br`,
    siteName: "Stockity",
    locale: "pt_BR",
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
    canonical: `${siteUrl}/pt-br`,
    languages: {
      en: siteUrl,
      id: `${siteUrl}/id`,
      es: `${siteUrl}/es`,
      "pt-BR": `${siteUrl}/pt-br`,
      "x-default": siteUrl,
    },
  },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
