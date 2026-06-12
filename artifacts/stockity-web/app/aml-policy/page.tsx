import Header from "@/components/Header";

const linkStyle = { color: "#0c8df8", textDecoration: "none" };
const h2Style: React.CSSProperties = {
  fontSize: "clamp(15px, 1.15vw, 19px)",
  fontWeight: 800,
  color: "#f4f4f6",
  margin: "2.2em 0 0.7em",
  letterSpacing: "0.02em",
  textTransform: "uppercase" as const,
};
const h3Style: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#e0e6f0",
  margin: "1.5em 0 0.5em",
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
  margin: "0 0 0.35em",
};
const calloutStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#e0e6f0",
  lineHeight: 1.8,
  background: "rgba(12,141,248,0.07)",
  border: "1px solid rgba(12,141,248,0.2)",
  borderRadius: 8,
  padding: "14px 18px",
  margin: "1em 0 1.2em",
  fontWeight: 600,
};

export default function AMLPolicyPage() {
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
              margin: "0 0 0.3em",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            AML &amp; KYC Policy
          </h1>
          <p style={{ ...pStyle, textAlign: "center", marginBottom: "0.3em" }}>
            <strong style={{ color: "#f4f4f6" }}>
              Stockity Anti-Money Laundering Policy
            </strong>
          </p>
          <p style={{ ...pStyle, textAlign: "center", marginBottom: "2.5em" }}>
            (hereinafter referred to as the &quot;Policy&quot;)
          </p>

          {/* Section 1 */}
          <h2 style={h2Style}>Section 1: Interpretative Provisions</h2>
          <p style={pStyle}>For the purposes of this Policy, the following definitions shall apply consistently, whether referenced in singular or plural form:</p>
          {[
            ["1.1", "Account means any account, facility, or service maintained by a Client with the Company through the Company's Platform."],
            ["1.2", "Company / We / Us / Our means Verte Securities Limited, a company incorporated under the laws of the Republic of Vanuatu, bearing registration number: 700726, with its registered office located at: International Business Centre, Suite 8, Pot 820/104, Route Elluk, Port Vila, Vanuatu."],
            ["1.3", "Client means any natural person or legal entity that establishes, maintains, or seeks to establish a business relationship with the Company."],
            ["1.4", "Funds mean money and its equivalents applicable to the authorized activities on the Platform."],
            ["1.5", "Platform refers to the Company's proprietary trading and Client service systems, including electronic platforms, applications, and related technological infrastructure."],
            ["1.6", "Reporting Entity means Verte Securities Limited in its capacity as an entity subject to the obligations under the Anti-Money Laundering and Counter-Terrorism Financing Act No. 13 of 2014 and its amendments."],
            ["1.7", "Suspicious Transactions means any transaction on or off the Platform that the Company reasonably suspects may breach laws or regulations, be linked to terrorist financing or activities, display complexity, unusual structure, or atypical patterns, lack an obvious lawful or economic rationale, or fall outside normal transactional behavior."],
            ["1.8", "Suspicious Activities means any transaction or series of transactions where there is reason to believe the individual is engaged in money laundering or financing of terrorist activities."],
            ["1.9", "Vanuatu Financial Intelligence Unit (VFIU) means the financial intelligence unit established within the Office of the Attorney General pursuant to the Anti-Money Laundering and Counter-Terrorism Financing (Amendment) Act No. 16 of 2024."],
          ].map(([num, text]) => (
            <p key={num} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}

          {/* Section 2 */}
          <h2 style={h2Style}>Section 2: Risk-Based Approach Framework</h2>
          <h3 style={h3Style}>2.1 Risk Assessment Methodology</h3>
          <p style={pStyle}>The Company implements a comprehensive risk-based approach to AML/CFT compliance, consistent with the requirements of Vanuatu legislation and international best practices including FATF Recommendations and FIU Guidance Notes (VFIU). This approach involves the systematic identification, assessment, and mitigation of money laundering and terrorist financing risks associated with:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Client categories and geographical locations",
              "Products and services offered",
              "Transaction patterns and delivery channels",
              "Jurisdictional risk factors",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <h3 style={h3Style}>2.2 Enhanced Due Diligence Triggers</h3>
          <p style={pStyle}>Enhanced due diligence measures are implemented when Clients or transactions present heightened risk factors, including but not limited to:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Politically Exposed Persons (PEPs) and their family members or close associates",
              "Clients from high-risk and sanctioned jurisdictions identified by international bodies",
              "Complex corporate structures with unclear beneficial ownership",
              "Unusual transaction patterns inconsistent with Client profiles",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>

          {/* Section 3 */}
          <h2 style={h2Style}>Section 3: Client Identification and Verification</h2>
          <h3 style={h3Style}>Identity Verification Documents:</h3>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "A clear photograph of the Client's passport data page or national identity card",
              "Images of the Client's bank cards or screenshots of their electronic wallets",
              "A recent selfie of the Client holding the above document(s) in hand",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <h3 style={h3Style}>Additional Documentation (KYC/AML Compliance):</h3>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "A utility bill issued within the last 3 (three) months",
              "A bank confirmation letter dated not more than 3 (three) months ago",
              "A bank statement (letter form) no older than 3 (three) months",
              "Evidence of the source of funds or wealth (e.g., payslips, property sale contracts, loan agreements, inheritance documents)",
              "A secondary ID (for example, a valid driving license)",
              "Notarized copies of any of the above",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          {[
            ["3.1", <>The Client sends all requested documents as JPG, JPEG or PDF attachments via email to our Compliance Department at <a href="mailto:verification@stockity.com" style={linkStyle}>verification@stockity.com</a>. We cannot accept RAR/ZIP archives or DOC/DOCX files. All materials must be delivered within fourteen (14) calendar days of our request. Upon receipt of a complete document set, verification is normally completed within twenty (20) minutes. In certain circumstances, this timeframe may be extended up to seven (7) calendar days.</>],
            ["3.2", "If further confirmation is needed, We will arrange a live video verification via Zoom or a similar platform."],
            ["3.3", <>To ensure uninterrupted and compliant KYC/AML procedures, We may engage vetted third-party verification partners who adhere to applicable legal and regulatory standards. For details, refer to Our <a href="/privacy" style={linkStyle}>Privacy Policy</a>.</>],
          ].map(([num, text]) => (
            <p key={String(num)} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}

          <h3 style={h3Style}>3.4 Detailed Document Requirements</h3>
          <p style={pStyle}><em style={{ color: "#e0e6f0" }}>General ID Documents:</em> All sides of the passport or ID must be fully visible in the image, with no cropping, glare, or obstructions. The document&apos;s text must be sharp and legible. Images will be checked for signs of editing or manipulation.</p>
          <p style={pStyle}><em style={{ color: "#e0e6f0" }}>Validity Checks:</em> If authenticity is in question, we may use AML database services (including global watchlists: OFAC, UN, EU, and law enforcement or regulatory registries) to verify document legitimacy.</p>
          <p style={pStyle}><em style={{ color: "#e0e6f0" }}>Bank Card Criteria:</em> Photograph the card so all corners are visible, without glare. The following must be legible: cardholder&apos;s full name; first six and last four digits of the card number; expiry date.</p>
          <p style={pStyle}><em style={{ color: "#e0e6f0" }}>Electronic Wallets:</em> Provide 2 screenshots showing: (a) a deposit transaction to Verte Securities Limited, with date, time, amount and wallet ID; (b) the wallet&apos;s personal information page displaying first and last name.</p>
          <p style={pStyle}><em style={{ color: "#e0e6f0" }}>Selfies with Documents:</em> The Client&apos;s face and the entire ID must be clearly visible and match the document photo. The document held in the selfie must be identical to the one in the standalone scan.</p>
          <p style={pStyle}><em style={{ color: "#e0e6f0" }}>Translations:</em> Non-English documents require a notarized English translation and the original&apos;s clear image.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>3.5</strong> The measures indicated herein are designed not only to comply with Our KYC/AML Policy but also to safeguard the security of Client assets.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>3.6</strong> Deposits of Funds: the name of the depositor (Client) of Funds should fully comply with the name specified in the registered Account. Payments from third parties are prohibited.</p>
          <div style={calloutStyle}>
            WE HEREBY DECLARE THAT, IN ORDER TO COMPLY WITH THIS AML POLICY, TRANSFERS OF FUNDS BY THE CLIENTS ARE PERMITTED SOLELY FOR THE PURPOSE OF CARRYING OUT TRADING OPERATIONS ON THE PLATFORM. IF THE COMPANY REASONABLY BELIEVES THAT TRANSFERS OF FUNDS ARE BEING USED BY THE CLIENT IN VIOLATION OF LAWS AND/OR OUR AML POLICY, THE COMPANY RESERVES THE RIGHT TO BLOCK THE CLIENT&apos;S ACCOUNT TO PREVENT SUCH A VIOLATION.
          </div>

          {/* Section 4 */}
          <h2 style={h2Style}>Section 4: Measures Against Suspicious Transactions and Activities</h2>
          {[
            ["4.1", "If any indicators of fraud emerge during the execution of financial transactions—after Funds have been credited to the Client's Account—We may cancel those transactions and the Client's Account."],
            ["4.2", "Should it become evident that the Client intends to use their Account solely to exchange funds between payment systems, We reserve the right to refuse any withdrawal requests."],
            ["4.3", "If We suspect the Client of fraudulent or deceitful conduct, we may block the Client's Account immediately, without prior notice or the opportunity to withdraw Funds."],
          ].map(([num, text]) => (
            <p key={num} style={pStyle}><strong style={{ color: "#f4f4f6" }}>{num}</strong> {text}</p>
          ))}
          <div style={calloutStyle}>
            ALL SUCH RISK-MITIGATION ACTIONS WILL BE REPORTED, AS PROMPTLY AS PRACTICABLE, TO THE APPROPRIATE GOVERNMENTAL AUTHORITY WHENEVER OUR AML/CFT COMPLIANCE TEAM KNOWS, SUSPECTS, OR HAS REASONABLE GROUNDS TO BELIEVE THAT THE CLIENT IS INVOLVED IN MONEY LAUNDERING OR TERRORIST FINANCING.
          </div>

          {/* Section 5 */}
          <h2 style={h2Style}>Section 5: Document Submission and Processing</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>5.1</strong> Clients must provide verification documents in digital format through secure channels. The Company accepts documents in the following formats: JPEG, PNG, PDF, and TIFF. All non-English documents must be accompanied by certified translations prepared by qualified translators.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>5.2</strong> The Company maintains strict security protocols for document handling: encrypted transmission channels for all document submissions, secure storage systems with access controls and audit trails, and regular security assessments of document management systems.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>5.3</strong> The Company employs multiple verification methodologies: Enhanced Digital Verification (video verification sessions, real-time document authentication, biometric verification) and Manual Review Processes (expert review by qualified compliance officers, cross-referencing with multiple data sources).</p>

          {/* Section 6 */}
          <h2 style={h2Style}>Section 6: Ongoing Due Diligence Obligations</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>6.1</strong> The Company maintains continuous monitoring of all Client relationships and transactions, ensuring that: (i) transactions remain consistent with the Company&apos;s knowledge of the Client; (ii) business activities align with stated purposes and risk profiles; (iii) unusual patterns or suspicious activities are promptly identified; (iv) Client information remains current and accurate.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>6.2</strong> Reporting mechanisms include:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Suspicious Transaction Reports (STRs): all transactions suspected of involving proceeds of crime or terrorist financing must be reported to the VFIU within two working days of identification.",
              "Large Transaction Reports: transactions exceeding prescribed thresholds are subject to enhanced monitoring and potential reporting requirements as established by VFIU guidelines.",
              "Cross-Border Transaction Monitoring: particular attention is paid to cross-border transactions, especially those involving high-risk jurisdictions.",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>

          {/* Section 7 */}
          <h2 style={h2Style}>Section 7: Sanctions Screening and Compliance</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>7.1</strong> We maintain comprehensive sanctions screening procedures utilizing:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "United Nations Security Council sanctions list",
              "OFAC sanctions list",
              "EU sanctions list and maps",
              "Vanuatu domestic sanctions measures",
              "International sanctions regimes including those maintained by major financial centers",
              "Regional sanctions frameworks applicable to Vanuatu's jurisdiction",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>7.2</strong> Our advanced screening technology incorporates: real-time screening against consolidated sanctions databases; name-matching algorithms with fuzzy logic capabilities; periodic re-screening of existing Client bases; and transaction screening for sanctions-related indicators.</p>

          {/* Section 8 */}
          <h2 style={h2Style}>Section 8: Record Keeping and Data Retention</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>8.1</strong> In compliance with Vanuatu&apos;s record-keeping obligations, We maintain all Client due diligence records, transaction records, and compliance documentation for a minimum period of six years following the cessation of the business relationship or completion of the transaction.</p>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>8.2</strong> We implement robust data protection measures ensuring: (1) confidentiality of Client information in accordance with privacy laws; (2) secure data storage with appropriate access controls; (3) regular backup procedures and disaster recovery protocols; (4) compliance with applicable data protection regulations.</p>

          {/* Section 9 */}
          <h2 style={h2Style}>Section 9: Compliance Officer Responsibilities</h2>
          <p style={pStyle}><strong style={{ color: "#f4f4f6" }}>9.1</strong> In accordance with the requirements of the Anti-Money Laundering and Counter-Terrorism Financing Act, the Company has appointed a qualified AML/CFT Compliance Officer responsible for:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Overseeing the implementation and effectiveness of the AML/CFT program",
              "Ensuring compliance with all applicable laws and regulations",
              "Maintaining relationships with regulatory authorities and law enforcement",
              "Coordinating suspicious transaction reporting and regulatory communications",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>

          {/* Section 10 */}
          <h2 style={h2Style}>Section 10: Cross-Border Transaction Management</h2>
          <p style={pStyle}>We implement enhanced due diligence for international wire transfers, consistent with FATF Recommendation 16 and Vanuatu&apos;s wire transfer obligations, including:</p>
          <ul style={{ paddingLeft: 24, margin: "0 0 1em" }}>
            {[
              "Complete originator and beneficiary information verification",
              "Enhanced screening for transactions involving high-risk jurisdictions",
              "Documentation of the purpose and nature of cross-border transfers",
              "Compliance with travel rule requirements for virtual asset transactions where applicable",
            ].map(t => <li key={t} style={liStyle}>{t}</li>)}
          </ul>
          <p style={pStyle}>Correspondent banking enhanced due diligence includes assessment of correspondent institutions&apos; AML/CFT programs, clear definition of roles and responsibilities, regular monitoring of correspondent banking activities, and termination procedures for unsatisfactory relationships.</p>

          {/* Section 11 */}
          <h2 style={h2Style}>Section 11: Enterprise Risk Management Integration</h2>
          <p style={pStyle}>The Company integrates AML/CFT risk management within its broader enterprise risk management framework, ensuring that money laundering and terrorist financing risks are identified, assessed, and mitigated as part of the Company&apos;s overall risk governance structure. This includes regular board-level reporting on AML/CFT risk exposure and the effectiveness of control measures, as well as integration with operational risk management processes.</p>

          <div
            style={{
              marginTop: "3em",
              paddingTop: "1.5em",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p style={{ ...pStyle, fontSize: "13px", color: "#6b7280" }}>
              For verification enquiries, contact:{" "}
              <a href="mailto:verification@stockity.com" style={linkStyle}>
                verification@stockity.com
              </a>
              {" "}· For complaints:{" "}
              <a href="mailto:complaints@stockity.com" style={linkStyle}>
                complaints@stockity.com
              </a>
              {" "}· For general support:{" "}
              <a href="mailto:support@stockity.com" style={linkStyle}>
                support@stockity.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
