export default function AssetsSection() {
  return (
    <section id="assets" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop: background image wrapper */}
      <div
        className="hidden md:flex"
        style={{
          boxSizing: "border-box",
          backgroundImage: "url('/images/stockity/src/core/images/assets/section_assets_desktop-581793f672dd3e51.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "74.8843vw",
          paddingLeft: "1.85185vw",
          paddingRight: "1.85185vw",
        }}
      >
        {/* Title: "140+ assets to explore" — lp-font-bold-title-big-middle: 6.94444vw/6.94444vw */}
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "6.94444vw",
            lineHeight: "6.94444vw",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <span style={{ color: "#0C8DF8" }}>140+ assets</span> to explore
        </p>

        {/* Button container */}
        <div style={{ marginTop: "4.62963vw" }}>
          <a href="#" className="btn-primary">
            Start now
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex md:hidden"
        style={{
          flexDirection: "column",
          alignItems: "center",
          padding: "20vw 4.44444vw",
          boxSizing: "border-box",
          background: "#0d0d0d",
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "11.6667vw",
            lineHeight: "13.3333vw",
            textAlign: "center",
            color: "#fff",
            marginBottom: "8.88889vw",
          }}
        >
          <span style={{ color: "#0C8DF8" }}>140+ assets</span> to explore
        </p>
        {/* Mobile asset image placeholder */}
        <div
          style={{
            width: "100%",
            height: "80vw",
            background: "#161616",
            borderRadius: "3.33333vw",
            marginBottom: "8.88889vw",
            overflow: "hidden",
          }}
        />
        <div style={{ width: "100%" }}>
          <a href="#" className="btn-primary" style={{ width: "100%" }}>
            Start now
          </a>
        </div>
      </div>
    </section>
  );
}
