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

export default function PtRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="msvalidate.01" content="4F37DBE036B13EABA7F7C7625B77C3A7" />
        <meta name="yandex-verification" content="96a6b8f547a16be2" />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="id" href={`${siteUrl}/id`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}/pt-br`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
