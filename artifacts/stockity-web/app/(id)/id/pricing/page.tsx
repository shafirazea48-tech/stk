import type { Metadata } from "next";
import PricingPageContent from "@/components/PricingPageContent";

export const metadata: Metadata = {
  title: "Status & Harga | Stockity",
  description:
    "Lihat paket akun Stockity — Free, Standard, Gold, VIP, dan Platinum. Temukan tier yang sesuai dengan tujuan trading Anda.",
  alternates: {
    canonical: "/id/pricing",
    languages: {
      en: "/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      "pt-BR": "/pt-br/pricing",
      "x-default": "/pricing",
    },
  },
};

export default function PricingPageId() {
  return <PricingPageContent locale="id" />;
}
