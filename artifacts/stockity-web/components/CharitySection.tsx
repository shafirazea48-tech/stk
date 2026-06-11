import Image from "next/image";

export default function CharitySection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#000" }}>
      <div
        style={{
          position: "relative",
          minHeight: "clamp(380px, 50vw, 640px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/stockity/src/home/images/charity/charity-d-63d410ad0ec0d753.webp"
            alt="Stockity Charity"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.2) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1440,
            margin: "0 auto",
            padding: "80px 26px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(83,187,72,0.12)",
                border: "1px solid rgba(83,187,72,0.25)",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 12.5S1.5 9 1.5 4.5A3 3 0 0 1 7 2.8 3 3 0 0 1 12.5 4.5C12.5 9 7 12.5 7 12.5z" fill="#53BB48"/>
              </svg>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#53BB48" }}>Social Impact</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px,3.5vw,52px)",
                fontWeight: 900,
                color: "#F4F4F6",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Stockity cares and stays{" "}
              <span style={{ color: "#0C8DF8" }}>active</span>
            </h2>
            <p
              style={{
                color: "#82889B",
                fontSize: "clamp(14px,1.2vw,18px)",
                lineHeight: 1.65,
                marginBottom: 36,
                maxWidth: 460,
              }}
            >
              We support environmental protection, animal welfare, sports, and many
              other initiatives. Read more to see how we give back to communities.
            </p>
            <a href="#" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
