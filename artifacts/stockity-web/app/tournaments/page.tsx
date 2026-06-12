"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";

interface Tournament {
  name: string;
  image: string;
  endDate: Date;
  participationFee: number;
  prizeFund: number;
}

const tournaments: Tournament[] = [
  {
    name: "Eagle",
    image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&q=80",
    endDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000 + 34 * 60 * 1000),
    participationFee: 40,
    prizeFund: 40223,
  },
  {
    name: "Fortnight",
    image: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800&q=80",
    endDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000 + 34 * 60 * 1000),
    participationFee: 34,
    prizeFund: 21470,
  },
  {
    name: "Daily Free",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    endDate: new Date(Date.now() + 4 * 60 * 60 * 1000 + 34 * 60 * 1000 + 45 * 1000),
    participationFee: 0,
    prizeFund: 270,
  },
];

function useCountdown(endDate: Date) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function calc() {
      const diff = endDate.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft("Ended"); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      if (d > 0) setTimeLeft(`End ${d}d ${String(h).padStart(2,"0")}h ${String(m).padStart(2,"0")}m`);
      else setTimeLeft(`End ${String(h).padStart(2,"0")}h ${String(m).padStart(2,"0")}m ${String(s).padStart(2,"0")}s`);
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endDate]);

  return timeLeft;
}

function TournamentCard({ t }: { t: Tournament }) {
  const countdown = useCountdown(t.endDate);

  const fmt = (n: number) =>
    n === 0
      ? "€0.00"
      : "€" + n.toLocaleString("en-US", { minimumFractionDigits: 2 });

  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        background: "#1a1f35",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {/* Image area */}
      <div style={{ position: "relative", height: 220 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.image}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        {/* Tournament name */}
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            fontSize: 22,
            fontWeight: 800,
            color: "#fff",
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          {t.name}
        </div>
        {/* Countdown badge */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "rgba(255,255,255,0.92)",
            color: "#151723",
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 6,
            padding: "4px 10px",
          }}
        >
          {countdown}
        </div>
      </div>

      {/* Info area */}
      <div
        style={{
          padding: "18px 20px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        }}
      >
        <div>
          <div style={{ fontSize: 12, color: "#82889b", marginBottom: 4 }}>
            Participation fee
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#f4f4f6" }}>
            {fmt(t.participationFee)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#82889b", marginBottom: 4 }}>
            Prize fund
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#0c8df8" }}>
            {fmt(t.prizeFund)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TournamentsPage() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#0e1120",
          paddingTop: "calc(5.55556vw + 60px)",
          paddingBottom: "6.94444vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 3.70370vw",
            boxSizing: "border-box",
          }}
        >
          {/* Page title */}
          <h1
            style={{
              fontSize: "clamp(32px, 3.47222vw, 56px)",
              fontWeight: 800,
              color: "#f4f4f6",
              textAlign: "center",
              margin: "0 0 0.69444vw",
              letterSpacing: "-0.02em",
            }}
          >
            Tournaments
          </h1>

          <h2
            style={{
              fontSize: "clamp(18px, 1.38889vw, 24px)",
              fontWeight: 700,
              color: "#c0c8d8",
              textAlign: "center",
              margin: "0 0 2.77778vw",
            }}
          >
            Currently underway
          </h2>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))",
              gap: "1.38889vw",
            }}
          >
            {tournaments.map((t) => (
              <TournamentCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
