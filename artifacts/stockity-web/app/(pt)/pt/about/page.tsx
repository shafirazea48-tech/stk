import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre n\u00f3s",
  description:
    "Conhe\u00e7a a Stockity \u2014 uma plataforma de trading legal e regulamentada que serve a 3,5 milh\u00f5es de investidores em mais de 170 pa\u00edses com opera\u00e7\u00f5es transparentes, justas e seguras.",
  alternates: { canonical: "/pt/about" },
};

export default function AboutPtPage() {
  return (
    <>
      <Header locale="pt" />
      <main style={{ paddingTop: "clamp(60px,5.5vw,100px)", minHeight: "100vh", background: "#0d1020", color: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
          <h1 style={{ fontSize: "clamp(28px,3vw,48px)", fontWeight: 800, marginBottom: 24 }}>
            Sobre nós
          </h1>
          <p style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            A Stockity é uma plataforma de trading online legal e regulamentada, criada para
            tornar o investimento acessível, transparente e simples para todos.
          </p>
          <p style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            Com mais de 3,5 milhões de investidores em mais de 170 países, oferecemos acesso
            a 140+ ativos — ações, forex, criptomoedas e commodities — com um depósito mínimo
            de apenas $10.
          </p>
          <p style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
            Nosso compromisso é com a transparência total: sem taxas ocultas, com proteção de
            fundos de alto nível e saques rápidos processados em 1 a 2 horas.
          </p>
        </div>
      </main>
      <Footer locale="pt" />
    </>
  );
}
