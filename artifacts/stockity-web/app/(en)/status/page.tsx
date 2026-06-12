"use client";

import { useState, useEffect } from "react";

const BUTTONS = [
  { label: "Header — Log in", component: "Header.tsx" },
  { label: "Header — Register", component: "Header.tsx" },
  { label: "Hero — Register Now", component: "HeroSection.tsx" },
  { label: "Traders Needs — Start now (desktop)", component: "TradersNeedsSection.tsx" },
  { label: "Traders Needs — Start now (mobile)", component: "TradersNeedsSection.tsx" },
  { label: "Football Banner — Try it! (desktop)", component: "FootballBannerSection.tsx" },
  { label: "Football Banner — Try it! (mobile)", component: "FootballBannerSection.tsx" },
  { label: "Usable — Start trading (desktop)", component: "UsableSection.tsx" },
  { label: "Usable — Start trading (mobile)", component: "UsableSection.tsx" },
  { label: "Assets — Start now (desktop)", component: "AssetsSection.tsx" },
  { label: "Assets — Start now (mobile)", component: "AssetsSection.tsx" },
  { label: "Copytrading — Start now (desktop)", component: "CopytradingSection.tsx" },
  { label: "Copytrading — Start now (mobile)", component: "CopytradingSection.tsx" },
  { label: "Withdraw — Show more (desktop)", component: "WithdrawSection.tsx" },
  { label: "Device — Google Play (desktop)", component: "DeviceSection.tsx" },
  { label: "Device — App Store (desktop)", component: "DeviceSection.tsx" },
  { label: "Device — Open Web (desktop)", component: "DeviceSection.tsx" },
  { label: "Device — Google Play (mobile)", component: "DeviceSection.tsx" },
  { label: "Device — App Store (mobile)", component: "DeviceSection.tsx" },
  { label: "Device — Open Web Platform (mobile)", component: "DeviceSection.tsx" },
  { label: "Charity — Learn more (desktop)", component: "CharitySection.tsx" },
  { label: "Charity — Learn more (mobile)", component: "CharitySection.tsx" },
  { label: "Partner — Learn more (desktop)", component: "PartnerSection.tsx" },
  { label: "Partner — Learn more (mobile)", component: "PartnerSection.tsx" },
  { label: "Join — Start Now (desktop)", component: "JoinSection.tsx" },
  { label: "Join — Start Now (mobile)", component: "JoinSection.tsx" },
];

