"use client";

export default function JoinSection() {
  return (
    <>
      {/* Desktop */}
      <section
        className="hidden md:block"
        style={{
          background: "transparent",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "14.8148vw 1.85185vw",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          {/* Title: "Join the 3,5+ million investors using Stockity"
              lp-font-bold-title-big-small: desktop 6.94444vw/6.94444vw */}
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "6.94444vw",
              lineHeight: "6.94444vw",
              color: "#fff",
              marginBottom: 0,
            }}
          >
            Join the <span style={{ color: "#0C8DF8" }}>3,5+ million</span>
            <br />
            investors using Stockity
          </p>

          {/* Button — full width, 6.94444vw tall, border-radius: 32px, gradient #0990ff→#00eaff */}
          <a
            href="/go"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              background: "linear-gradient(90deg, #0990ff 0%, #00eaff 100%)",
              height: "6.94444vw",
              width: "100%",
              marginTop: "5.55556vw",
              borderRadius: "32px",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "2.31481vw",
              lineHeight: "2.31481vw",
              boxShadow: "0 10px 60px 0 rgba(93,139,192,.5)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start Now
          </a>
        </div>
      </section>

      {/* Mobile */}
      <section
        className="block md:hidden"
        style={{
          background: "transparent",
          padding: "20vw 4.44444vw",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "9.44444vw",
            lineHeight: "12.2222vw",
            color: "#f4f4f6",
            marginBottom: 0,
          }}
        >
          Join the <span style={{ color: "#0C8DF8" }}>3,5+&nbsp;million</span>
          <br />
          investors using
          <br />
          Stockity
        </p>
        <a
          href="/go"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            background: "linear-gradient(90deg, #0990ff 0%, #00eaff 100%)",
            height: "20vw",
            width: "100%",
            marginTop: "13.3333vw",
            borderRadius: "2.22222vw",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "5.55556vw",
            lineHeight: "7.77778vw",
            boxShadow: "0 10px 60px 0 rgba(93,139,192,.5)",
          }}
        >
          Start Now
        </a>
      </section>
    </>
  );
}
