import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.id");

const title = "Stockity | Platform Trading Online Terpercaya – 140+ Aset";
const description =
  "Bergabung bersama 3,5 juta trader di Stockity. Trading saham, forex, kripto & komoditas dengan modal mulai $10. Platform legal, aman, penarikan cepat. Daftar gratis!";
const keywords =
  "platform trading online, investasi online, trading saham, forex, cryptocurrency, kripto, copy trading, aplikasi investasi, trading pemula, stockity";

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
  category: "keuangan",
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
    url: `${siteUrl}/id`,
    siteName: "Stockity",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Stockity — Platform Trading Online Terpercaya di Indonesia",
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
    canonical: `${siteUrl}/id`,
    languages: {
      en: siteUrl,
      id: `${siteUrl}/id`,
      es: `${siteUrl}/es`,
      "pt-BR": `${siteUrl}/pt-br`,
      "x-default": siteUrl,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Stockity",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.png`,
      },
      description,
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/id#webpage`,
      url: `${siteUrl}/id`,
      name: title,
      description,
      inLanguage: "id-ID",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#service`,
      name: "Platform Trading Stockity",
      url: `${siteUrl}/id`,
      description:
        "Platform trading online dengan 140+ aset termasuk saham, forex, kripto, dan komoditas. Deposit minimal $10. Legal dan teregulasi.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
  ],
};

export default function IdLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
