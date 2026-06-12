import type { Metadata } from "next";
import TournamentsPageContent from "@/components/TournamentsPageContent";

export const metadata: Metadata = {
  title: "Turnamen | Stockity",
  description:
    "Ikuti turnamen trading Stockity dan bersaing dengan trader dari seluruh dunia. Dapatkan hadiah eksklusif dan tingkatkan skill trading Anda.",
  alternates: {
    canonical: "/id/tournaments",
    languages: {
      en: "/tournaments",
      id: "/id/tournaments",
      es: "/es/tournaments",
      "pt-BR": "/pt-br/tournaments",
      "x-default": "/tournaments",
    },
  },
};

export default function TournamentsPageId() {
  return <TournamentsPageContent locale="id" />;
}
