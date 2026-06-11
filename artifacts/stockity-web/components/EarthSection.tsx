export default function EarthSection() {
  return (
    <section style={{ width: "100%", background: "#000", overflow: "hidden" }}>
      {/* Mobile */}
      <div
        className="flex md:hidden"
        style={{
          backgroundImage: "url('/images/stockity/src/core/images/earth/section_earth_mobile-8ca90bfa9257145f.webp')",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "90vw",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#ebebeb",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "16.6667vw",
              lineHeight: "18.8889vw",
              margin: 0,
            }}
          >
            3,500,000
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#ebebeb",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
              fontSize: "5vw",
              lineHeight: "6.66667vw",
              marginTop: "26.6667vw",
              padding: "0 4.44444vw",
              boxSizing: "border-box",
            }}
          >
            users from 130+ countries trust us
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div
        className="hidden md:flex"
        style={{
          backgroundImage: "url('/images/stockity/src/core/images/earth/section_earth_desktop-01b92b0bf559caaf.webp')",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "53.7616vw",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "7.40741vw",
              lineHeight: "8.33333vw",
              margin: 0,
            }}
          >
            3,500,000
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
              fontSize: "1.85185vw",
              lineHeight: "2.31481vw",
              marginTop: "17.3611vw",
            }}
          >
            users from 130+ countries trust us
          </p>
        </div>
      </div>
    </section>
  );
}
