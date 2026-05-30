"use client";

import { useState } from "react";
import { TEAM_MEMBERS } from "../../../lib/seat-schedule";
import MySchedule from "./MySchedule";
import styles from "./page.module.css";

export default function TeamSchedule() {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const selectedMember = TEAM_MEMBERS.find((m) => m.id === selectedMemberId);

  return (
    <div>
      <div className={styles.teamHeader}>
        <h2 className={styles.teamTitle}>Team Members</h2>
      </div>

      <div className={styles.memberList}>
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className={`${styles.memberCard} ${
              selectedMemberId === member.id ? styles.memberCardActive : ""
            }`}
          >
            <button
              className={styles.memberCardBody}
              onClick={() =>
                setSelectedMemberId(
                  selectedMemberId === member.id ? null : member.id
                )
              }
            >
              <div className={styles.memberName}>{member.name}</div>
              <div className={styles.memberMeta}>
                Seat {member.config.seatNumber} ·{" "}
                {member.config.cycleLengthWeeks}-week cycle ·{" "}
                {member.config.weeks.map((w, i) => `W${i + 1}: ${w.days.join(", ")}`).join(" | ")}
              </div>
            </button>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className={styles.teamCalendar}>
          <MySchedule config={selectedMember.config} label={selectedMember.name} />
        </div>
      )}
    </div>
  );
}
