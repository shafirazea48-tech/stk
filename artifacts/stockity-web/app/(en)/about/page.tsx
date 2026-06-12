import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Stockity — a licensed and regulated trading platform serving 3.5 million investors in 170+ countries with transparent, fair, and secure trading.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Stockity",
    description:
      "Learn about Stockity — a licensed and regulated trading platform serving 3.5 million investors in 170+ countries.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header locale="en" />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#0e1120",
          paddingTop: "calc(5.55556vw + 60px)",
          paddingBottom: "6.94444vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 3.70370vw",
            boxSizing: "border-box",
          }}
        >
          {/* About us section */}
          <section style={{ marginBottom: "5.55556vw" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 3.47222vw, 56px)",
                fontWeight: 800,
                color: "#f4f4f6",
                textAlign: "center",
                margin: "0 0 2.77778vw",
                letterSpacing: "-0.02em",
              }}
            >
              About us
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.38889vw",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#c0c8d8",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Welcome to Stockity, a cutting-edge trading platform designed to empower traders
                with the best tools and services in the financial market. At Stockity, we strive to
                provide an unparalleled trading experience, ensuring that our clients have access to
                high-value comprehensive tutorials, top-tier analytical tools, and round-the-clock
                support. We understand that the success of a trader hinges on the quality of their
                trading platform, which is why we place a strong emphasis on delivering high-quality
                services and listening to our traders&apos; feedback.
              </p>

              <p
                style={{
                  fontSize: "14px",
                  color: "#c0c8d8",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Stockity is dedicated to serving traders of all levels, from beginners to seasoned
                professionals. We are committed to creating a safe and regulated trading environment
                where our clients can thrive. By fostering open communication, we aim to understand
                and meet the unique needs of each trader, providing them with the tools they need to
                succeed in the dynamic world of financial markets.
              </p>

              <p
                style={{
                  fontSize: "14px",
                  color: "#c0c8d8",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Our platform offers competitive trading conditions, including access to a wide array
                of financial assets and advantageous trading terms. We pride ourselves on being a
                trusted partner for traders around the globe, ensuring that their experience with
                Stockity is both profitable and enjoyable.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.07)",
              margin: "0 0 5.55556vw",
            }}
          />

          {/* Regulation section */}
          <section>
            <h2
              style={{
                fontSize: "clamp(28px, 2.77778vw, 48px)",
                fontWeight: 800,
                color: "#f4f4f6",
                textAlign: "center",
                margin: "0 0 2.77778vw",
                letterSpacing: "-0.02em",
              }}
            >
              Regulation
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "#c0c8d8",
                lineHeight: 1.75,
                margin: "0 0 2.77778vw",
              }}
            >
              To reinforce our commitment to customer security and market integrity, Stockity
              complies with all relevant legislation and industry standards. Additionally, we operate
              in partnership with Trusted by Traders (TBT), an independent and impartial regulatory
              body dedicated to protecting the rights of traders. This partnership ensures that our
              clients benefit from enhanced protection and minimised risks, knowing that our platform
              meets the highest standards of trading practices. For more information about Trusted by
              Traders, please visit{" "}
              <a
                href="https://trustedbytraders.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0c8df8", textDecoration: "none" }}
              >
                Trusted by Traders
              </a>
              .
            </p>

            {/* TBT Logo */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2.77778vw 0",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: "24px 40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {/* TBT text logo */}
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                  <text x="50%" y="38" textAnchor="middle" fontSize="36" fontWeight="900"
                    fill="url(#tbtGrad)" fontFamily="'Nunito Sans', sans-serif">TBT</text>
                  <defs>
                    <linearGradient id="tbtGrad" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0990ff" />
                      <stop offset="1" stopColor="#00eaff" />
                    </linearGradient>
                  </defs>
                </svg>
                <span style={{ fontSize: 11, color: "#82889b", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Trusted by Traders
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#c0c8d8",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              By choosing Stockity, you are partnering with a platform that values transparency,
              fairness, and the highest standards of trading practices. For any questions, please
              contact us at{" "}
              <a
                href="mailto:support@stockity.com"
                style={{ color: "#0c8df8", textDecoration: "none" }}
              >
                support@stockity.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
