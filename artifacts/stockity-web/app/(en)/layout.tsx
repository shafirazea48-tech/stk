import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.link");

const title = "Stockity | Online Trading Platform – 140+ Assets from $10";
const description =
  "Join 3.5M+ traders on Stockity. Trade stocks, forex, crypto & commodities starting from $10. Licensed & regulated, fast withdrawals. Sign up free!";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Stockity",
  },
  description,
  keywords:
    "online trading platform, stock trading, forex trading, cryptocurrency, crypto trading, copy trading, investment app, stockity",
  authors: [{ name: "Stockity" }],
  creator: "Stockity",
  publisher: "Stockity",
  category: "finance",
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
    url: "/",
    siteName: "Stockity",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Stockity — Making Investing Clear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#0C8DF8" },
    ],
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
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Stockity",
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#service`,
      name: "Stockity Trading Platform",
      url: siteUrl,
      description:
        "Online trading platform offering 140+ assets including forex, stocks, crypto, and commodities. Minimum deposit $10. Licensed and regulated.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: siteUrl,
        availableLanguage: ["English", "Indonesian", "Spanish"],
      },
    },
  ],
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#151723" />
        <meta name="msvalidate.01" content="4F37DBE036B13EABA7F7C7625B77C3A7" />
        <meta name="yandex-verification" content="96a6b8f547a16be2" />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="id" href={`${siteUrl}/id`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}/pt-br`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${nunitoSans.variable} font-[family-name:var(--font-nunito-sans)]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