export default function StatusPage() {
  const [ctaUrl, setCtaUrl] = useState("");
  const [input, setInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/cta")
      .then((r) => r.json())
      .then((d) => {
        setCtaUrl(d.ctaUrl ?? "");
        setInput(d.ctaUrl ?? "");
      })
      .catch(() => {});
  }, []);

  async function handleSave() {
    setError("");
    setSaved(false);
    if (!input.startsWith("http")) {
      setError("URL harus dimulai dengan http:// atau https://");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/cta", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ctaUrl: input }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menyimpan");
      setCtaUrl(data.ctaUrl);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Terjadi kesalahan");
    } finally {
      setSaving(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(`${window.location.origin}/go`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0b0f", color: "#f4f4f6", fontFamily: "'Nunito Sans', sans-serif", padding: "0" }}>
      {/* Top bar */}
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "1.2rem 2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <svg viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 28, width: "auto" }}>
            <path d="M21.6 2.5a.66.66 0 0 0-.735-.738L8.087 3.47a.659.659 0 0 0-.38 1.119l2 1.288a.824.824 0 0 1 .137 1.274L2.26 14.757a4.697 4.697 0 0 0 0 6.631 4.671 4.671 0 0 0 6.616 0l7.593-7.609a.82.82 0 0 1 1.271.138l1.279 1.997a.656.656 0 0 0 1.115-.381L21.6 2.5Z" fill="url(#sa)"/>
            <path d="M4.055 36.638a4.697 4.697 0 0 1 0-6.633l8.926-8.944a4.671 4.671 0 0 1 6.616 0 4.697 4.697 0 0 1 0 6.632l-8.925 8.945a4.671 4.671 0 0 1-6.617 0Z" fill="url(#sb)"/>
            <path d="M1.313 15.717a4.695 4.695 0 0 0 1.713 6.405l8.757 5.068.015.009a4.694 4.694 0 0 1 2.27 4.775c-.176 1.135-.916 2.096-1.697 2.938l6.92-6.938a4.695 4.695 0 0 0-.668-7.655l-8.756-5.068-.015-.009a4.694 4.694 0 0 1-2.27-4.775c.176-1.135.916-2.097 1.697-2.939L2.358 14.59a4.677 4.677 0 0 0-1.045 1.127Z" fill="#0C8DF8"/>
            <defs>
              <linearGradient id="sa" x1="17.106" y1="7.408" x2="-11.286" y2="33.808" gradientUnits="userSpaceOnUse"><stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/></linearGradient>
              <linearGradient id="sb" x1="7.63" y1="33.255" x2="22.939" y2="17.79" gradientUnits="userSpaceOnUse"><stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/></linearGradient>
            </defs>
          </svg>
          <span style={{ fontWeight: 800, fontSize: 18, color: "#fff" }}>Stockity</span>
        </a>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Status & Link Management</span>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>Live</span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: 0, color: "#fff" }}>Link Management</h1>
          <p style={{ color: "rgba(255,255,255,0.45)", marginTop: "0.4rem", fontSize: 15 }}>
            Ubah satu URL — semua {BUTTONS.length} button di seluruh website otomatis terupdate.
          </p>
        </div>

        {/* CTA URL Card */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "1.75rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#0C8DF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#0C8DF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>CTA Redirect URL</span>
          </div>

          <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>URL Tujuan</label>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <input
              type="url"
              value={input}
              onChange={(e) => { setInput(e.target.value); setSaved(false); setError(""); }}
              placeholder="https://..."
              style={{
                flex: 1,
                minWidth: 280,
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "0.75rem 1rem",
                color: "#fff",
                fontSize: 14,
                fontFamily: "monospace",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#0C8DF8")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />
            <button
              onClick={handleSave}
              disabled={saving || input === ctaUrl}
              style={{
                background: saving || input === ctaUrl ? "rgba(255,255,255,0.08)" : "linear-gradient(90deg,#0990ff,#00eaff)",
                color: saving || input === ctaUrl ? "rgba(255,255,255,0.3)" : "#fff",
                border: "none",
                borderRadius: 10,
                padding: "0.75rem 1.5rem",
                fontWeight: 700,
                fontSize: 14,
                cursor: saving || input === ctaUrl ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {saving ? "Menyimpan..." : saved ? "✓ Tersimpan!" : "Simpan"}
            </button>
          </div>

          {error && (
            <div style={{ marginTop: "0.75rem", padding: "0.6rem 0.9rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, color: "#f87171", fontSize: 13 }}>
              {error}
            </div>
          )}

          {saved && (
            <div style={{ marginTop: "0.75rem", padding: "0.6rem 0.9rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 8, color: "#4ade80", fontSize: 13 }}>
              ✓ URL berhasil disimpan. Semua button sekarang mengarah ke URL baru.
            </div>
          )}
        </div>

        {/* Redirect URL info */}
        <div style={{ background: "rgba(9,144,255,0.06)", border: "1px solid rgba(9,144,255,0.2)", borderRadius: 16, padding: "1.25rem 1.75rem", marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>Redirect Route (aman — URL asli tersembunyi)</div>
            <code style={{ color: "#60b4ff", fontSize: 14, fontFamily: "monospace" }}>/go</code>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, marginLeft: 8 }}>→ 307 redirect ke URL di atas</span>
          </div>
          <button
            onClick={handleCopy}
            style={{ background: "rgba(9,144,255,0.15)", border: "1px solid rgba(9,144,255,0.3)", borderRadius: 8, padding: "0.5rem 1rem", color: "#60b4ff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
          >
            {copied ? "✓ Copied!" : "Copy /go URL"}
          </button>
        </div>

        {/* Button list */}
        <div style={{ marginBottom: "1rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "rgba(255,255,255,0.7)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {BUTTONS.length} Button Terhubung
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.6rem" }}>
            {BUTTONS.map((btn, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "0.65rem 1rem" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: "#f4f4f6", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{btn.label}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{btn.component}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: "2rem", textAlign: "center" }}>
          Stockity Link Management · URL disimpan di server · Perubahan langsung aktif tanpa deploy ulang
        </p>
      </div>
    </div>
  );
}
