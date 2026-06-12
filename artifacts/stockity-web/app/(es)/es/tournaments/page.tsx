import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Torneos",
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
  redirect("/tournaments");
}
