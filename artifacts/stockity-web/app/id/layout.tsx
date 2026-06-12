import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.REPLIT_DOMAINS
    ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
    : "https://stockity.id");

const title = "Stockity - Login & Daftar | Aplikasi Trading Resmi";
const description =
  "Login atau daftar akun Stockity dan akses aplikasi trading resmi. Jelajahi opsi digital, berbagai aset, dan pengalaman trading yang mudah.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Stockity",
  },
  description,
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
        alt: "Stockity — Investasi yang Lebih Jelas",
      },
    ],
  },
  alternates: {
    canonical: "/id",
    languages: {
      en: "/",
      id: "/id",
      "x-default": "/",
    },
  },
};

export default function IdLayout({ children }: { children: React.ReactNode }) {
  return children;
}
