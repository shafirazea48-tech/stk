import Header from "@/components/Header";

const CheckIcon = ({ checked }: { checked: boolean }) =>
  checked ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill="#0990ff" opacity="0.15" />
      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="#0990ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="#82889b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

const DiamondFree = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" fill="none" stroke="#82889b" strokeWidth="1.5" />
    <path d="M20 4L36 14H4L20 4Z" fill="#82889b" opacity="0.2" />
  </svg>
);

const DiamondSilver = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" fill="url(#silverGrad)" />
    <defs>
      <linearGradient id="silverGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e0e0e0" />
        <stop offset="1" stopColor="#9e9e9e" />
      </linearGradient>
    </defs>
  </svg>
);

const DiamondGold = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" fill="url(#goldGrad)" />
    <defs>
      <linearGradient id="goldGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffe066" />
        <stop offset="1" stopColor="#b8860b" />
      </linearGradient>
    </defs>
  </svg>
);

const DiamondVIP = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" fill="url(#vipGrad)" />
    <defs>
      <linearGradient id="vipGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#64b5f6" />
        <stop offset="1" stopColor="#0d47a1" />
      </linearGradient>
    </defs>
  </svg>
);

const DiamondPlatinum = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" fill="url(#platGrad)" />
    <defs>
      <linearGradient id="platGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ce93d8" />
        <stop offset="1" stopColor="#6a1b9a" />
      </linearGradient>
    </defs>
  </svg>
);

const FastWithdrawIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2v8l4 4" stroke="#0990ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="8" stroke="#0990ff" strokeWidth="1.5" />
  </svg>
);

const RiskFreeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 6v5c0 4 3 7 7 7s7-3 7-7V6L10 2Z" stroke="#0990ff" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke="#0990ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CashbackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="#a78bfa" strokeWidth="1.5" />
    <path d="M7 10h6M10 7v6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const InsuranceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 6v5c0 4 3 7 7 7s7-3 7-7V6L10 2Z" stroke="#a78bfa" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 8v4M10 13.5v.5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
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

