export default function WithdrawSection() {
  const logos = [
    { num: 1, file: "/images/stockity/src/core/images/withdraw/logo_1.svg" },
    { num: 2, file: "/images/stockity/src/core/images/withdraw/logo_2.svg" },
    { num: 3, file: "/images/stockity/src/core/images/withdraw/logo_3.svg" },
    { num: 4, file: "/images/stockity/src/core/images/withdraw/logo_4.svg" },
    { num: 5, file: "/images/stockity/src/core/images/withdraw/logo_5.svg" },
    { num: 6, file: "/images/stockity/src/core/images/withdraw/logo_6.svg" },
  ];

  return (
    <section id="withdraw" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop */}
      <div
        className="hidden md:flex"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Title: lp-font-black-title = 3.7037vw/4.16667vw, padding: 14.8148vw 1.85185vw 3.24074vw */}
        <p
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            padding: "14.8148vw 1.85185vw 3.24074vw",
            width: "100%",
          }}
        >
          Deposit &amp; withdraw using{" "}
          <span style={{ color: "#0C8DF8" }}>local payment methods</span>
        </p>

        {/* Payment logo cards */}
        <div
          style={{
            display: "flex",
            gap: "1.38889vw",
            padding: "0 1.85185vw",
            flexWrap: "wrap",
            justifyContent: "center",
            boxSizing: "border-box",
            width: "100%",
            paddingBottom: "9.25926vw",
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.num}
              style={{
                boxSizing: "border-box",
                background: "#161616",
                borderRadius: "1.85185vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                width: "15.2778vw",
                height: "6.94444vw",
                padding: "1.85185vw 2.31481vw",
              }}
            >
              <img
                src={logo.file}
                alt={`Payment method ${logo.num}`}
                style={{
                  width: "9.72222vw",
                  height: "3.24074vw",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex md:hidden"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4.44444vw",
            padding: "0 4.44444vw",
            width: "100%",
            boxSizing: "border-box",
            paddingBottom: "11.1111vw",
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.num}
              style={{
                background: "#161616",
                borderRadius: "8.88889vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "33.3333vw",
                padding: "8.88889vw 11.1111vw",
              }}
            >
              <img src={logo.file} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
