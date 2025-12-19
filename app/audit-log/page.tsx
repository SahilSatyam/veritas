import styles from "../page.module.css";
import { AlertCircle } from "lucide-react";

export default function AuditLogPage() {
  return (
    <div className="container">
      <div className={styles.section}>
        <div className={styles.breadcrumb}>
            SYSTEM / TRANSPARENCY
        </div>
        <h1 className={styles.title} style={{ marginBottom: "2rem", marginTop: "1rem" }}>Audit Log</h1>
        <div className={styles.prose}>
          <p>
            The intent of this project is to be an "open book" of its own construction. 
            Below is a record of major architectural decisions and content updates.
          </p>
          
          <div style={{ marginTop: "3rem" }}>
            <div className={styles.auditNote}>
              <div className={styles.auditTitle}>
                <AlertCircle size={16} /> Latest Event: System Initialization
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Dec 19, 2024: Repository initialized with "Sanctity of the Environment" module. 
                Focus on reproducibility and supply chain security.
              </p>
            </div>
            
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
                    <tr>
                        <td>2024-12-19</td>
                        <td><span className={styles.tag}>INIT</span></td>
                        <td>Initial Commit & Day 001</td>
                        <td className="font-mono text-micro">a7b3...9c21</td>
                    </tr>
                </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}
