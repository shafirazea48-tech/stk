import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Turnamen",
  description:
    "Ikuti turnamen trading Stockity dan bersaing dengan trader dari seluruh dunia. Dapatkan hadiah eksklusif dan tingkatkan skill trading Anda.",
  alternates: {
    canonical: "/id/tournaments",
    languages: {
      en: "/tournaments",
      id: "/id/tournaments",
      "x-default": "/tournaments",
    },
  },
};

export default function TournamentsPageId() {
  redirect("/tournaments");
}
