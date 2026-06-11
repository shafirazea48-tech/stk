export default function UsableSection() {
  return (
    <section
      style={{
        background: "#000",
        boxSizing: "border-box",
      }}
    >
      {/* Desktop */}
      <div
        className="hidden md:flex"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "14.8148vw 1.85185vw",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        {/* "Usable, reliable, secure." — blue (p-color), font: 6.94444vw/6.94444vw, Bold */}
        <p
          style={{
            color: "#0C8DF8",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "6.94444vw",
            lineHeight: "6.94444vw",
            maxWidth: "100%",
          }}
        >
          Usable, reliable, secure.
        </p>

        {/* "Works just as you expect" — white */}
        <p
          style={{
            color: "#ebebeb",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "6.94444vw",
            lineHeight: "6.94444vw",
            maxWidth: "100%",
          }}
        >
          Works just as you expect
        </p>

        {/* Button — margin-top: 4.62963vw */}
        <div style={{ marginTop: "4.62963vw" }}>
          <a href="#" className="btn-primary">
            Start trading
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex md:hidden"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20vw 4.44444vw",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#0C8DF8",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "11.6667vw",
            lineHeight: "13.3333vw",
            maxWidth: "91.1111vw",
          }}
        >
          Usable, reliable, secure.
        </p>
        <p
          style={{
            color: "#ebebeb",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 700,
            fontSize: "11.6667vw",
            lineHeight: "13.3333vw",
            maxWidth: "91.1111vw",
            marginTop: "2.22222vw",
          }}
        >
          Works just as you expect
        </p>
        <div style={{ marginTop: "11.1111vw", width: "100%" }}>
          <a href="#" className="btn-primary" style={{ width: "100%" }}>
            Start trading
          </a>
        </div>
      </div>
    </section>
  );
}
