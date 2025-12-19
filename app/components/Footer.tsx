import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div>
            © 2024 Responsible AI Series. An auditable open record.
          </div>
          <div className={styles.links}>
            <Link href="/methodology" className={styles.link}>Methodology</Link>
            <Link href="/audit-log" className={styles.link}>Audit Log</Link>
            <Link href="/license" className={styles.link}>License</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
