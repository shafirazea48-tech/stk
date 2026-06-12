import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Status & Harga",
  description:
    "Lihat paket akun Stockity — Free, Standard, Gold, VIP, dan Platinum. Temukan tier yang sesuai dengan tujuan trading Anda.",
  alternates: {
    canonical: "/id/pricing",
    languages: {
      en: "/pricing",
      id: "/id/pricing",
      "x-default": "/pricing",
    },
  },
};

export default function PricingPageId() {
  redirect("/pricing");
}
