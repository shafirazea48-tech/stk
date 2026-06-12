import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Account Types",
  description:
    "Compare Stockity account types and pricing. Start with a $10 minimum deposit and access 140+ trading assets with competitive spreads and no hidden fees.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Account Types | Stockity",
    description:
      "Compare Stockity account types and pricing. $10 minimum deposit, 140+ assets, no hidden fees.",
    url: "/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
