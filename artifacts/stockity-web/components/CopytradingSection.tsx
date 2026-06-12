import { getT, Locale } from "@/lib/i18n/translations";

export default function CopytradingSection({ locale }: { locale?: Locale }) {
  const t = getT(locale ?? "en");
  const headingBefore = locale === "id" ? "Belajar dari para " : "Learn from the ";
  const headingHighlight = locale === "id" ? "ahli" : "experts";

  return (
    <section id="copytrading" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop */}
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
            {headingBefore}<span style={{ color: "#0C8DF8" }}>{headingHighlight}</span>
          </p>

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
            {t.copytrading.text}
          </p>

          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.copytrading.cta}
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden" style={{ flexDirection: "column" }}>
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
            {headingBefore}<span style={{ color: "#0C8DF8" }}>{headingHighlight}</span>
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
            {t.copytrading.text}
          </p>
          <div style={{ width: "100%" }}>
            <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%" }}>
              {t.copytrading.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
