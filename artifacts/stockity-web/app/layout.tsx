import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stockity",
  description:
    "Stockity is a modern trading platform for beginners and professionals. $10,000 in a demo account for training, and the minimum trade amount is only $1. Practice conveniently and invest wisely!",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Stockity",
    description:
      "Stockity is a modern trading platform for beginners and professionals. $10,000 in a demo account for training, and the minimum trade amount is only $1. Practice conveniently and invest wisely!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-[family-name:var(--font-nunito-sans)]`}>
        {children}
      </body>
    </html>
  );
}
