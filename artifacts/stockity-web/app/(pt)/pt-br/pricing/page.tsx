import type { Metadata } from "next";
import PricingPageContent from "@/components/PricingPageContent";

export const metadata: Metadata = {
  title: "Status e Preços | Stockity",
  description:
    "Veja os planos de conta Stockity — Free, Standard, Gold, VIP e Platinum. Encontre o nível adequado para seus objetivos de trading.",
  alternates: {
    canonical: "/pt-br/pricing",
    languages: {
      en: "/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      "pt-BR": "/pt-br/pricing",
      "x-default": "/pricing",
    },
  },
};

export default function PricingPagePt() {
  return <PricingPageContent locale="pt" />;
}
