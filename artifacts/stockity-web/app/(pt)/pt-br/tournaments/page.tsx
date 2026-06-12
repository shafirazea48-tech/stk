import type { Metadata } from "next";
import TournamentsPageContent from "@/components/TournamentsPageContent";

export const metadata: Metadata = {
  title: "Torneios | Stockity",
  description:
    "Participe dos torneios de trading da Stockity e compita com traders do mundo todo. Ganhe prêmios exclusivos e aprimore suas habilidades.",
  alternates: {
    canonical: "/pt-br/tournaments",
    languages: {
      en: "/tournaments",
      id: "/id/tournaments",
      es: "/es/tournaments",
      "pt-BR": "/pt-br/tournaments",
      "x-default": "/tournaments",
    },
  },
};

export default function TournamentsPagePt() {
  return <TournamentsPageContent locale="pt" />;
}
