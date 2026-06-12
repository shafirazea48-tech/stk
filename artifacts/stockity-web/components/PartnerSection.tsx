import { getT, Locale } from "@/lib/i18n/translations";

export default function PartnerSection({ locale }: { locale?: Locale }) {
  const t = getT(locale ?? "en");
  const line1Before = locale === "id" ? "Stockity adalah platform online " : "Stockity is a ";
  const line1Highlight = locale === "id" ? "berlisensi dan teregulasi" : "licensed and regulated";
  const line2 = locale === "id" ? "" : "online platform";

  return (
    <section id="partner" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop */}
      <div
        className="hidden md:flex"
        style={{
          backgroundImage: "url('/images/stockity/src/core/images/partner/section_partner_desktop-2b5dcbed303e6b5a.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          minHeight: "57.4653vw",
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
            }}
          >
            {line1Before}
            <span style={{ color: "#0C8DF8" }}>{line1Highlight}</span>
          </p>

          {line2 && (
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 900,
                fontSize: "3.7037vw",
                lineHeight: "4.16667vw",
                color: "#fff",
              }}
            >
              {line2}
            </p>
          )}

          <div style={{ marginTop: "2.77778vw" }}>
            <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t.partner.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex md:hidden"
        style={{
          backgroundImage: "url('/images/stockity/src/core/images/partner/section_partner_mobile-96d83f3637f37f37.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          minHeight: "157.5vw",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingTop: "20vw",
            padding: "20vw 4.44444vw",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "8.33333vw",
              lineHeight: "10.5556vw",
              color: "#f4f4f6",
            }}
          >
            {line1Before}
            <span style={{ color: "#0C8DF8" }}>{line1Highlight}</span>
            {line2 ? <>{" "}{line2}</> : null}
          </p>
          <div style={{ marginTop: "11.1111vw", width: "100%" }}>
            <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%" }}>
              {t.partner.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
