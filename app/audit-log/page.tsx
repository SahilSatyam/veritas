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
            The intent of this project is to be an &quot;open book&quot; of its own construction. 
            Below is a record of major architectural decisions and content updates.
          </p>
          
          <div style={{ marginTop: "3rem" }}>
            <div className={styles.auditNote}>
              <div className={styles.auditTitle}>
                <AlertCircle size={16} /> Latest Event: Content Release
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Jan 14, 2026: Released &quot;Model Cards: The &apos;Nutrition Label&apos; for AI&quot;. 
                Focused on preventing Model Misuse & Context Collapse via Ethics strategies.
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
                        <td>2026-01-14</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 014</td>
                        <td className="font-mono text-micro">a4b2...8e99</td>
                    </tr>
                    <tr>
                        <td>2026-01-13</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 013</td>
                        <td className="font-mono text-micro">e6c9...1a77</td>
                    </tr>
                    <tr>
                        <td>2026-01-12</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 012</td>
                        <td className="font-mono text-micro">d8a1...2f44</td>
                    </tr>
                    <tr>
                        <td>2026-01-11</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 011</td>
                        <td className="font-mono text-micro">f9b2...3c11</td>
                    </tr>
                    <tr>
                        <td>2026-01-10</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 010</td>
                        <td className="font-mono text-micro">c5e1...9d88</td>
                    </tr>
                    <tr>
                        <td>2026-01-09</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 009</td>
                        <td className="font-mono text-micro">a2c4...e5b8</td>
                    </tr>
                    <tr>
                        <td>2026-01-08</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 008</td>
                        <td className="font-mono text-micro">f7c3...1a44</td>
                    </tr>
                    <tr>
                        <td>2026-01-07</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 007</td>
                        <td className="font-mono text-micro">b4e2...8f91</td>
                    </tr>
                    <tr>
                        <td>2026-01-06</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 006</td>
                        <td className="font-mono text-micro">d3a9...5c77</td>
                    </tr>
                    <tr>
                        <td>2026-01-05</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 005</td>
                        <td className="font-mono text-micro">f1a8...7b22</td>
                    </tr>
                    <tr>
                        <td>2026-01-04</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 004</td>
                        <td className="font-mono text-micro">c8d4...3f55</td>
                    </tr>
                    <tr>
                        <td>2026-01-03</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 003</td>
                        <td className="font-mono text-micro">e5f1...2b99</td>
                    </tr>
                    <tr>
                        <td>2026-01-02</td>
                        <td><span className={styles.tag}>CONTENT</span></td>
                        <td>Release Day 002</td>
                        <td className="font-mono text-micro">b9f2...4a11</td>
                    </tr>
                    <tr>
                        <td>2026-01-01</td>
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
