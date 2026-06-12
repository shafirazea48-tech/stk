import type { Metadata } from "next";
import TournamentsPageContent from "@/components/TournamentsPageContent";

export const metadata: Metadata = {
  title: "Torneos | Stockity",
  description:
    "Participa en los torneos de trading de Stockity y compite con traders de todo el mundo. Gana premios exclusivos y mejora tus habilidades.",
  alternates: {
    canonical: "/es/tournaments",
    languages: {
      en: "/tournaments",
      id: "/id/tournaments",
      es: "/es/tournaments",
      "pt-BR": "/pt-br/tournaments",
      "x-default": "/tournaments",
    },
  },
};

export default function TournamentsPageEs() {
  return <TournamentsPageContent locale="es" />;
}
