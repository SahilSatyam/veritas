"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { SCHEDULE_CONFIG } from "../../../lib/seat-schedule";
import MySchedule from "./MySchedule";
import TeamSchedule from "./TeamSchedule";

type PageTab = "mine" | "team";

export default function SeatCalendarPage() {
  const [activeTab, setActiveTab] = useState<PageTab>("mine");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Seat Calendar</h1>
        <p className={styles.subtitle}>Office seating schedule — hidden internal page</p>
      </header>

      {/* Page-level tabs */}
      <div className={styles.pageTabs}>
        <button
          className={`${styles.pageTab} ${activeTab === "mine" ? styles.pageTabActive : ""}`}
          onClick={() => setActiveTab("mine")}
        >
          My Schedule
        </button>
        <button
          className={`${styles.pageTab} ${activeTab === "team" ? styles.pageTabActive : ""}`}
          onClick={() => setActiveTab("team")}
        >
          Team
        </button>
      </div>

      {activeTab === "mine" && <MySchedule config={SCHEDULE_CONFIG} />}
      {activeTab === "team" && <TeamSchedule />}
    </div>
  );
}
