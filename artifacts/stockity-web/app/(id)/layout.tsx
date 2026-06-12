import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
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
    : "https://stockity.id");

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function IdRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="id" href={`${siteUrl}/id`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}/pt-br`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </head>
      <body
        className={`${nunitoSans.variable} font-[family-name:var(--font-nunito-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
