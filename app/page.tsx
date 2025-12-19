"use client";

import styles from "./page.module.css";
import { GitBranch, ShieldCheck, Scale, Server } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import LensTag from "./components/LensTag";

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            100 Days of Responsible AI Engineering
          </h1>
          <p className={styles.heroSubtitle}>
            A definitive technical series for high-intent practitioners. 
            Production-grade rigor, zero hype.
          </p>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroMeta}>
            <div className={styles.heroMetaTitle}>This is a system, not a blog.</div>
            <p className={styles.heroMetaText}>
              We explore the engineering reality of deploying AI responsibly—focusing on auditability, 
              failure modes, and long-term maintenance.
            </p>
            <p className={styles.heroMetaText}>
              Written for senior engineers who need defensible patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <div className={styles.pillarsContainer}>
        <section className={styles.pillars}>
          <Tilt>
            <div className={styles.pillarCard}>
              <div className={styles.iconBox}><GitBranch size={24} /></div>
              <h3 className={styles.pillarTitle}>Reproducibility</h3>
              <p className={styles.pillarDesc}>
                Deterministic pipelines and versioned artifacts for complete system traceability.
              </p>
            </div>
          </Tilt>
          <Tilt>
            <div className={styles.pillarCard}>
              <div className={styles.iconBox}><ShieldCheck size={24} /></div>
              <h3 className={styles.pillarTitle}>Safety</h3>
              <p className={styles.pillarDesc}>
                Runtime guardrails and adversarial testing aimed at failure prevention.
              </p>
            </div>
          </Tilt>
          <Tilt>
            <div className={styles.pillarCard}>
              <div className={styles.iconBox}><Scale size={24} /></div>
              <h3 className={styles.pillarTitle}>Governance</h3>
              <p className={styles.pillarDesc}>
                Automated compliance checks and human-in-the-loop review protocols.
              </p>
            </div>
          </Tilt>
          <Tilt>
            <div className={styles.pillarCard}>
              <div className={styles.iconBox}><Server size={24} /></div>
              <h3 className={styles.pillarTitle}>Production</h3>
              <p className={styles.pillarDesc}>
                Observability, scaling patterns, and realistic operational trade-offs.
              </p>
            </div>
          </Tilt>
        </section>
      </div>

      {/* Why This Exists */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why this exists</h2>
        <div style={{ maxWidth: '600px' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Most AI discourse fluctuates between apocalyptic hype and marketing fluff. 
            This series exists to ground the discipline in engineering first principles.
          </p>
          <ul className={styles.checkList}>
            <li className={styles.checkItem}>For staff engineers needing architectural patterns.</li>
            <li className={styles.checkItem}>To prevent silent failures in high-stakes deployments.</li>
            <li className={styles.checkItem}>To create an auditable record of design decisions.</li>
          </ul>
        </div>
      </section>

      {/* Day Index Preview */}
      <section className={styles.section}>
        <div className={styles.previewHeader}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Day Index Preview</h2>
          <div>
            <button className={styles.btnSecondary}>Start at Day 1</button>
            <Link href="/days"><button className={styles.btnPrimary}>Browse all 100 days</button></Link>
          </div>
        </div>

        <table className={styles.previewTable}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Title</th>
              <th>Failure Prevented</th>
              <th>Lens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono text-secondary">001</td>
              <td>Defining the Operational Boundary</td>
              <td>Scope Creep</td>
              <td><LensTag>Governance</LensTag></td>
            </tr>
            <tr>
              <td className="font-mono text-secondary">002</td>
              <td>Data Lineage as a First-Class Citizen</td>
              <td>Untraceable Model Bias</td>
              <td><LensTag>Reproducibility</LensTag></td>
            </tr>
            <tr>
              <td className="font-mono text-secondary">003</td>
              <td>Structuring the Evaluation Harness</td>
              <td>Regression on Edge Cases</td>
              <td><LensTag>Safety</LensTag></td>
            </tr>
            <tr>
              <td className="font-mono text-secondary">004</td>
              <td>Secret Management in ML Pipelines</td>
              <td>Credential Leakage</td>
              <td><LensTag>Security</LensTag></td>
            </tr>
            <tr>
              <td className="font-mono text-secondary">005</td>
              <td>Model Versioning Strategies</td>
              <td>Deployment Confusion</td>
              <td><LensTag>Production</LensTag></td>
            </tr>
             <tr>
              <td className="font-mono text-secondary">006</td>
              <td>Automated Bias Detection Triggers</td>
              <td>Discriminatory Output</td>
              <td><LensTag>Safety</LensTag></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
