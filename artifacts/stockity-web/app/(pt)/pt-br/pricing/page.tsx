import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Status e Preços",
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
  redirect("/pricing");
}
