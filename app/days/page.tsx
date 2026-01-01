"use client";

import styles from "./page.module.css";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LensTag from "../components/LensTag";

const days = [
  { id: "001", title: "The Sanctity of the Environment", failure: "Dependency Hell", lens: "Reproducibility", domain: "MLOps", status: "done" },
  { id: "002", title: "Version Control for Data & Code", failure: "Silent Drift", lens: "Reproducibility", domain: "Data Infra", status: "locked" },
  { id: "003", title: "Containerization Basics (Docker)", failure: "Environment Skew", lens: "Production", domain: "Infra", status: "locked" },
  { id: "004", title: "Unit Testing for Data Science", failure: "Silent Logic Failure", lens: "Safety", domain: "QA", status: "locked" },
  { id: "005", title: "Experiment Tracking & The 'Zombie Model' Problem", failure: "Zombie Models", lens: "Reproducibility", domain: "MLOps", status: "locked" },
  { id: "006", title: "Exploratory Data Analysis (EDA) & Profiling", failure: "Digital Redlining", lens: "Safety", domain: "Data Science", status: "locked" },
  { id: "007", title: "Feature Engineering & Selection", failure: "Data Leakage", lens: "Reproducibility", domain: "Data Science", status: "locked" },
  { id: "008", title: "Baseline Models & Benchmarking", failure: "Complexity Tax", lens: "Governance", domain: "Data Science", status: "locked" },
  { id: "009", title: "Evaluation Metrics for Business", failure: "Metric Misalignment", lens: "Production", domain: "Data Science", status: "locked" },
  { id: "010", title: "Model Validation Strategies", failure: "Temporal Leakage", lens: "Security", domain: "Data Science", status: "locked" },
  { id: "011", title: "Algorithmic Fairness: Auditing & Mitigation Pipelines", failure: "Deployment of Discriminatory Models", lens: "Ethics", domain: "Model Evaluation", status: "locked" },
  { id: "012", title: "Explainable AI (XAI): From Black Box to Glass Box", failure: "Stakeholder Rejection (The Black Box Problem)", lens: "Human Factors", domain: "Model Evaluation", status: "locked" },
  { id: "013", title: "Data Privacy & Anonymization: The Toxic Waste Model", failure: "Regulatory Non-Compliance (GDPR/CCPA)", lens: "Governance", domain: "Data Engineering", status: "locked" },
  { id: "014", title: "Model Cards: The 'Nutrition Label' for AI", failure: "Model Misuse & Context Collapse", lens: "Ethics", domain: "Governance", status: "locked" },
  { id: "015", title: "The Generative Shift: LLMs, APIs, and Unit Economics", failure: "Architectural Mismatch & Cost Blowout", lens: "Security", domain: "LLMs / Generative AI", status: "locked" },
  { id: "016", title: "Cloud Infrastructure for AI: Compute, Cost, and Carbon", failure: "Bill Shock & Resource Starvation", lens: "Sustainability", domain: "Infrastructure", status: "locked" },
  { id: "017", title: "CI/CD for ML: The Death of 'It Works on My Machine'", failure: "Manual Deployment Errors", lens: "Security", domain: "MLOps", status: "locked" },
  { id: "018", title: "Data Lineage: The Chain of Custody for AI", failure: "The 'Orphan Model' (Provenance Collapse)", lens: "Governance", domain: "Data Engineering", status: "locked" },
  { id: "019", title: "The ROI of AI: Translating F1 Scores to P&L", failure: "Project Cancellation (The 'Science Project' Trap)", lens: "Ethics", domain: "Strategy", status: "locked" },
  { id: "020", title: "Phase 1 Capstone: The 'End-to-End' Production Pipeline", failure: "Integration Hell (Fragmented Architecture)", lens: "Reproducibility", domain: "Orchestration", status: "locked" },
];

export default function IndexPage() {
  const [activeLens, setActiveLens] = useState("All");

  const lenses = ["All", "Reproducibility", "Safety", "Governance", "Production", "Security"];

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>Day Index</h1>
        <p className={styles.subtitle}>
          A comprehensive registry of all 100 engineering patterns, failure modes, and governance lenses.
        </p>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressLabel}>
          <span>Series Progress</span>
          <span>Day 20 of 100</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: '20%' }}></div>
          {/* Mock visual segments if needed, but simple bar is clean */}
        </div>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.searchRow}>
          <input type="text" placeholder="Search titles or failures..." className={styles.searchInput} />
          <select className={styles.sortSelect}>
            <option>Day Number (Asc)</option>
            <option>Day Number (Desc)</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Lens:</span>
          {lenses.map(lens => (
            <button 
              key={lens} 
              className={`${styles.filterChip} ${activeLens === lens ? styles.filterChipActive : ''}`}
              onClick={() => setActiveLens(lens)}
            >
              {lens}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableSection}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Title</th>
              <th>Failure Prevented</th>
              <th>Lens</th>
              <th>Domain</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {days.filter(d => activeLens === "All" || d.lens === activeLens).map((day) => (
              <tr key={day.id}>
                <td className="font-mono text-secondary">{day.id}</td>
                <td>
                  {day.status === "locked" ? (
                    <span className="text-secondary" style={{ fontWeight: 500, opacity: 0.5 }}>{day.title}</span>
                  ) : (
                    <Link href={`/day/${day.id}`} style={{ fontWeight: 500 }}>{day.title}</Link>
                  )}
                </td>
                <td className="text-secondary">{day.failure}</td>
                <td><LensTag>{day.lens}</LensTag></td>
                <td><span className="text-micro">{day.domain}</span></td>
                <td>
                  {day.status === "done" ? (
                    <CheckCircle2 size={18} className={styles.statusIcon} />
                  ) : day.status === "locked" ? (
                    <Lock size={18} className="text-secondary" style={{ opacity: 0.5 }} />
                  ) : (
                    <Circle size={18} color="#E5E5E0" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
