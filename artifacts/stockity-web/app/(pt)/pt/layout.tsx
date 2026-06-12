import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.id");

const title = "Stockity | Plataforma de Trading Online – 140+ Ativos a partir de $10";
const description =
  "Junte-se a mais de 3,5 milh\u00f5es de traders na Stockity. Opere a\u00e7\u00f5es, forex, cripto e comodities a partir de $10. Plataforma legal, segura e com saques r\u00e1pidos. Cadastre-se gr\u00e1tis!";
const keywords =
  "plataforma de trading online, investimento online, trading de a\u00e7\u00f5es, forex, criptomoedas, cripto, copy trading, app de investimento, trading para iniciantes, stockity";

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
    url: `${siteUrl}/pt`,
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
    canonical: `${siteUrl}/pt`,
    languages: {
      en: siteUrl,
      id: `${siteUrl}/id`,
      es: `${siteUrl}/es`,
      "pt-BR": `${siteUrl}/pt`,
      "x-default": siteUrl,
    },
  },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
