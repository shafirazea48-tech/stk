import type { Metadata } from "next";
import PricingPageContent from "@/components/PricingPageContent";

export const metadata: Metadata = {
  title: "Estados y Precios | Stockity",
  description:
    "Consulta los planes de cuenta Stockity — Free, Standard, Gold, VIP y Platinum. Encuentra el nivel que se adapta a tus objetivos de trading.",
  alternates: {
    canonical: "/es/pricing",
    languages: {
      en: "/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      "pt-BR": "/pt-br/pricing",
      "x-default": "/pricing",
    },
  },
};

export default function PricingPageEs() {
  return <PricingPageContent locale="es" />;
}
