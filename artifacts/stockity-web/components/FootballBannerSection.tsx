const cards = [
  {
    id: "asia",
    label: "ASIA MATCHPOWER",
    sub: "INDEX",
    score1: 60,
    score2: 84,
    bg: "linear-gradient(145deg, #8b1a1a 0%, #c0392b 40%, #e74c3c 100%)",
    accent: "#ff6b6b",
    emoji: "🏯",
    rotate: "-18deg",
    translateX: "-38%",
    translateY: "14%",
    zIndex: 2,
  },
  {
    id: "latam",
    label: "LATAM POWER",
    sub: "INDEX",
    score1: 90,
    score2: 72,
    bg: "linear-gradient(145deg, #0d4f3c 0%, #1a7a5e 50%, #27ae60 100%)",
    accent: "#2ecc71",
    emoji: "🌴",
    rotate: "-8deg",
    translateX: "-15%",
    translateY: "6%",
    zIndex: 3,
  },
  {
    id: "brazil",
    label: "BRAZIL FORCE",
    sub: "INDEX",
    score1: 88,
    score2: 95,
    bg: "linear-gradient(145deg, #1a4a1a 0%, #2d8a2d 50%, #27ae60 100%)",
    accent: "#f1c40f",
    emoji: "⚡",
    rotate: "2deg",
    translateX: "8%",
    translateY: "0%",
    zIndex: 5,
  },
  {
    id: "egypt",
    label: "EGYPT TEMPO",
    sub: "INDEX",
    score1: 87,
    score2: null,
    bg: "linear-gradient(145deg, #5c3a1e 0%, #9c6b2e 50%, #d4a843 100%)",
    accent: "#f39c12",
    emoji: "🏺",
    rotate: "12deg",
    translateX: "30%",
    translateY: "8%",
    zIndex: 4,
  },
  {
    id: "africa",
    label: "AFRICA KNOCKOUT",
    sub: "INDEX",
    score1: 65,
    score2: 90,
    score3: 99,
    bg: "linear-gradient(145deg, #7a3a0a 0%, #c0622a 50%, #e67e22 100%)",
    accent: "#e67e22",
    emoji: "🌳",
    rotate: "22deg",
    translateX: "55%",
    translateY: "14%",
    zIndex: 2,
  },
];

const FootballIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <circle cx="20" cy="20" r="18" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
    <polygon points="20,8 23,14 17,14" fill="#222"/>
    <polygon points="29,14 32,20 26,20" fill="#222" transform="rotate(72, 20, 20)"/>
    <polygon points="29,14 32,20 26,20" fill="#222" transform="rotate(144, 20, 20)"/>
    <polygon points="29,14 32,20 26,20" fill="#222" transform="rotate(216, 20, 20)"/>
    <polygon points="29,14 32,20 26,20" fill="#222" transform="rotate(288, 20, 20)"/>
    <circle cx="20" cy="20" r="3" fill="#222"/>
  </svg>
);