const tiers = [
  {
    id: "free",
    name: "Free",
    icon: <DiamondFree />,
    dark: false,
    purple: false,
    mostPopular: false,
    stats: [
      { label: "30 trades", sub: "on demo account" },
    ],
    statRight: null,
    withdrawals: "—",
    inviteFriends: "—",
    depositBonuses: "—",
    checkedFeatures: [],
    cta: "Registration",
    ctaStyle: "gradient",
  },
  {
    id: "standard",
    name: "Standard",
    icon: <DiamondSilver />,
    dark: false,
    purple: false,
    mostPopular: false,
    stats: [
      { label: "up to 85%", sub: "profitability" },
    ],
    statRight: { label: "120+", sub: "assets" },
    withdrawals: "3 days",
    inviteFriends: "up to $50",
    depositBonuses: "up to 100%",
    checkedFeatures: [],
    cta: "Get",
    ctaStyle: "gradient",
  },
  {
    id: "gold",
    name: "Gold",
    icon: <DiamondGold />,
    dark: false,
    purple: false,
    mostPopular: false,
    stats: [
      { label: "up to 90%", sub: "profitability" },
    ],
    statRight: { label: "130+", sub: "assets" },
    statExtra: { label: "3%", sub: "cashback" },
    withdrawals: "24 hours",
    inviteFriends: "up to $50",
    depositBonuses: "up to 150%",
    checkedFeatures: [],
    cta: "Get",
    ctaStyle: "gradient",
  },
  {
    id: "vip",
    name: "VIP",
    icon: <DiamondVIP />,
    dark: true,
    purple: false,
    mostPopular: true,
    topFeatures: [
      { icon: <FastWithdrawIcon />, title: "Fast withdraw", desc: "Get your funds in 4 hours or less" },
      { icon: <RiskFreeIcon />, title: "Risk-free trades", desc: "Profit from successful trades and forget the unsuccessful" },
    ],
    stats: [
      { label: "up to 90%", sub: "profitability" },
    ],
    statRight: { label: "140+", sub: "assets" },
    statExtra: { label: "7%", sub: "cashback" },
    withdrawals: "4 hours",
    inviteFriends: "up to $850",
    depositBonuses: "up to 200%",
    checkedFeatures: [0, 1, 2, 3, 4, 5],
    cta: "Get",
    ctaStyle: "gradient",
  },
  {
    id: "platinum",
    name: "Platinum",
    icon: <DiamondPlatinum />,
    dark: false,
    purple: true,
    mostPopular: false,
    topFeatures: [
      { icon: <CashbackIcon />, title: "Cashback Plus", desc: "Additional 5% compensation for unsuccessful trades every month" },
      { icon: <InsuranceIcon />, title: "Deposit insurance", desc: "Use your money with more certainty. Increased deposit insurance can help" },
    ],
    stats: [
      { label: "up to 90%", sub: "profitability" },
    ],
    statRight: { label: "140+", sub: "assets" },
    statExtra: { label: "10%", sub: "cashback" },
    withdrawals: "4 hours",
    inviteFriends: "up to $850",
    depositBonuses: "up to 300%",
    checkedFeatures: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    cta: "Get",
    ctaStyle: "gradient",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#151723",
          paddingTop: "6.25vw",
          paddingBottom: "5.55556vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 1.85185vw",
            boxSizing: "border-box",
          }}
        >
          {/* Title row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "3.47222vw",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(28px, 3.47222vw, 60px)",
                  fontWeight: 800,
                  color: "#f4f4f6",
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Statuses
              </h1>
              <p
                style={{
                  marginTop: "0.69444vw",
                  fontSize: "clamp(13px, 1.04167vw, 18px)",
                  color: "#82889b",
                  lineHeight: 1.6,
                }}
              >
                More trading advantages and benefits with each status. Check in cards below
              </p>
            </div>
            {/* Nav arrows */}
            <div style={{ display: "flex", gap: "0.69444vw", flexShrink: 0, marginTop: 8 }}>
              {["←", "→"].map((arrow) => (
                <button
                  key={arrow}
                  style={{
                    width: "clamp(36px, 2.77778vw, 48px)",
                    height: "clamp(36px, 2.77778vw, 48px)",
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
                  {arrow}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1.38889vw",
              alignItems: "start",
            }}
            className="pricing-grid"
          >
            {tiers.map((tier) => {
              const cardBg = tier.purple
                ? "linear-gradient(160deg, #2d1b4e 0%, #1a103a 100%)"
                : tier.dark
                ? "linear-gradient(160deg, #1a2a4a 0%, #0d1b35 100%)"
                : "#1e2235";
              const textColor = "#f4f4f6";
              const subColor = tier.dark || tier.purple ? "rgba(255,255,255,0.6)" : "#82889b";
              const borderColor = tier.purple
                ? "rgba(167,139,250,0.25)"
                : tier.dark
                ? "rgba(9,144,255,0.25)"
                : "rgba(255,255,255,0.06)";

              return (
                <div
                  key={tier.id}
                  style={{
                    background: cardBg,
                    borderRadius: "1.11111vw",
                    border: `1px solid ${borderColor}`,
                    padding: "1.38889vw",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.04167vw",
                    position: "relative",
                    minWidth: 0,
                  }}
                >
                  {/* MOST POPULAR badge */}
                  {tier.mostPopular && (
                    <div
                      style={{
                        position: "absolute",
                        top: -13,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "linear-gradient(90deg,#0990ff 0%,#00eaff 100%)",
                        borderRadius: 20,
                        padding: "3px 14px",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  {/* Icon + Name */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.55556vw" }}>
                    {tier.icon}
                    <span
                      style={{
                        fontSize: "clamp(16px, 1.38889vw, 24px)",
                        fontWeight: 700,
                        color: textColor,
                      }}
                    >
                      {tier.name}
                    </span>
                    {tier.purple && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 2 }}>
                        <circle cx="8" cy="8" r="7" stroke="#a78bfa" strokeWidth="1.2" />
                        <text x="5" y="12" fontSize="9" fill="#a78bfa" fontWeight="bold">i</text>
                      </svg>
                    )}
                  </div>

                  {/* Top Features (VIP / Platinum) */}
                  {tier.topFeatures && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.55556vw",
                        borderBottom: `1px solid ${borderColor}`,
                        paddingBottom: "0.83333vw",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: subColor,
                          margin: 0,
                          textTransform: "uppercase",
                        }}
                      >
                        TOP FEATURES
                      </p>
                      {tier.topFeatures.map((f) => (
                        <div key={f.title} style={{ display: "flex", gap: "0.55556vw", alignItems: "flex-start" }}>
                          <span style={{ marginTop: 1, flexShrink: 0 }}>{f.icon}</span>
                          <div>
                            <p style={{ margin: 0, fontSize: "clamp(11px, 0.83333vw, 14px)", fontWeight: 600, color: textColor }}>{f.title}</p>
                            <p style={{ margin: 0, fontSize: "clamp(10px, 0.69444vw, 12px)", color: subColor, lineHeight: 1.4 }}>{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Main stat */}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.69444vw",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        background: tier.dark || tier.purple ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
                        borderRadius: "0.55556vw",
                        padding: "0.69444vw",
                        boxSizing: "border-box",
                      }}
                    >
                      {tier.stats.map((s) => (
                        <div key={s.label}>
                          <p style={{ margin: 0, fontSize: "clamp(16px, 1.52778vw, 26px)", fontWeight: 700, color: textColor }}>{s.label}</p>
                          <p style={{ margin: 0, fontSize: "clamp(10px, 0.76389vw, 13px)", color: subColor }}>{s.sub}</p>
                        </div>
                      ))}
                    </div>
                    {tier.statRight && (
                      <div
                        style={{
                          flex: 1,
                          background: tier.dark || tier.purple ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
                          borderRadius: "0.55556vw",
                          padding: "0.69444vw",
                          boxSizing: "border-box",
                        }}
                      >
                        <p style={{ margin: 0, fontSize: "clamp(16px, 1.52778vw, 26px)", fontWeight: 700, color: textColor }}>{tier.statRight.label}</p>
                        <p style={{ margin: 0, fontSize: "clamp(10px, 0.76389vw, 13px)", color: subColor }}>{tier.statRight.sub}</p>
                      </div>
                    )}
                    {"statExtra" in tier && tier.statExtra && (
                      <div
                        style={{
                          flex: 1,
                          background: tier.dark || tier.purple ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
                          borderRadius: "0.55556vw",
                          padding: "0.69444vw",
                          boxSizing: "border-box",
                        }}
                      >
                        <p style={{ margin: 0, fontSize: "clamp(16px, 1.52778vw, 26px)", fontWeight: 700, color: textColor }}>{tier.statExtra.label}</p>
                        <p style={{ margin: 0, fontSize: "clamp(10px, 0.76389vw, 13px)", color: subColor }}>{tier.statExtra.sub}</p>
                      </div>
                    )}
                  </div>

                  {/* Withdrawals / Invite / Deposit */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.41667vw", borderTop: `1px solid ${borderColor}`, paddingTop: "0.83333vw" }}>
                    {[
                      { label: "Withdrawals", value: tier.withdrawals },
                      { label: "Invite Friends", value: tier.inviteFriends, link: tier.id !== "free" },
                      { label: "Deposit bonuses", value: tier.depositBonuses },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {row.link ? (
                          <a href="#" style={{ fontSize: "clamp(11px, 0.83333vw, 14px)", color: "#0990ff", textDecoration: "none" }}>{row.label}</a>
                        ) : (
                          <span style={{ fontSize: "clamp(11px, 0.83333vw, 14px)", color: subColor }}>{row.label}</span>
                        )}
                        <span style={{ fontSize: "clamp(11px, 0.83333vw, 14px)", color: textColor, fontWeight: 500 }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature checklist */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.41667vw", borderTop: `1px solid ${borderColor}`, paddingTop: "0.83333vw" }}>
                    {allFeatures.map((feat, i) => (
                      <div key={feat} style={{ display: "flex", gap: "0.41667vw", alignItems: "flex-start" }}>
                        <CheckIcon checked={tier.checkedFeatures.includes(i)} />
                        <span
                          style={{
                            fontSize: "clamp(10px, 0.76389vw, 13px)",
                            color: tier.checkedFeatures.includes(i) ? textColor : subColor,
                            lineHeight: 1.4,
                          }}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    style={{
                      width: "100%",
                      padding: "0.76389vw 0",
                      borderRadius: "0.55556vw",
                      border: "none",
                      background: "linear-gradient(90deg,#0990ff 0%,#00eaff 100%)",
                      color: "#fff",
                      fontSize: "clamp(13px, 1.04167vw, 18px)",
                      fontWeight: 700,
                      cursor: "pointer",
                      marginTop: "auto",
                    }}
                  >
                    {tier.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
