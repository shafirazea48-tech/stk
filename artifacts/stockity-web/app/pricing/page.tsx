"use client";
import { useRef } from "react";
import Header from "@/components/Header";

const CheckIcon = ({ checked }: { checked: boolean }) =>
  checked ? (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="9" cy="9" r="9" fill="rgba(9,144,255,0.15)" />
      <path d="M5 9l3 3 5-5" stroke="#0c8df8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M5.5 5.5l7 7M12.5 5.5l-7 7" stroke="rgba(130,136,155,0.5)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

const allFeatures = [
  "Risk-free trades to protect your investments from losses",
  "Free access to VIP tournaments",
  "Personal manager",
  "Insurance for your deposits if your balance reaches 0",
  "Multi-window trading",
  "Crypto calendar",
  "Monthly Cashback Plus of 5% for unsuccessful trades",
  "High priority support",
  "Deposit insurance",
];

type Tier = {
  id: string;
  name: string;
  accentColor: string;
  cardBg: string;
  border: string;
  mostPopular: boolean;
  gemColor: string;
  mainStat: { value: string; label: string } | null;
  statBoxes: { value: string; label: string }[];
  topFeatures: { color: string; title: string; desc: string }[] | null;
  rows: { label: string; value: string; linkColor?: string }[];
  checkedFeatures: number[];
  cta: string;
};

const tiers: Tier[] = [
  {
    id: "free",
    name: "Free",
    accentColor: "#82889b",
    cardBg: "#161d30",
    border: "1px solid rgba(255,255,255,0.10)",
    mostPopular: false,
    gemColor: "#82889b",
    mainStat: null,
    statBoxes: [{ value: "30", label: "trades on demo" }, { value: "100+", label: "assets" }],
    topFeatures: null,
    rows: [
      { label: "Withdrawals", value: "—" },
      { label: "Invite Friends", value: "—" },
      { label: "Deposit bonuses", value: "—" },
    ],
    checkedFeatures: [],
    cta: "Registration",
  },
  {
    id: "standard",
    name: "Standard",
    accentColor: "#c0c8d8",
    cardBg: "#161d30",
    border: "1px solid rgba(255,255,255,0.10)",
    mostPopular: false,
    gemColor: "#c0c8d8",
    mainStat: { value: "up to 85%", label: "profitability" },
    statBoxes: [{ value: "120+", label: "assets" }],
    topFeatures: null,
    rows: [
      { label: "Withdrawals", value: "3 days" },
      { label: "Invite Friends", value: "up to $50", linkColor: "#0c8df8" },
      { label: "Deposit bonuses", value: "up to 100%" },
    ],
    checkedFeatures: [],
    cta: "Get",
  },
  {
    id: "gold",
    name: "Gold",
    accentColor: "#f5c842",
    cardBg: "#161d30",
    border: "1px solid rgba(255,255,255,0.10)",
    mostPopular: false,
    gemColor: "#f5c842",
    mainStat: { value: "up to 90%", label: "profitability" },
    statBoxes: [{ value: "130+", label: "assets" }, { value: "3%", label: "cashback" }],
    topFeatures: null,
    rows: [
      { label: "Withdrawals", value: "24 hours" },
      { label: "Invite Friends", value: "up to $50", linkColor: "#0c8df8" },
      { label: "Deposit bonuses", value: "up to 150%" },
    ],
    checkedFeatures: [],
    cta: "Get",
  },
  {
    id: "vip",
    name: "VIP",
    accentColor: "#0c8df8",
    cardBg: "linear-gradient(160deg, #0d2144 0%, #071528 100%)",
    border: "1px solid rgba(12,141,248,0.3)",
    mostPopular: true,
    gemColor: "#4da6ff",
    mainStat: { value: "up to 90%", label: "profitability" },
    statBoxes: [{ value: "140+", label: "assets" }, { value: "7%", label: "cashback" }],
    topFeatures: [
      { color: "#0c8df8", title: "Fast withdraw", desc: "Get your funds in 4 hours or less" },
      { color: "#0c8df8", title: "Risk-free trades", desc: "Profit from successful trades and forget the unsuccessful" },
    ],
    rows: [
      { label: "Withdrawals", value: "4 hours" },
      { label: "Invite Friends", value: "up to $850", linkColor: "#4da6ff" },
      { label: "Deposit bonuses", value: "up to 200%" },
    ],
    checkedFeatures: [0, 1, 2, 3, 4, 5],
    cta: "Get",
  },
  {
    id: "platinum",
    name: "Platinum",
    accentColor: "#a78bfa",
    cardBg: "linear-gradient(160deg, #1e1040 0%, #120a2e 100%)",
    border: "1px solid rgba(167,139,250,0.3)",
    mostPopular: false,
    gemColor: "#a78bfa",
    mainStat: { value: "up to 90%", label: "profitability" },
    statBoxes: [{ value: "140+", label: "assets" }, { value: "10%", label: "cashback" }],
    topFeatures: [
      { color: "#a78bfa", title: "Cashback Plus", desc: "Additional 5% compensation for unsuccessful trades every month" },
      { color: "#a78bfa", title: "Deposit insurance", desc: "Use your money with more certainty. Increased deposit insurance can help" },
    ],
    rows: [
      { label: "Withdrawals", value: "4 hours" },
      { label: "Invite Friends", value: "up to $850", linkColor: "#a78bfa" },
      { label: "Deposit bonuses", value: "up to 300%" },
    ],
    checkedFeatures: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    cta: "Get",
  },
];

const GemIcon = ({ color }: { color: string }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" fill={color} opacity="0.25" />
    <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" stroke={color} strokeWidth="1.5" />
    <path d="M18 3L32 11H4L18 3Z" fill={color} opacity="0.4" />
  </svg>
);

export default function PricingPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (dir: "prev" | "next") => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : el.offsetWidth;
    el.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#0e1120",
          paddingTop: "calc(5.55556vw + 60px)",
          paddingBottom: "5.55556vw",
          boxSizing: "border-box",
        }}
      >
        {/* Page header */}
        <div style={{ padding: "0 3.70370vw", marginBottom: "3.70370vw" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <h1
                style={{
                  fontSize: "clamp(32px, 3.88889vw, 64px)",
                  fontWeight: 800,
                  color: "#f4f4f6",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Statuses
              </h1>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: "clamp(14px, 1.11111vw, 18px)",
                  color: "#82889b",
                  lineHeight: 1.6,
                }}
              >
                More trading advantages and benefits with each status. Check in cards below
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
              {(["←", "→"] as const).map((a) => (
                <button
                  key={a}
                  onClick={() => scrollSlider(a === "←" ? "prev" : "next")}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "transparent",
                    color: "#f4f4f6",
                    fontSize: 18,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards — full width */}
        <div
          ref={sliderRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 0,
            padding: "0 3.70370vw",
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >
          {tiers.map((tier, idx) => {
            const isVIP = tier.id === "vip";
            const isPlatinum = tier.id === "platinum";
            const isDark = isVIP || isPlatinum;
            const textPrimary = "#f4f4f6";
            const textSub = isDark ? "rgba(255,255,255,0.55)" : "#82889b";
            const divider = isDark
              ? isPlatinum ? "rgba(167,139,250,0.2)" : "rgba(12,141,248,0.2)"
              : "rgba(255,255,255,0.07)";
            const borderR = idx < 4 ? "none" : undefined;
            const borderRad =
              idx === 0 ? "16px 0 0 16px"
              : idx === 4 ? "0 16px 16px 0"
              : "0";

            return (
              <div
                key={tier.id}
                style={{
                  background: tier.cardBg,
                  borderTop: tier.border,
                  borderBottom: tier.border,
                  borderLeft: tier.border,
                  borderRight: idx < 4 ? "none" : tier.border,
                  borderRadius: borderRad,
                  padding: "clamp(20px, 2.08333vw, 36px)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {/* MOST POPULAR */}
                {tier.mostPopular && (
                  <div
                    style={{
                      position: "absolute",
                      top: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "linear-gradient(90deg,#0990ff,#00eaff)",
                      borderRadius: 20,
                      padding: "4px 18px",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 20px rgba(9,144,255,0.4)",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                {/* Tier name + gem */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <GemIcon color={tier.gemColor} />
                  <span
                    style={{
                      fontSize: "clamp(18px, 1.52778vw, 26px)",
                      fontWeight: 800,
                      color: textPrimary,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tier.name}
                  </span>
                  {isPlatinum && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="8" stroke="#a78bfa" strokeWidth="1.3" />
                      <text x="6.5" y="13" fontSize="10" fill="#a78bfa" fontWeight="700">i</text>
                    </svg>
                  )}
                </div>

                {/* Top Features (VIP / Platinum) */}
                {tier.topFeatures && (
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        color: textSub,
                        margin: "0 0 10px",
                        textTransform: "uppercase",
                      }}
                    >
                      TOP FEATURES
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {tier.topFeatures.map((f) => (
                        <div key={f.title} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 8,
                              background: `${f.color}20`,
                              border: `1px solid ${f.color}40`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8l3.5 3.5 6.5-7" stroke={f.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p style={{ margin: 0, fontSize: "clamp(15px, 1.11111vw, 17px)", fontWeight: 700, color: textPrimary, lineHeight: 1.3 }}>{f.title}</p>
                            <p style={{ margin: "2px 0 0", fontSize: "clamp(13px, 0.97222vw, 15px)", color: textSub, lineHeight: 1.45 }}>{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ height: 1, background: divider, margin: "16px 0" }} />
                  </div>
                )}

                {/* Main stat */}
                {tier.mainStat && (
                  <div style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.05)",
                        borderRadius: 10,
                        padding: "12px 14px",
                        display: "inline-block",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "clamp(22px, 2.08333vw, 36px)",
                          fontWeight: 800,
                          color: textPrimary,
                          lineHeight: 1.1,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {tier.mainStat.value}
                      </p>
                      <p style={{ margin: "4px 0 0", fontSize: "clamp(14px, 1.04167vw, 16px)", color: textSub }}>{tier.mainStat.label}</p>
                    </div>
                  </div>
                )}

                {/* Stat boxes */}
                {tier.statBoxes.length > 0 && (
                  <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                    {tier.statBoxes.map((s) => (
                      <div
                        key={s.label}
                        style={{
                          flex: 1,
                          background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.05)",
                          borderRadius: 10,
                          padding: "12px 14px",
                          boxSizing: "border-box",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "clamp(20px, 1.80556vw, 30px)",
                            fontWeight: 800,
                            color: textPrimary,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {s.value}
                        </p>
                        <p style={{ margin: "4px 0 0", fontSize: "clamp(14px, 1.04167vw, 16px)", color: textSub }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 16, borderBottom: `1px solid ${divider}`, marginBottom: 16 }}>
                  {tier.rows.map((row) => (
                    <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                      {row.linkColor ? (
                        <a href="#" style={{ fontSize: "clamp(15px, 1.11111vw, 17px)", color: row.linkColor, textDecoration: "none", fontWeight: 500 }}>{row.label}</a>
                      ) : (
                        <span style={{ fontSize: "clamp(15px, 1.11111vw, 17px)", color: textSub }}>{row.label}</span>
                      )}
                      <span style={{ fontSize: "clamp(15px, 1.11111vw, 17px)", color: textPrimary, fontWeight: 600, whiteSpace: "nowrap" }}>{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Feature checklist */}
                <div style={{ display: "flex", flexDirection: "column", gap: 7, flexGrow: 1, marginBottom: 20 }}>
                  {allFeatures.map((feat, i) => (
                    <div key={feat} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <CheckIcon checked={tier.checkedFeatures.includes(i)} />
                      <span
                        style={{
                          fontSize: "clamp(14px, 1.04167vw, 16px)",
                          color: tier.checkedFeatures.includes(i) ? textPrimary : textSub,
                          lineHeight: 1.45,
                        }}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: 10,
                    border: "none",
                    background: "#0c8df8",
                    color: "#fff",
                    fontSize: "clamp(14px, 1.11111vw, 18px)",
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    transition: "opacity 0.15s",
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </main>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
            padding: 0 24px !important;
          }
          .pricing-grid > div {
            border-radius: 16px !important;
            border-right: 1px solid rgba(255,255,255,0.10) !important;
          }
        }
        @media (max-width: 768px) {
          .pricing-grid {
            display: flex !important;
            flex-direction: row !important;
            gap: 16px !important;
            padding: 0 20px !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
          }
          .pricing-grid::-webkit-scrollbar {
            display: none !important;
          }
          .pricing-grid > div {
            flex: 0 0 85vw !important;
            max-width: 340px !important;
            border-radius: 16px !important;
            border-top: 1px solid rgba(255,255,255,0.10) !important;
            border-bottom: 1px solid rgba(255,255,255,0.10) !important;
            border-left: 1px solid rgba(255,255,255,0.10) !important;
            border-right: 1px solid rgba(255,255,255,0.10) !important;
            scroll-snap-align: center !important;
          }
        }
      `}</style>
    </>
  );
}
