export default function CharitySection() {
  return (
    <>
      {/* Desktop */}
      <section
        className="hidden md:block"
        style={{
          background: "#000",
          backgroundImage: "url('/images/stockity/src/home/images/charity/charity-d-63d410ad0ec0d753.webp')",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          paddingTop: "9.25926vw",
          paddingBottom: "41.4352vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 13.8889vw",
          }}
        >
          <h2
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "3.7037vw",
              lineHeight: "4.16667vw",
              color: "#fff",
              marginBottom: "0.925926vw",
            }}
          >
            We invest in more than trading.
            <br />
            Stockity is <span style={{ color: "#0C8DF8" }}>socially active</span>
          </h2>

          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
              fontSize: "1.85185vw",
              lineHeight: "2.31481vw",
              color: "#ebebeb",
              marginBottom: "2.77778vw",
              maxWidth: "69.4444vw",
            }}
          >
            We support environmental protection, animal welfare, sports, and many
            other initiatives. Read more to see how we give back to communities
          </p>

          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Learn more
          </a>
        </div>
      </section>

      {/* Mobile */}
      <section
        className="block md:hidden"
        style={{
          background: "#000",
          backgroundImage: "url('/images/stockity/src/home/images/charity/charity-m-32a824a023665830.webp')",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          paddingTop: "11.1111vw",
          paddingBottom: "72.2222vw",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "0 4.44444vw" }}>
          <h2
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "8.33333vw",
              lineHeight: "10.5556vw",
              color: "#fff",
              marginBottom: "4.44444vw",
            }}
          >
            We invest in more than trading.
            <br />
            Stockity is <span style={{ color: "#0C8DF8" }}>socially active</span>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
              fontSize: "5vw",
              lineHeight: "6.66667vw",
              color: "#ebebeb",
              marginBottom: "6.66667vw",
            }}
          >
            We support environmental protection, animal welfare, sports, and many
            other initiatives.
          </p>
          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%" }}>
            Learn more
          </a>
        </div>
      </section>
    </>
  );
}