export default function FootballBannerSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0a1628 0%, #0d2044 30%, #0f2a5a 60%, #0a1e4a 100%)",
        boxSizing: "border-box",
      }}
    >
      {/* Stadium lights glow effect */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse 80% 40% at 50% 10%, rgba(0,100,255,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>
      {/* Green grass strip at bottom */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "35%",
        background: "linear-gradient(180deg, transparent 0%, rgba(10,60,20,0.4) 60%, rgba(5,40,10,0.7) 100%)",
        pointerEvents: "none",
      }}/>

      {/* Desktop layout */}
      <div
        className="hidden md:block"
        style={{ padding: "3.7037vw 3.7037vw 0", boxSizing: "border-box" }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "4vw" }}>
          {/* Left: text content */}
          <div style={{ flex: "0 0 auto", maxWidth: "44vw", paddingBottom: "4vw" }}>
            <p style={{
              fontSize: "0.972222vw",
              fontWeight: 700,
              color: "#4db8ff",
              letterSpacing: "0.05em",
              marginBottom: "1.38889vw",
            }}>
              10.06 – 24.06
            </p>
            <h2 style={{
              fontSize: "3.24074vw",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "1.38889vw",
              fontFamily: "'Nunito Sans', sans-serif",
            }}>
              Football Power Battle
            </h2>
            <p style={{
              fontSize: "1.11111vw",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              marginBottom: "2.31481vw",
              maxWidth: "32vw",
            }}>
              Trade 5 regional indices with boosted profitability and compete for the top rankings
            </p>
            <a
              href="#"
              className="btn-primary"
              style={{ fontFamily: "'Nunito Sans', sans-serif", minWidth: "16vw" }}
            >
              Try it!
            </a>
            <p style={{
              marginTop: "1.11111vw",
              fontSize: "0.694444vw",
              color: "rgba(255,255,255,0.35)",
            }}>
              Risk warning: your capital might be at risk
            </p>
          </div>

          {/* Right: cards fan */}
          <div style={{ flex: 1, position: "relative", height: "24vw", overflow: "visible" }}>
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: `translateX(${card.translateX}) translateY(${card.translateY}) rotate(${card.rotate})`,
                  width: "12vw",
                  height: "17vw",
                  borderRadius: "1.2vw",
                  background: card.bg,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  zIndex: card.zIndex,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.2vw 0.8vw 0.8vw",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {/* Card top: Stockity logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.3vw", alignSelf: "flex-end", opacity: 0.7 }}>
                  <svg viewBox="0 0 12 20" fill="none" style={{ height: "1.2vw" }}>
                    <path d="M10.8 1.25a.33.33 0 0 0-.368-.37L4.044 1.735a.33.33 0 0 0-.19.56l1 .644a.412.412 0 0 1 .068.637L1.13 7.379a2.349 2.349 0 0 0 0 3.316 2.336 2.336 0 0 0 3.308 0l3.797-3.805a.41.41 0 0 1 .635.069l.64.998a.328.328 0 0 0 .557-.19L10.8 1.25Z" fill="white"/>
                    <path d="M2.028 18.319a2.349 2.349 0 0 1 0-3.317l4.463-4.472a2.336 2.336 0 0 1 3.308 0 2.349 2.349 0 0 1 0 3.316l-4.463 4.472a2.336 2.336 0 0 1-3.308 0Z" fill="white" opacity="0.7"/>
                  </svg>
                  <span style={{ fontSize: "0.7vw", color: "white", fontWeight: 700 }}>Stockity</span>
                </div>

                {/* Football */}
                <div style={{ width: "4vw", height: "4vw" }}>
                  <FootballIcon />
                </div>

                {/* Bottom labels */}
                <div style={{ width: "100%", textAlign: "center" }}>
                  <div style={{
                    fontSize: "0.65vw",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.95)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                    marginBottom: "0.3vw",
                  }}>
                    {card.label}
                  </div>
                  <div style={{
                    fontSize: "0.55vw",
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.08em",
                    marginBottom: "0.5vw",
                  }}>
                    {card.sub}
                  </div>
                  {/* Score row */}
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                    {[card.score1, card.score2].filter(Boolean).map((s, i) => (
                      <span key={i} style={{ fontSize: "0.75vw", fontWeight: 700, color: card.accent }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div
        className="block md:hidden"
        style={{ boxSizing: "border-box", width: "100%", padding: "11.1111vw 6.66667vw 0" }}
      >
        {/* Text */}
        <p style={{
          fontSize: "3.88889vw",
          fontWeight: 700,
          color: "#4db8ff",
          letterSpacing: "0.05em",
          marginBottom: "4.44444vw",
          textAlign: "center",
        }}>
          10.06 – 24.06
        </p>
        <h2 style={{
          fontSize: "8.33333vw",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.1,
          marginBottom: "4.44444vw",
          fontFamily: "'Nunito Sans', sans-serif",
          textAlign: "center",
        }}>
          Football Power Battle
        </h2>
        <p style={{
          fontSize: "4.44444vw",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.6,
          marginBottom: "6.66667vw",
          textAlign: "center",
        }}>
          Trade 5 regional indices with boosted profitability and compete for the top rankings
        </p>
        <a
          href="#"
          className="btn-primary"
          style={{ fontFamily: "'Nunito Sans', sans-serif", display: "flex", justifyContent: "center" }}
        >
          Try it!
        </a>
        <p style={{
          marginTop: "3.33333vw",
          fontSize: "2.77778vw",
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
          marginBottom: "6.66667vw",
        }}>
          Risk warning: your capital might be at risk
        </p>

        {/* Cards fan — mobile */}
        <div style={{ position: "relative", height: "80vw", overflow: "hidden" }}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: `translateX(calc(${card.translateX} - 50%)) translateY(${card.translateY}) rotate(${card.rotate})`,
                width: "42vw",
                height: "58vw",
                borderRadius: "4.44444vw",
                background: card.bg,
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                zIndex: card.zIndex,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4vw 3vw 3vw",
                boxSizing: "border-box",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Stockity mark */}
              <div style={{ display: "flex", alignItems: "center", gap: "1vw", alignSelf: "flex-end", opacity: 0.7 }}>
                <svg viewBox="0 0 12 20" fill="none" style={{ height: "4vw" }}>
                  <path d="M10.8 1.25a.33.33 0 0 0-.368-.37L4.044 1.735a.33.33 0 0 0-.19.56l1 .644a.412.412 0 0 1 .068.637L1.13 7.379a2.349 2.349 0 0 0 0 3.316 2.336 2.336 0 0 0 3.308 0l3.797-3.805a.41.41 0 0 1 .635.069l.64.998a.328.328 0 0 0 .557-.19L10.8 1.25Z" fill="white"/>
                  <path d="M2.028 18.319a2.349 2.349 0 0 1 0-3.317l4.463-4.472a2.336 2.336 0 0 1 3.308 0 2.349 2.349 0 0 1 0 3.316l-4.463 4.472a2.336 2.336 0 0 1-3.308 0Z" fill="white" opacity="0.7"/>
                </svg>
                <span style={{ fontSize: "2.5vw", color: "white", fontWeight: 700 }}>Stockity</span>
              </div>

              {/* Football */}
              <div style={{ width: "14vw", height: "14vw" }}>
                <FootballIcon />
              </div>

              {/* Labels */}
              <div style={{ width: "100%", textAlign: "center" }}>
                <div style={{
                  fontSize: "2.5vw",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.95)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                  marginBottom: "1vw",
                }}>
                  {card.label}
                </div>
                <div style={{
                  fontSize: "2vw",
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.08em",
                  marginBottom: "1.5vw",
                }}>
                  {card.sub}
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  {[card.score1, card.score2].filter(Boolean).map((s, i) => (
                    <span key={i} style={{ fontSize: "3vw", fontWeight: 700, color: card.accent }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
