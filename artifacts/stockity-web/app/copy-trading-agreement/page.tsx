import Header from "@/components/Header";

const linkStyle = { color: "#0c8df8", textDecoration: "none" };
const sectionStyle: React.CSSProperties = {
  fontSize: "clamp(15px, 1.15vw, 18px)",
  fontWeight: 800,
  color: "#f4f4f6",
  margin: "2.2em 0 0.7em",
  letterSpacing: "0.01em",
};
const pStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#c0c8d8",
  lineHeight: 1.8,
  margin: "0 0 0.9em",
};
const liStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#c0c8d8",
  lineHeight: 1.8,
  margin: "0 0 0.4em",
};

export default function CopyTradingAgreementPage() {
  return (
    <>
      <Header />
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
          <h1
            style={{
              fontSize: "clamp(24px, 2.5vw, 40px)",
              fontWeight: 900,
              color: "#f4f4f6",
              textAlign: "center",
              margin: "0 0 0.5em",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Copy Trading Agreement
          </h1>
          <p style={{ ...pStyle, textAlign: "center", marginBottom: "2.5em" }}>
            This Copy Trading Agreement regulates providing Copy Trading services by the Company to their Clients.
          </p>

          {/* General Provisions */}
          <h2 style={sectionStyle}>General Provisions</h2>
          <p style={pStyle}>
            <strong style={{ color: "#f4f4f6" }}>1.1.</strong> The Client accepts this Copy Trading Agreement by starting to use Copy Trading services. Acceptance of the Agreement means full and unconditional agreement of the Client to its terms and conditions.
          </p>
          <p style={pStyle}>
            <strong style={{ color: "#f4f4f6" }}>1.2.</strong> This Copy Trading Agreement serves as a supplement to{" "}
            <a href="/agreement" style={linkStyle}>the Stockity Client Agreement</a> and is its integral part. Any and all terms and conditions included in this Copy Trading Agreement are to be read in conjunction with{" "}
            <a href="/agreement" style={linkStyle}>the Stockity Client Agreement</a>.
            {" "}In the event of any discrepancy between the Copy Trading Agreement and the Stockity Client Agreement, the terms of this Copy Trading Agreement shall prevail.
          </p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>1.3.</strong> Copy Trading is available only on the Website and only on Real Accounts.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>1.4.</strong> Copy Trading is available only for Fixed Time Trades (FTT).</p>

          {/* Terminology */}
          <h2 style={sectionStyle}>Terminology</h2>
          <p style={pStyle}>
            Unless otherwise defined, capitalised words in this Copy Trading Agreement will have the same meaning given to those words in this section 2 and in{" "}
            <a href="/agreement" style={linkStyle}>the Stockity Client Agreement</a>.
          </p>
          {[
            ["2.1.", "A Copied Trader is a Client who was invited by the Company to become a copied trader and permitted to copy their Trades."],
            ["2.2.", "A Copy Trading Card (a Card) is a section of the Client's Personal Account where Copy Trading settings and statistics are displayed."],
            ["2.3.", "A Copy Trade is a Trade opened on the Trader's Account as a result of copying a Copied Trader's Trade."],
            ["2.4.", "A Trader is a Client who started to copy a Copied Trader's Trades."],
            ["2.5.", "Copying a Trade (Copying) means replicating a Trade on the Trader's Account with the same parameters as the Copied Trader's Trade."],
          ].map(([num, text]) => (
            <p key={num} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}

          {/* Choosing a Copied Trader */}
          <h2 style={sectionStyle}>Choosing a Copied Trader</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>3.1.</strong> To choose a Copied Trader for Copying, the Trader can use the Copied Traders leaderboard on the Website.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>3.2.</strong> The Copied Traders leaderboard contains the following information about Copied Traders:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Nickname (if any) or trader ID",
              "Registration country flag",
              "Status on the Trading Platform",
              "Profitability",
              "Commission rate",
              "Number of the Copied Trader's Trades copied by Traders",
              "Profit for the last seven days",
              "Loss for the last seven days",
              "Profitable Trades history for the last seven days",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>3.3.</strong> A Client chooses to copy or not to copy the Copied Trader&apos;s Trades voluntarily and at their sole discretion. All such decisions are a personal matter of each Client and are made without any recommendation or suggestions from the Company.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>3.4.</strong> The Trader can copy Trades of an unlimited number of Copied Traders.</p>

          {/* Start of Copying */}
          <h2 style={sectionStyle}>Start of Copying</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>4.1.</strong> To start Copying a Copied Trader&apos;s Trades, the Client must press the &apos;Start copying&apos; button in the Copied Trader&apos;s Card.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>4.2.</strong> When starting to copy the Copied Trader&apos;s Trades, the Trader has to indicate:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "The maximum amount of the Trader investment in one Copy Trade in this Copying",
              "The maximum amount of Copy Trades in this Copying",
              "Loss limit in this Copying",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>4.3.</strong> The maximum number of Copy Trades in one Copying cannot exceed fifty (50) Trades.</p>

          {/* Opening and Closing */}
          <h2 style={sectionStyle}>Opening and Closing of a Copy Trade</h2>
          {[
            ["5.1.", "Copy Trades are open and closed automatically without any prior consultation, consent or approval."],
            ["5.2.", "Only the Copied Trader's Trades which are opened after a Trader has started to copy the Copied Trader's Trades are copied."],
            ["5.3.", "Except as otherwise provided herein, the Copy Trade has the same parameters as the Copied Trader's Trade."],
            ["5.4.", "If the Copied Trader's investment in the Trade is greater than the maximum amount of the Trader investment in one Copy Trade specified by the Trader, and/or greater than the Trader Account Balance, and/or greater than the difference between loss limit specified by the Trader and the Trader loss in this Copying, the amount of Trader investment in the Copy Trade is equal to the maximum amount of Trader investment in one Copy Trade specified by the Trader, or the Trader Account Balance, or the difference between loss limit specified by the Trader and the Trader loss in this Copying, whichever is less."],
            ["5.5.", "If the Copied Trader opens a Trade with an asset that the Trader does not have access to, such a Trade is not copied on the Trader's Account."],
          ].map(([num, text]) => (
            <p key={num} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}

          {/* End of Copying */}
          <h2 style={sectionStyle}>End of Copying</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>6.1.</strong> The Trader can stop Copying the Copied Trader&apos;s Trades at any time through the &apos;Stop copying&apos; button in the Copied Trader&apos;s Card. The Trader can start Copying the same Copied Trader&apos;s Trades again after that at any time, if they are still on the Copied Traders leaderboard.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>6.2.</strong> Copying of the Copied Trader&apos;s Trades stops automatically as follows:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "If the maximum amount of Copy Trades in this Copying indicated by the Trader is reached",
              "If the loss limit in this Copying indicated by the Trader is reached",
              "If the Copied Trader has restricted Copying their Trades",
              "If the Copied Trader has been removed from the Copied Traders leaderboard",
              "If the Trader Account Balance is less than the minimum amount of Client investment in a Trade — in this case Copying Trades of all Copied Traders stops",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>6.3.</strong> When Copying stops, all Open Copy Trades close upon reaching the closing time. New Copied Trader&apos;s Trades are not copied on the Trader Account.</p>

          {/* Commissions */}
          <h2 style={sectionStyle}>Commissions</h2>
          {[
            ["7.1.", "The Trader pays commission for each profitable Copy Trade."],
            ["7.2.", "The commission is calculated as a per cent of the Trader's profit in the Copy Trade."],
            ["7.3.", "The commission rate is indicated in the Copied Trader's Copy Trading Card and cannot be changed before the end of Copying. The commission rate cannot exceed 30% of the Trader's profit in the Copy Trade."],
            ["7.4.", "The commission is deducted from the Trader's profit automatically."],
          ].map(([num, text]) => (
            <p key={num} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}

          {/* Rights and Obligations */}
          <h2 style={sectionStyle}>Rights and Obligations of the Company and the Trader</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>8.1.</strong> The Trader must ensure that they comply with all applicable laws and regulations regarding Copy Trading.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>8.2.</strong> The Trader must evaluate all the financial risks before using Copy Trading.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>8.3.</strong> The Company reserves the right:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "To set and/or change limits of number of Copy Trades in one Copying, number of Copied Traders whose Trades Trader can copy and other types of limits",
              "At its sole discretion, to stop any Copying",
              "At its sole discretion, to modify the functionality, suspend or terminate Copy Trading service providing",
              "At its sole discretion, to suspend or terminate this Copy Trading Agreement",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>

          {/* Risk Disclosures */}
          <h2 style={sectionStyle}>Risk Disclosures</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>9.1.</strong> The Trader fully acknowledges the following:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Copy Trading involves increased risk. By using Copy Trading, the Trader may suffer serious financial loss, or completely lose the funds in their Account",
              "The Copied Traders are not representatives and/or partners of the Company",
              "A current Copied Trader gain rate does not guarantee their future successful results",
              "The provision of Copy Trading service does not constitute investment advice",
              "The Copied Trader may restrict Copying their Trades at any time",
              "The Copied Trader can be removed from the Copied Traders leaderboard at any time",
              "If the Trader does not have access to all assets available to the Copied Trader whose Trades they are copying, the Trader may achieve a materially different result than the Copied Trader",
              "Copy Trading may be restricted or unavailable in certain jurisdictions, subject to the Company's sole discretion",
              "It is solely the Trader's responsibility to ascertain and comply with their local laws and requirements regarding Copy Trading",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>9.2.</strong> The Trader uses Copy Trading at their own risk. Starting to use Copy Trading, the Trader accepts responsibility for possible financial losses resulting from the following risks:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Possible losses, lost profits, etc., which may arise when copying the Trades of one or more Copied Traders",
              "The risk associated with the inexperience of the Copy Trader who does not have the necessary skills, experience, and/or education to generate the expected or other profits",
              "The risk of the Copying Trader being unable to access the Trading Platform for objective or subjective reasons",
              "The risk of possible claims by tax and financial authorities in the jurisdiction where the Trader is located, registered, or resides",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>

          {/* Guarantees and Liability */}
          <h2 style={sectionStyle}>Guarantees and Liability</h2>
          {[
            ["10.1.", "The Company does not represent or guarantee the performance of any Copied Trader and/or the recurrence of past results that have been made by a Copied Trader, whose Trades the Trader is copying, and the profits or losses the Trader makes or incurs may not match those of a Copied Trader, whose Trades they are copying."],
            ["10.2.", "The Company shall not be liable for any direct, indirect, or consequential losses, or any other damages that the Trader may incur as a result of using Copy Trading."],
            ["10.3.", "The use of Copy Trading is the Client's choice. It is their sole responsibility to decide whether to copy Trades and copy Trades of specific Copied Traders. In making such decisions, the Client should carefully consider their overall financial situation."],
            ["10.4.", "The Company provides instructions on Copy Trading for informational purposes only. If the Trader makes a decision based on information provided on the Website or obtained through the Copy Trading services, they do it at their own risk."],
            ["10.5.", "In the event of a breach of this Copy Trading Agreement by the Trader and/or if the Company suspects that the Trader is trying to exploit the functional weaknesses, and/or doing fraudulent or malicious activities, the Company shall reserve the right to ban the Trader and terminate this Agreement immediately, as well as to stop their using of Copy Trading."],
          ].map(([num, text]) => (
            <p key={num} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}

          {/* Amendment and Termination */}
          <h2 style={sectionStyle}>Amendment and Termination</h2>
          {[
            ["11.1.", "The obligations and rights of the Trader and the Company established by this Copy Trading Agreement are considered a long-term act and are valid until the termination of this Copy Trading Agreement or the Stockity Client Agreement."],
            ["11.2.", "The Trader has the right to terminate this Copy Trading Agreement at any time, regardless of their motives. They can do that through the 'Stop copying' button in the Copy Trading Card for all Copied Traders whose Trades they have started copying. If after that, the Trader decides to resume copying Trades, this Agreement resumes its effect according to the version valid at the time of the resuming."],
            ["11.3.", "The Company has the right to terminate this Agreement unilaterally at any time without providing reasons."],
            ["11.4.", "Upon termination of this Copy Trading Agreement, the copying of Trades on the Trader's Account stops."],
            ["11.5.", "The Company has the discretion at any time to make amendments to this Copy Trading Agreement. If amendments are made to the Agreement, they will come into force from the moment the amended text of the Agreement is posted on the Website, unless a different term is specified for the amendments to come into force."],
            ["11.6.", "If the Trader does not agree to the amended version of the Agreement, they must terminate it through the 'Stop copying' button in the Copy Trading Card for all Copied Traders whose Trades they have started copying."],
          ].map(([num, text]) => (
            <p key={num} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}

          <div
            style={{
              marginTop: "3em",
              paddingTop: "1.5em",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p style={{ ...pStyle, fontSize: "13px", color: "#6b7280" }}>
              Effective November 6, 2025
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
