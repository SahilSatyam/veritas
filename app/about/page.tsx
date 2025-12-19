import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className="container">
      <div className={styles.section}>
        <h1 className={styles.pageTitle}>About the Series</h1>
        
        <span className={styles.subHeading}>WHY THIS SERIES EXISTS</span>
        <div className={styles.prose}>
          <p>
            &quot;100 Days of Responsible AI Engineering&quot; is not a blog. It is a systematic attempt to catalog, 
            define, and operationalize the vague concept of &quot;responsibility&quot; into concrete engineering patterns.
          </p>
          <p>
            Most discussions on AI safety and ethics remain at the policy level. This series targets the 
            gap between policy and production. It assumes that responsible systems are built, not just 
            regulated. By documenting one pattern per day, we aim to build a defensible registry of 
            practices that prevent failure modes in production environments.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.subHeading}>WHO THIS IS FOR</span>
        <div className={styles.prose}>
          <p>
            This material is written for Principal Engineers, MLOps Architects, and Technical Leaders 
            who are accountable for the output of AI systems. The content assumes a high level of 
            technical competency and skepticism.
          </p>
          <p>
            If you are looking for hype, market analysis, or beginner tutorials, this series will not serve 
            you. If you are preparing for a regulatory audit or designing a critical system, you are in the 
            right place.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.subHeading}>CORE VALUES</span>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Responsibility</h3>
            <p className={styles.cardText}>
              Defined not as a feeling, but as the presence of controls that mitigate specific, 
              identifiable risks.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Auditability</h3>
            <p className={styles.cardText}>
              Every decision, from data selection to model versioning, must leave a 
              traceable artifact.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Risk Management</h3>
            <p className={styles.cardText}>
              Prioritizing long-term system stability and safety over short-term deployment 
              velocity.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.subHeading}>METHODOLOGY & SCOPE</span>
        <div className={styles.prose}>
          <p>
            Each day addresses a single unit of engineering work. The sequence is designed to move 
            from foundational governance (Days 1–20) through infrastructure (21–50), into application 
            logic (51–80), and finally system monitoring (81–100).
          </p>
          <ol style={{ marginLeft: '1.5rem', listStyleType: 'decimal-leading-zero' }}>
            <li>Identification of a specific production failure mode.</li>
            <li>Definition of the preventative engineering pattern.</li>
            <li>Provision of implementation artifacts (pseudocode/configs).</li>
            <li>Mapping to regulatory or compliance lenses.</li>
          </ol>
        </div>
      </div>

      <div className={styles.section} style={{ borderBottom: 'none' }}>
        <div className={styles.authorBox}>
          <span className={styles.subHeading}>ABOUT THE AUTHOR</span>
          <h3 className={styles.authorTitle}>System Architecture Group</h3>
          <p className={styles.prose} style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>
            This series is maintained by a collective of Senior Staff Engineers specializing in 
            high-reliability distributed systems and ML infrastructure. We operate anonymously 
            to focus purely on the technical validity of the work.
          </p>
        </div>
      </div>
    </div>
  );
}
