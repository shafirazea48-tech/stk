import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.link");

const title = "Stockity | Plataforma de Trading Online – 140+ Activos desde $10";
const description =
  "\u00danete a m\u00e1s de 3,5 millones de traders en Stockity. Opera acciones, forex, cripto y materias primas desde $10. Plataforma legal, segura y con retiros r\u00e1pidos. \u00a1Reg\u00edstrate gratis!";
const keywords =
  "plataforma trading online, inversi\u00f3n online, trading acciones, forex, criptomonedas, cripto, copy trading, app de inversi\u00f3n, trading principiantes, stockity";

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
      "pt-BR": `${siteUrl}/pt-br`,
      "x-default": siteUrl,
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/es#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo empiezo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Regístrate en segundos\n2. Deposita fácilmente\n3. Aprende gratis\n4. Predice el movimiento de activos\n5. Retira cuando quieras",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda un retiro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todos los pedidos se procesan en 1-2 horas. Nuestro equipo financiero trabaja las 24 horas para garantizar operaciones rápidas y seguras.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo practicar antes de operar con dinero real?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "¡Claro! Obtienes una cuenta demo de $10,000 completamente gratis. Practica estrategias, explora activos y aprende sin arriesgar tu dinero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay eventos o promociones especiales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "¡Por supuesto! Suscríbete a nuestros correos para enterarte de nuevas actividades. Organizamos torneos, concursos y promociones exclusivas de forma regular.",
      },
    },
  ],
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
