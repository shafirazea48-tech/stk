import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce Stockity \u2014 una plataforma de trading legal y regulada que sirve a 3,5 millones de inversores en m\u00e1s de 170 pa\u00edses con operaciones transparentes, justas y seguras.",
  alternates: { canonical: "/es/about" },
};

export default function AboutEsPage() {
  return (
    <>
      <Header locale="es" />
      <main style={{ paddingTop: "clamp(60px,5.5vw,100px)", minHeight: "100vh", background: "#0d1020", color: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
          <h1 style={{ fontSize: "clamp(28px,3vw,48px)", fontWeight: 800, marginBottom: 24 }}>
            Sobre nosotros
          </h1>
          <p style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            Stockity es una plataforma de trading online legal y regulada, diseñada para
            hacer que la inversión sea accesible, transparente y sencilla para todos.
          </p>
          <p style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            Con más de 3,5 millones de inversores en más de 170 países, ofrecemos acceso
            a 140+ activos — acciones, forex, criptomonedas y materias primas — con un
            depósito mínimo de solo $10.
          </p>
          <p style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
            Nos comprometemos con la transparencia total: sin tarifas ocultas, con
            protección de fondos de alto nivel y retiros rápidos procesados en 1-2 horas.
          </p>
        </div>
      </main>
      <Footer locale="es" />
    </>
  );
}
