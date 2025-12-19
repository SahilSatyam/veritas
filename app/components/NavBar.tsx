"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path ? styles.active : "";

  return (
    <nav className="container">
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <strong>100 Days of Responsible AI</strong>
          <span className={styles.logoSeries}>Engineering Series</span>
        </Link>

        <div className={styles.links}>
          <Link href="/" className={`${styles.link} ${isActive("/")}`}>Overview</Link>
          <Link href="/days" className={`${styles.link} ${isActive("/days")}`}>Day Index</Link>
          <Link href="/about" className={`${styles.link} ${isActive("/about")}`}>About</Link>
          

        </div>
      </div>
    </nav>
  );
}
