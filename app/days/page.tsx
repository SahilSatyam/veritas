"use client";

import styles from "./page.module.css";
import { CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LensTag from "../components/LensTag";

const days = [
  { id: "001", title: "Defining the Operational Boundary", failure: "Scope Creep", lens: "Governance", domain: "MLOps", status: "done" },
  { id: "002", title: "Data Lineage as a First-Class Citizen", failure: "Untraceable Model Bias", lens: "Reproducibility", domain: "Data Infra", status: "done" },
  { id: "003", title: "Structuring the Evaluation Harness", failure: "Regression on Edge Cases", lens: "Safety", domain: "Evaluation", status: "done" },
  { id: "004", title: "Secret Management in ML Pipelines", failure: "Credential Leakage", lens: "Security", domain: "Infra", status: "done" },
  { id: "005", title: "Model Versioning Strategies", failure: "Deployment Confusion", lens: "Production", domain: "MLOps", status: "done" },
  { id: "006", title: "Automated Bias Detection Triggers", failure: "Discriminatory Output", lens: "Safety", domain: "Evaluation", status: "done" },
  { id: "007", title: "Infrastructure as Code for AI", failure: "Environment Drift", lens: "Reproducibility", domain: "Infra", status: "done" },
  { id: "008", title: "Cost Attribution in Shared Clusters", failure: "Runaway Costs", lens: "Governance", domain: "Infra", status: "done" },
  { id: "009", title: "Feature Store Consistency Checks", failure: "Training-Serving Skew", lens: "Production", domain: "Data Infra", status: "done" },
  { id: "010", title: "Handling PII in Training Data", failure: "Privacy Violation", lens: "Security", domain: "Data Infra", status: "done" },
  { id: "011", title: "Adversarial Input Filtering", failure: "Prompt Injection", lens: "Safety", domain: "LLMs", status: "done" },
  { id: "012", title: "Dependency Locking & Scanning", failure: "Supply Chain Attack", lens: "Security", domain: "MLOps", status: "done" },
  { id: "013", title: "Model Card Automation", failure: "Documentation Drift", lens: "Governance", domain: "MLOps", status: "done" },
  { id: "014", title: "Continuous Monitoring Patterns", failure: "Silent Degradation", lens: "Production", domain: "MLOps", status: "done" },
  { id: "015", title: "Feedback Loop Design", failure: "Echo Chambers", lens: "Production", domain: "System", status: "pending" },
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
          <span>Day 14 of 100</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: '14%' }}></div>
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
                <td><Link href={`/day/${day.id}`} style={{ fontWeight: 500 }}>{day.title}</Link></td>
                <td className="text-secondary">{day.failure}</td>
                <td><LensTag>{day.lens}</LensTag></td>
                <td><span className="text-micro">{day.domain}</span></td>
                <td>
                  {day.status === "done" ? (
                    <CheckCircle2 size={18} className={styles.statusIcon} />
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
