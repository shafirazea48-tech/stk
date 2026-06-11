import Image from "next/image";

export default function TradersNeedsSection() {
  return (
    <section id="traders-needs" style={{ background: "#000", overflow: "hidden" }}>
      {/* Desktop content */}
      <div
        className="hidden md:flex"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "9.83796vw 1.85185vw 2.77778vw",
          boxSizing: "border-box",
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
          A platform designed with{" "}
          <span style={{ color: "#0C8DF8" }}>users in mind</span>
        </p>
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
            fontSize: "1.85185vw",
            lineHeight: "2.31481vw",
            color: "#fff",
            marginTop: "0.925926vw",
            marginBottom: "2.77778vw",
          }}
        >
          Explore the market at your own pace
        </p>
        <a href="#" className="btn-primary">
          Start now
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.38889vw",
            marginTop: "2.77778vw",
          }}
        >
          <Image
            src="/images/stockity/src/core/images/traders-needs/reviews-24bf3b1ea70a9ef0.svg"
            alt="Reviews"
            width={156}
            height={24}
            unoptimized
          />
          <Image
            src="/images/stockity/src/core/images/traders-needs/stars.svg"
            alt="Rating stars"
            width={193}
            height={34}
            unoptimized
          />
          <div>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.85185vw",
                lineHeight: "2.31481vw",
                color: "#f4f4f6",
              }}
            >
              4.8
            </p>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
                fontSize: "1.85185vw",
                lineHeight: "2.31481vw",
                color: "#f4f4f6",
              }}
            >
              Rating
            </p>
          </div>
        </div>
      </div>

      {/* Mobile content */}
      <div
        className="flex md:hidden"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "13.3333vw 4.44444vw 0",
          boxSizing: "border-box",
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
            maxWidth: "90.2778vw",
          }}
        >
          A platform designed with{" "}
          <span style={{ color: "#0C8DF8" }}>users in mind</span>
        </p>
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "5vw",
            lineHeight: "6.66667vw",
            color: "#f4f4f6",
            marginTop: "2.22222vw",
            marginBottom: "11.1111vw",
          }}
        >
          Explore the market at your own pace
        </p>
        <div style={{ width: "100%", marginBottom: "8.88889vw" }}>
          <a href="#" className="btn-primary" style={{ width: "100%" }}>
            Start now
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.22222vw",
            marginBottom: "8.88889vw",
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "6.11111vw",
              lineHeight: "8.33333vw",
              color: "#f4f4f6",
            }}
          >
            4.8
          </p>
          <Image
            src="/images/stockity/src/core/images/traders-needs/stars.svg"
            alt="stars"
            width={104}
            height={16}
            style={{ width: "auto", height: "auto" }}
            unoptimized
          />
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "5vw",
              lineHeight: "6.66667vw",
              color: "#f4f4f6",
            }}
          >
            Rating
          </p>
        </div>
      </div>

      {/* Platform screenshot — visible on ALL screen sizes */}
      <div
        style={{
          width: "100%",
          backgroundImage:
            "url('/images/stockity/src/core/images/traders-needs/section_platform_desktop-19f5dc185c65b9ec.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="traders-needs-image"
      />

      <style>{`
        .traders-needs-image {
          min-height: 64.4445vw;
        }
        @media (min-width: 768px) {
          .traders-needs-image {
            min-height: 44.5023vw;
          }
        }
      `}</style>
    </section>
  );
}
