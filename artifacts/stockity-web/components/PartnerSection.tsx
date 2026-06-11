export default function PartnerSection() {
  return (
    <section id="partner" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop: partner__wrapper — background image, min-height: 57.4653vw */}
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
        {/* partner__content: padding-top: 11.5741vw, centered */}
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
          {/* Title line 1: partner__title = 3.7037vw/4.16667vw */}
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "3.7037vw",
              lineHeight: "4.16667vw",
              color: "#fff",
            }}
          >
            Stockity is a{" "}
            <span style={{ color: "#0C8DF8" }}>licensed and regulated</span>
          </p>

          {/* Title line 2 */}
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "3.7037vw",
              lineHeight: "4.16667vw",
              color: "#fff",
            }}
          >
            online platform
          </p>

          {/* Button — min-height: partner__btn has min-height but we can use btn-primary */}
          <div style={{ marginTop: "2.77778vw" }}>
            <a href="#" className="btn-primary">
              Learn more
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
            Stockity is a{" "}
            <span style={{ color: "#0C8DF8" }}>licensed and regulated</span>{" "}
            online platform
          </p>
          <div style={{ marginTop: "11.1111vw", width: "100%" }}>
            <a href="#" className="btn-primary" style={{ width: "100%" }}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
