import styles from "../page.module.css";
import { AlertCircle } from "lucide-react";
import { getAuditLogEntries, getLatestAuditLogEntry } from "../../lib/days-registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Log",
  description:
    "A transparent record of all architectural decisions and content releases in the Veritas 100 Days of Responsible AI Engineering series.",
  openGraph: {
    title: "Audit Log — Veritas",
    description:
      "An open book of construction — every major decision and content release tracked chronologically.",
    url: "/audit-log",
  },
  alternates: {
    canonical: "/audit-log",
  },
};

export default function AuditLogPage() {
  const auditEntries = getAuditLogEntries();
  const latestEntry = getLatestAuditLogEntry();

  return (
    <div className="container">
      <div className={styles.section}>
        <div className={styles.breadcrumb}>
            SYSTEM / TRANSPARENCY
        </div>
        <h1 className={styles.title} style={{ marginBottom: "2rem", marginTop: "1rem" }}>Audit Log</h1>
        <div className={styles.prose}>
          <p>
            The intent of this project is to be an &quot;open book&quot; of its own construction. 
            Below is a record of major architectural decisions and content updates.
          </p>
          
          <div style={{ marginTop: "3rem" }}>
            {latestEntry && (
              <div className={styles.auditNote}>
                <div className={styles.auditTitle}>
                  <AlertCircle size={16} /> Latest Event: Content Release
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {latestEntry.displayDate}: Released &quot;{latestEntry.dayTitle}&quot;. 
                  Focused on preventing {latestEntry.dayFailure} via {latestEntry.dayLens} strategies.
                </p>
              </div>
            )}
            
            <table className={styles.previewTable}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event Type</th>
                        <th>Description</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {auditEntries.map((entry) => (
                      <tr key={entry.dayId}>
                        <td>{entry.date}</td>
                        <td><span className={styles.tag}>{entry.eventType}</span></td>
                        <td>{entry.description}</td>
                        <td className="font-mono text-micro">{entry.hash}</td>
                      </tr>
                    ))}
                </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}
