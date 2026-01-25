"use client";

import styles from "./page.module.css";
import { CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import LensTag from "../components/LensTag";

import { daysRegistry as days, isDayUnlocked, getUnlockedDaysCount } from "../../lib/days-registry";

type SortOrder = "asc" | "desc";

export default function IndexPage() {
  const [activeLens, setActiveLens] = useState("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const lenses = ["All", "Reproducibility", "Safety", "Governance", "Production", "Security"];

  const completedDays = getUnlockedDaysCount();

  // Filter and sort days based on current settings
  const filteredAndSortedDays = useMemo(() => {
    const filtered = days.filter(d => activeLens === "All" || d.lens === activeLens);
    
    return [...filtered].sort((a, b) => {
      const aNum = parseInt(a.id, 10);
      const bNum = parseInt(b.id, 10);
      return sortOrder === "asc" ? aNum - bNum : bNum - aNum;
    });
  }, [activeLens, sortOrder]);

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
          <span>Day {completedDays} of 100</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${completedDays}%` }}></div>
          {/* Mock visual segments if needed, but simple bar is clean */}
        </div>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.searchRow}>
          <input type="text" placeholder="Search titles or failures..." className={styles.searchInput} />
          <select 
            className={styles.sortSelect}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          >
            <option value="asc">Day Number (Asc)</option>
            <option value="desc">Day Number (Desc)</option>
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
            {filteredAndSortedDays.map((day) => {
              const isUnlocked = isDayUnlocked(day.id);
              return (
                <tr key={day.id}>
                  <td className="font-mono text-secondary">{day.id}</td>
                  <td>
                    {!isUnlocked ? (
                      <span className="text-secondary" style={{ fontWeight: 500, opacity: 0.5 }}>{day.title}</span>
                    ) : (
                      <Link href={`/day/${day.id}`} style={{ fontWeight: 500 }}>{day.title}</Link>
                    )}
                  </td>
                  <td className="text-secondary">{day.failure}</td>
                  <td><LensTag>{day.lens}</LensTag></td>
                  <td><span className="text-micro">{day.domain}</span></td>
                  <td>
                    {isUnlocked ? (
                      <CheckCircle2 size={18} className={styles.statusIcon} />
                    ) : (
                      <Lock size={18} className="text-secondary" style={{ opacity: 0.5 }} />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

