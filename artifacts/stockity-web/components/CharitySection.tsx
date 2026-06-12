import { getT, Locale } from "@/lib/i18n/translations";

export default function CharitySection({ locale }: { locale?: Locale }) {
  const t = getT(locale ?? "en");
  const headingLine1 = locale === "id"
    ? "Kami berinvestasi lebih dari sekadar trading."
    : "We invest in more than trading.";
  const headingLine2Before = locale === "id" ? "Stockity " : "Stockity is ";
  const headingHighlight = locale === "id" ? "aktif secara sosial" : "socially active";

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
            {headingLine1}
            <br />
            {headingLine2Before}<span style={{ color: "#0C8DF8" }}>{headingHighlight}</span>
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
            {t.charity.text}
          </p>

          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.charity.cta}
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
            {headingLine1}
            <br />
            {headingLine2Before}<span style={{ color: "#0C8DF8" }}>{headingHighlight}</span>
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
            {t.charity.textMobile}
          </p>
          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%" }}>
            {t.charity.cta}
          </a>
        </div>
      </section>
    </>
  );
}
