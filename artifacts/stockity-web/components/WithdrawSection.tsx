"use client";

export default function WithdrawSection() {
  const logos = [
    { num: 1, file: "/images/stockity/src/core/images/withdraw/logo_1.svg" },
    { num: 2, file: "/images/stockity/src/core/images/withdraw/logo_2.svg" },
    { num: 3, file: "/images/stockity/src/core/images/withdraw/logo_3.svg" },
    { num: 4, file: "/images/stockity/src/core/images/withdraw/logo_4.svg" },
    { num: 5, file: "/images/stockity/src/core/images/withdraw/logo_5.svg" },
    { num: 6, file: "/images/stockity/src/core/images/withdraw/logo_6.svg" },
  ];

  const LogoCard = ({ num, file }: { num: number; file: string }) => (
    <div
      style={{
        boxSizing: "border-box",
        background: "#161616",
        borderRadius: "32px",
        flexShrink: 0,
        width: "264px",
        height: "120px",
        padding: "32px 40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={file}
        alt={`Payment method ${num}`}
        style={{ width: "168px", height: "56px", objectFit: "contain" }}
      />
    </div>
  );

  const LogoCardDesktop = ({ num, file }: { num: number; file: string }) => (
    <div
      style={{
        boxSizing: "border-box",
        background: "#161616",
        borderRadius: "1.85185vw",
        flexShrink: 0,
        width: "15.2778vw",
        height: "6.94444vw",
        padding: "1.85185vw 2.31481vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={file}
        alt={`Payment method ${num}`}
        style={{ width: "9.72222vw", height: "3.24074vw", objectFit: "contain" }}
      />
    </div>
  );

  return (
    <section id="withdraw" style={{ background: "#000", overflow: "hidden" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

        {/* Title — mobile */}
        <p
          className="block md:hidden"
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            color: "#f4f4f6",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "8.33333vw",
            lineHeight: "10.5556vw",
            padding: "20vw 4.44444vw 6.66667vw",
            width: "100%",
          }}
        >
          Deposit &amp; withdraw using{" "}
          <span style={{ color: "#0C8DF8" }}>local payment methods</span>
        </p>

        {/* Title — desktop */}
        <p
          className="hidden md:block"
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            padding: "9.25926vw 1.85185vw 3.24074vw",
            width: "100%",
          }}
        >
          Deposit &amp; withdraw using{" "}
          <span style={{ color: "#0C8DF8" }}>local payment methods</span>
        </p>

        {/* ── Mobile: infinite auto-scroll slider ── */}
        <div
          className="block md:hidden"
          style={{ width: "100%", overflow: "hidden" }}
        >
          {/* Single track with logos×2 — keyframe moves -50% for seamless loop */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              animation: "scroll-left 20s linear infinite",
              willChange: "transform",
              width: "max-content",
            }}
          >
            {[...logos, ...logos].map((l, i) => (
              <LogoCard key={i} {...l} />
            ))}
          </div>
        </div>

        {/* ── Desktop: static flex row ── */}
        <div
          className="hidden md:flex"
          style={{
            boxSizing: "border-box",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.925926vw",
            width: "100%",
            padding: "0 1.85185vw",
          }}
        >
          {logos.map((l) => (
            <LogoCardDesktop key={l.num} {...l} />
          ))}
        </div>

        {/* Show more button */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "6.66667vw",
            padding: "0 2.22222vw",
            paddingBottom: "9.25926vw",
          }}
        >
          <a
            href="#"
            style={{
              boxSizing: "border-box",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 1.38889vw, 20px)",
              textDecoration: "none",
              cursor: "pointer",
              borderRadius: "clamp(8px, 0.925926vw, 16px)",
              padding: "clamp(10px, 1.38889vw, 20px) clamp(24px, 4.62963vw, 64px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#3b3b3b")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "rgba(255,255,255,0.15)")}
          >
            Show more
          </a>
        </div>
      </div>
    </section>
  );
}
