import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.link");

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
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/id#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Gimana cara mulainya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1. Daftar dalam hitungan detik\n2. Deposit dengan mudah\n3. Belajar gratis tanpa batas\n4. Prediksi pergerakan aset\n5. Tarik kapan pun kamu mau",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama proses penarikan dana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Semua permintaan diproses dalam 1–2 jam. Tim keuangan kami siaga 24 jam untuk memastikan transaksimu berjalan cepat dan aman.",
          },
        },
        {
          "@type": "Question",
          name: "Bisa latihan dulu sebelum pakai uang sungguhan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tentu! Kamu langsung dapat akun demo senilai $10.000 secara gratis. Latih strategimu, kenali berbagai aset, semua tanpa risiko kehilangan uang.",
          },
        },
        {
          "@type": "Question",
          name: "Ada event atau promo khusus nggak?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ada dong! Daftarkan emailmu biar kamu nggak ketinggalan info event terbaru. Kami rutin bikin turnamen, kontes, dan promo eksklusif yang sayang untuk dilewatkan.",
          },
        },
      ],
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
