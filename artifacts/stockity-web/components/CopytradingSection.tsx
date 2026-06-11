export default function CopytradingSection() {
  return (
    <section id="copytrading" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop: copytrading__wrapper_desktop — background image, min-height: 84.7222vw */}
      <div
        className="hidden md:flex"
        style={{
          backgroundImage: "url('/images/stockity/src/core/images/copytrading/section_copytrading_desktop-7481b3aa75b4535e.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          minHeight: "84.7222vw",
        }}
      >
        {/* copytrading__content: padding-top: 11.5741vw, padding: 0 1.85185vw */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "11.5741vw",
            paddingLeft: "1.85185vw",
            paddingRight: "1.85185vw",
            textAlign: "center",
          }}
        >
          {/* Title: 3.7037vw/4.16667vw */}
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "3.7037vw",
              lineHeight: "4.16667vw",
              color: "#fff",
              maxWidth: "100%",
            }}
          >
            Learn from the <span style={{ color: "#0C8DF8" }}>experts</span>
          </p>

          {/* Subtitle: lp-font-regular-subtitle = 1.85185vw/2.31481vw */}
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
              fontSize: "1.85185vw",
              lineHeight: "2.31481vw",
              color: "#f4f4f6",
              marginTop: "0.925926vw",
              marginBottom: "2.77778vw",
            }}
          >
            Study successful investment strategies and apply them to your routine
          </p>

          <a href="#" className="btn-primary">
            Start now
          </a>
        </div>
      </div>

      {/* Mobile: copytrading__wrapper_mobile */}
      <div className="flex md:hidden" style={{ flexDirection: "column" }}>
        {/* Background image */}
        <div
          style={{
            backgroundImage: "url('/images/stockity/src/core/images/copytrading/section_copytrading_mobile-2ec72b466737d77d.webp')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "88.8889vw",
          }}
        />
        {/* Content */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "11.1111vw 4.44444vw",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "8.33333vw",
              lineHeight: "10.5556vw",
              color: "#f4f4f6",
              maxWidth: "83.3333vw",
            }}
          >
            Learn from the <span style={{ color: "#0C8DF8" }}>experts</span>
          </p>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "5vw",
              lineHeight: "6.66667vw",
              color: "#f4f4f6",
              marginTop: "2.22222vw",
              marginBottom: "8.88889vw",
            }}
          >
            Study successful investment strategies and apply them to your routine
          </p>
          <div style={{ width: "100%" }}>
            <a href="#" className="btn-primary" style={{ width: "100%" }}>
              Start now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
