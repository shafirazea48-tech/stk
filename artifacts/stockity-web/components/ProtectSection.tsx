export default function ProtectSection() {
  return (
    <section id="protect" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop */}
      <div className="hidden md:block">
        {/* Title: lp-font-black-title = 3.7037vw, padding: 14.8148vw 1.85185vw 7.40741vw */}
        <p
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            padding: "14.8148vw 1.85185vw 7.40741vw",
            width: "100%",
          }}
        >
          Everything you want in a platform
        </p>

        {/* protect__grid: grid 2x2, gap: 16px */}
        <div
          style={{
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            padding: "0 1.85185vw",
            paddingBottom: "9.25926vw",
          }}
        >
          {/* Card 1: image_3 — fund protection */}
          <div
            style={{
              boxSizing: "border-box",
              backgroundImage: "url('/images/stockity/src/core/images/protect/card_3_desktop-467ada6d994d3f16.webp')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "2.31481vw",
              minHeight: "38.1944vw",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                textAlign: "center",
                boxSizing: "border-box",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "2.77778vw",
                paddingLeft: "2.77778vw",
                paddingRight: "2.77778vw",
                width: "100%",
              }}
            >
              {/* lp-font-black-subtitle = 2.77778vw/3.24074vw */}
              <p
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "2.77778vw",
                  lineHeight: "3.24074vw",
                }}
              >
                High-level{" "}
                <span style={{ color: "#0C8DF8" }}>fund protection</span>
                {" "}and transactions
              </p>
            </div>
          </div>

          {/* Card 2: has-animation — chart / no hidden fees */}
          <div
            style={{
              boxSizing: "border-box",
              background: "#161616",
              backgroundImage: "radial-gradient(ellipse 70% 70% at 50% 30%, rgba(12,141,248,0.12) 0%, transparent 70%)",
              borderRadius: "2.31481vw",
              minHeight: "38.1944vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated chart visual */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2.77778vw",
              }}
            >
              <svg viewBox="0 0 480 270" fill="none" style={{ width: "100%" }}>
                {/* Grid lines */}
                {[0, 54, 108, 162, 216, 270].map((y) => (
                  <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                ))}
                {/* Chart area */}
                <defs>
                  <linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#0990ff" stopOpacity="0.3"/>
                    <stop offset="1" stopColor="#0990ff" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path
                  d="M0 240 L60 200 L120 215 L195 140 L255 160 L315 85 L390 105 L450 45 L480 60 L480 270 L0 270Z"
                  fill="url(#pg1)"
                />
                <path
                  d="M0 240 L60 200 L120 215 L195 140 L255 160 L315 85 L390 105 L450 45 L480 60"
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#0990ff"/>
                    <stop offset="1" stopColor="#00d7eb"/>
                  </linearGradient>
                </defs>
                {[[315, 85], [450, 45]].map(([cx, cy]) => (
                  <circle key={`${cx},${cy}`} cx={cx} cy={cy} r="6" fill="#0990ff" stroke="#fff" strokeWidth="2"/>
                ))}
              </svg>
            </div>

            {/* Subtitle */}
            <div
              style={{
                textAlign: "center",
                boxSizing: "border-box",
                paddingBottom: "2.77778vw",
                paddingLeft: "2.77778vw",
                paddingRight: "2.77778vw",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "2.77778vw",
                  lineHeight: "3.24074vw",
                  textAlign: "center",
                }}
              >
                Transparent investing
                <br />
                <span style={{ color: "#0C8DF8" }}>with no hidden fees</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <p
          style={{
            textAlign: "center",
            color: "#f4f4f6",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "8.33333vw",
            lineHeight: "10.5556vw",
            padding: "20vw 4.44444vw 6.66667vw",
          }}
        >
          Everything you want in a platform
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "4.44444vw", padding: "0 2.22222vw", paddingBottom: "11.1111vw" }}>
          <div
            style={{
              backgroundImage: "url('/images/stockity/src/core/images/protect/card_3_mobile-54a0fa1fcfbf9102.webp')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "3.33333vw",
              minHeight: "95.5556vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "#fff", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 900, fontSize: "6.66667vw", lineHeight: "8.88889vw", textAlign: "center", padding: "8.88889vw 4.44444vw" }}>
              High-level <span style={{ color: "#0C8DF8" }}>fund protection</span> and transactions
            </p>
          </div>
          <div
            style={{
              background: "#161616",
              borderRadius: "3.33333vw",
              minHeight: "95.5556vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "8.88889vw 4.44444vw",
            }}
          >
            <p style={{ color: "#fff", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 900, fontSize: "6.66667vw", lineHeight: "8.88889vw", textAlign: "center" }}>
              Transparent investing<br /><span style={{ color: "#0C8DF8" }}>with no hidden fees</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
