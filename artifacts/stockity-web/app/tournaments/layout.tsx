import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Tournaments",
  description:
    "Join Stockity trading tournaments — compete with other traders, trade 5 regional indices with boosted profitability, and climb the rankings.",
  alternates: { canonical: "/tournaments" },
  openGraph: {
    title: "Trading Tournaments | Stockity",
    description:
      "Compete in Stockity trading tournaments. Trade regional indices with boosted profitability.",
    url: "/tournaments",
  },
};

export default function TournamentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
