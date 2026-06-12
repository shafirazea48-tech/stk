import { getT, Locale } from "@/lib/i18n/translations";

export default function UsableSection({ locale }: { locale?: Locale }) {
  const t = getT(locale ?? "en");
  const [line1, line2] = t.usable.heading.includes(". ")
    ? t.usable.heading.split(". ").map((s, i, a) => (i < a.length - 1 ? s + "." : s))
    : [t.usable.heading, ""];

  return (
    <section
      id="usable"
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
          padding: "9.25926vw 1.85185vw",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
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
          {line1}
        </p>

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
          {line2}
        </p>

        <div style={{ marginTop: "4.62963vw" }}>
          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.usable.cta}
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
          padding: "13.3333vw 4.44444vw",
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
          {line1}
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
          {line2}
        </p>
        <div style={{ marginTop: "11.1111vw", width: "100%" }}>
          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%" }}>
            {t.usable.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
