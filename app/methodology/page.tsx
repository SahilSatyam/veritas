import styles from "../page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "The engineering methodology behind the Veritas series — grounded in SRE, cybersecurity standards (NIST, SLSA), and safety-critical systems (ISO 26262).",
  openGraph: {
    title: "Methodology — Veritas",
    description:
      "Our methodology treats AI models as software artifacts, applying rigorous engineering discipline to their lifecycle.",
    url: "/methodology",
  },
  alternates: {
    canonical: "/methodology",
  },
};

export default function MethodologyPage() {
  return (
    <div className="container">
      <div className={styles.section}>
        <div className={styles.breadcrumb}>
            CORE / FOUNDATION
        </div>
        <h1 className={styles.title} style={{ marginBottom: "2rem", marginTop: "1rem" }}>Methodology</h1>
        <div className={styles.prose}>
          <p>
            The Responsible AI Series is built on the belief that safety and ethics are not theoretical concepts, 
            but engineering constraints. Our methodology focuses on reproducible, verifiable, and transparent 
            software practices.
          </p>
          <p>
            Each &quot;Day&quot; in this series represents a concrete step towards a more robust AI system. We borrow heavily from:
          </p>
          <ul>
            <li><strong>Software Engineering Reliability</strong> (SRE, DevOps)</li>
            <li><strong>Cybersecurity Standards</strong> (NIST, SLSA)</li>
            <li><strong>Safety Critical Systems</strong> (ISO 26262, Aviation Safety)</li>
          </ul>
          <p>
            By treating AI models as software artifacts rather than magic boxes, we can apply rigorous engineering
            discipline to their lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
}
