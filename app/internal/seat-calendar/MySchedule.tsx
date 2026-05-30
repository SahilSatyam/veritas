"use client";

import { useState, useMemo } from "react";
import {
  getSeatInfo,
  getUpcomingSeatDays,
  generateICS,
  SeatInfo,
  ScheduleConfig,
} from "../../../lib/seat-schedule";
import styles from "./page.module.css";

type ViewMode = "month" | "week" | "agenda";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

interface Props {
  config: ScheduleConfig;
  label?: string;
}

export default function MySchedule({ config, label }: Props) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [currentDate, setCurrentDate] = useState(today);
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showWeekColors, setShowWeekColors] = useState(true);

  const nextSeatDay = useMemo(() => {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const upcoming = getUpcomingSeatDays(tomorrow, 1, config);
    return upcoming[0] || null;
  }, [config, today]);

  const upcoming30 = useMemo(() => {
    return getUpcomingSeatDays(today, 10, config);
  }, [config, today]);

  const monthData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startPad = firstDay.getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const cells: (SeatInfo | null)[] = [];
    for (let i = 0; i < startPad; i++) {
      cells.push(null);
    }
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      cells.push(getSeatInfo(date, config));
    }
    return cells;
  }, [currentDate, config]);

  const weekData = useMemo(() => {
    const weekStart = startOfWeek(currentDate);
    const days: SeatInfo[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      days.push(getSeatInfo(d, config));
    }
    return days;
  }, [currentDate, config]);

  function navigateMonth(delta: number) {
    const next = new Date(currentDate);
    next.setMonth(next.getMonth() + delta);
    setCurrentDate(next);
  }

  function navigateWeek(delta: number) {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + 7 * delta);
    setCurrentDate(next);
  }

  function goToToday() {
    setCurrentDate(today);
  }

  function handleExportICS() {
    const start = new Date(today);
    const end = new Date(today);
    end.setMonth(end.getMonth() + 6);
    const ics = generateICS(start, end, config);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `seat-schedule${label ? `-${label}` : ""}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function formatDate(date: Date): string {
    return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  const todayInfo = getSeatInfo(today, config);

  return (
    <div>
      {label && <h2 className={styles.scheduleLabel}>{label}</h2>}

      {/* Widgets Row */}
      <div className={styles.widgets}>
        <div className={styles.widget}>
          <div className={styles.widgetLabel}>Today</div>
          <div className={styles.widgetValue}>
            {todayInfo.hasSeat ? "✅ Seat Available" : "❌ No Seat"}
          </div>
          <div className={styles.widgetMeta}>
            Week {todayInfo.cycleWeek} · {todayInfo.dayOfWeek}
          </div>
        </div>

        {nextSeatDay && (
          <div className={styles.widget}>
            <div className={styles.widgetLabel}>Next Seat Day</div>
            <div className={styles.widgetValue}>
              {formatDate(nextSeatDay.date)}
            </div>
            <div className={styles.widgetMeta}>
              Week {nextSeatDay.cycleWeek} · {nextSeatDay.dayOfWeek}
            </div>
          </div>
        )}

        <div className={styles.widget}>
          <div className={styles.widgetLabel}>Cycle Config</div>
          <div className={styles.widgetMeta}>
            Seat: {config.seatNumber} · Start: {config.cycleStartDate}
          </div>
          {config.weeks.map((w, i) => (
            <div key={i} className={styles.widgetMeta}>
              W{i + 1}: {w.days.join(", ")}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.viewTabs}>
          {(["month", "week", "agenda"] as ViewMode[]).map((mode) => (
            <button
              key={mode}
              className={`${styles.tab} ${viewMode === mode ? styles.tabActive : ""}`}
              onClick={() => setViewMode(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.navControls}>
          <button className={styles.navBtn} onClick={goToToday}>Today</button>
          <button
            className={styles.navBtn}
            onClick={() => viewMode === "month" ? navigateMonth(-1) : navigateWeek(-1)}
          >
            ←
          </button>
          <span className={styles.navTitle}>
            {viewMode === "month"
              ? `${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getFullYear()}`
              : `Week of ${formatDate(startOfWeek(currentDate))}`}
          </span>
          <button
            className={styles.navBtn}
            onClick={() => viewMode === "month" ? navigateMonth(1) : navigateWeek(1)}
          >
            →
          </button>
        </div>

        <div className={styles.actions}>
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={showWeekColors}
              onChange={(e) => setShowWeekColors(e.target.checked)}
            />
            <span>Week colors</span>
          </label>
          <button className={styles.exportBtn} onClick={handleExportICS}>
            📅 Export .ics
          </button>
        </div>
      </div>

      {/* Month View */}
      {viewMode === "month" && (
        <div className={styles.monthGrid}>
          {DAY_LABELS.map((l) => (
            <div key={l} className={styles.dayHeader}>{l}</div>
          ))}
          {monthData.map((info, idx) => {
            if (!info) return <div key={`pad-${idx}`} className={styles.dayCell} />;
            const isToday = isSameDay(info.date, today);
            const isSelected = selectedDate && isSameDay(info.date, selectedDate);
            return (
              <button
                key={idx}
                className={`${styles.dayCell} ${styles.dayCellActive} ${
                  info.hasSeat ? styles.seatDay : ""
                } ${isToday ? styles.today : ""} ${
                  isSelected ? styles.selected : ""
                } ${
                  showWeekColors
                    ? info.cycleWeek === 1 ? styles.week1 : styles.week2
                    : ""
                }`}
                onClick={() => setSelectedDate(info.date)}
                aria-label={`${formatDate(info.date)}${info.hasSeat ? ", seat available" : ""}`}
              >
                <span className={styles.dayNumber}>{info.date.getDate()}</span>
                {info.hasSeat && (
                  <>
                    <span className={styles.seatBadge}>{config.seatNumber}</span>
                    <span className={styles.seatIndicator}>✅</span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Week View */}
      {viewMode === "week" && (
        <div className={styles.weekView}>
          {weekData.map((info, idx) => {
            const isToday = isSameDay(info.date, today);
            return (
              <button
                key={idx}
                className={`${styles.weekDay} ${
                  info.hasSeat ? styles.seatDay : ""
                } ${isToday ? styles.today : ""} ${
                  showWeekColors
                    ? info.cycleWeek === 1 ? styles.week1 : styles.week2
                    : ""
                }`}
                onClick={() => setSelectedDate(info.date)}
              >
                <div className={styles.weekDayLabel}>{DAY_LABELS[idx]}</div>
                <div className={styles.weekDayDate}>{info.date.getDate()}</div>
                <div className={styles.weekDayStatus}>{info.hasSeat ? "✅" : "❌"}</div>
                {info.hasSeat && (
                  <div className={styles.seatBadgeWeek}>{config.seatNumber}</div>
                )}
                <div className={styles.weekDayMeta}>W{info.cycleWeek}</div>
              </button>
            );
          })}
        </div>
      )}

      {/* Agenda View */}
      {viewMode === "agenda" && (
        <div className={styles.agendaView}>
          <h3>Upcoming Seat Days</h3>
          <div className={styles.agendaList}>
            {upcoming30.map((info, idx) => (
              <div
                key={idx}
                className={`${styles.agendaItem} ${isSameDay(info.date, today) ? styles.today : ""}`}
              >
                <div className={styles.agendaDate}>{formatDate(info.date)}</div>
                <div className={styles.agendaMeta}>{info.dayOfWeek} · Week {info.cycleWeek}</div>
                <div className={styles.agendaStatus}>
                  ✅ Seat Available
                  <span className={styles.seatBadgeInline}>{config.seatNumber}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Date Detail */}
      {selectedDate && (
        <div className={styles.detail}>
          <button className={styles.detailClose} onClick={() => setSelectedDate(null)} aria-label="Close detail">×</button>
          <h3>{formatDate(selectedDate)}</h3>
          {(() => {
            const info = getSeatInfo(selectedDate, config);
            return (
              <>
                <p><strong>Cycle Week:</strong> Week {info.cycleWeek}</p>
                <p><strong>Day:</strong> {info.dayOfWeek}</p>
                <p><strong>Seat Status:</strong> {info.hasSeat ? "✅ Available" : "❌ Not Available"}</p>
                {info.hasSeat && (
                  <p><strong>Seat Number:</strong> <span className={styles.seatBadgeInline}>{config.seatNumber}</span></p>
                )}
              </>
            );
          })()}
        </div>
      )}

      {/* Legend */}
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.seatSwatch}`} /> Seat Available
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.todaySwatch}`} /> Today
        </span>
        {showWeekColors && (
          <>
            <span className={styles.legendItem}>
              <span className={`${styles.legendSwatch} ${styles.week1Swatch}`} /> Week 1
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendSwatch} ${styles.week2Swatch}`} /> Week 2
            </span>
          </>
        )}
      </div>
    </div>
  );
}
