"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";

interface Tournament {
  name: string;
  image: string;
  durationMs: number;
  participationFee: number;
  prizeFund: number;
}

const IDR = (n: number) =>
  n === 0
    ? "Rp 0"
    : "Rp " + n.toLocaleString("id-ID");

const tournaments: Tournament[] = [
  {
    name: "Eagle",
    image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&q=80",
    durationMs: 18 * 24 * 60 * 60 * 1000,
    participationFee: 650000,
    prizeFund: 655000000,
  },
  {
    name: "Fortnight",
    image: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800&q=80",
    durationMs: 12 * 24 * 60 * 60 * 1000,
    participationFee: 550000,
    prizeFund: 349000000,
  },
  {
    name: "Phoenix",
    image: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=800&q=80",
    durationMs: 7 * 24 * 60 * 60 * 1000,
    participationFee: 350000,
    prizeFund: 120000000,
  },
  {
    name: "Champion",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    durationMs: 3 * 24 * 60 * 60 * 1000,
    participationFee: 150000,
    prizeFund: 45000000,
  },
  {
    name: "Daily Free",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    durationMs: 24 * 60 * 60 * 1000,
    participationFee: 0,
    prizeFund: 4400000,
  },
];

function formatRemaining(ms: number, durationMs: number): string {
  if (ms <= 0) return "Ended";
  const totalSec = Math.floor(ms / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;

  if (durationMs >= 24 * 60 * 60 * 1000) {
    return `End ${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m`;
  }
  return `End ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
}

function useLoopingCountdown(durationMs: number) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    function calc() {
      const elapsed = Date.now() % durationMs;
      const remaining = durationMs - elapsed;
      setLabel(formatRemaining(remaining, durationMs));
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [durationMs]);

  return label;
}

function TournamentCard({ t }: { t: Tournament }) {
  const countdown = useLoopingCountdown(t.durationMs);

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
      {/* Image */}
      <div style={{ position: "relative", height: 220 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.image}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            fontSize: 22,
            fontWeight: 800,
            color: "#fff",
            textShadow: "0 1px 6px rgba(0,0,0,0.7)",
          }}
        >
          {t.name}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "rgba(255,255,255,0.93)",
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

      {/* Info */}
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
          <div style={{ fontSize: 17, fontWeight: 700, color: "#f4f4f6" }}>
            {IDR(t.participationFee)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#82889b", marginBottom: 4 }}>
            Prize fund
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#0c8df8" }}>
            {IDR(t.prizeFund)}
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
              fontSize: "clamp(16px, 1.25vw, 22px)",
              fontWeight: 700,
              color: "#c0c8d8",
              textAlign: "center",
              margin: "0 0 2.77778vw",
            }}
          >
            Currently underway
          </h2>

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
