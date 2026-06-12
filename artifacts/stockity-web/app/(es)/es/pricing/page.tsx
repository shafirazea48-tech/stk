import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Estado y Precios",
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
  redirect("/pricing");
}
