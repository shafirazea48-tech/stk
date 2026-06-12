export default function AssetsSection() {
  return (
    <section id="assets" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop */}
      <div
        className="hidden md:flex"
        style={{
          boxSizing: "border-box",
          backgroundImage: "url('/images/stockity/src/core/images/assets/section_assets_desktop-581793f672dd3e51.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          minHeight: "74.8843vw",
          paddingLeft: "1.85185vw",
          paddingRight: "1.85185vw",
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "6.94444vw",
            lineHeight: "6.94444vw",
            textAlign: "center",
            color: "#fff",
            paddingTop: "6.01852vw",
          }}
        >
          <span style={{ color: "#0C8DF8" }}>140+ assets</span> to explore
        </p>
        <div style={{ marginTop: "auto", marginBottom: "6.94444vw" }}>
          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary">
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
          boxSizing: "border-box",
          background: "#0d0d0d",
        }}
      >
        {/* Title */}
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "11.6667vw",
            lineHeight: "13.3333vw",
            textAlign: "center",
            color: "#fff",
            padding: "20vw 4.44444vw 8.88889vw",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <span style={{ color: "#0C8DF8" }}>140+ assets</span> to explore
        </p>

        {/* Mobile assets image: 75vw tall background */}
        <div
          style={{
            width: "100%",
            minHeight: "75vw",
            backgroundImage: "url('/images/stockity/src/core/images/assets/section_assets_desktop-581793f672dd3e51.webp')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        {/* Button */}
        <div style={{ width: "100%", padding: "8.88889vw 4.44444vw", boxSizing: "border-box" }}>
          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%" }}>
            Start now
          </a>
        </div>
      </div>
    </section>
  );
}
