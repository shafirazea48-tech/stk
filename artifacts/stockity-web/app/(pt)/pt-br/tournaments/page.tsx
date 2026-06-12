import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Torneios",
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
  redirect("/tournaments");
}
