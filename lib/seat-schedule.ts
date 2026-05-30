/**
 * Seat Schedule Engine
 *
 * A generic recurring schedule engine that computes seat availability
 * based on a configurable repeating cycle.
 *
 * Configuration:
 * - cycleStartDate: The Monday that begins Week 1 of the cycle
 * - cycleLengthWeeks: Number of weeks in one full cycle
 * - weeks: Array of week definitions, each with days that have seats available
 *
 * To modify the schedule, update the SCHEDULE_CONFIG below.
 */

export type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export interface WeekSchedule {
  days: DayOfWeek[];
}

export interface ScheduleConfig {
  /** The Monday that starts Week 1 of the cycle (ISO date string YYYY-MM-DD) */
  cycleStartDate: string;
  /** Number of weeks in one full cycle */
  cycleLengthWeeks: number;
  /** Schedule for each week in the cycle */
  weeks: WeekSchedule[];
  /** Assigned seat number */
  seatNumber: string;
}

/**
 * CONFIGURATION — Edit this to change the schedule.
 * No code changes required beyond this object.
 */
export const SCHEDULE_CONFIG: ScheduleConfig = {
  cycleStartDate: "2025-01-06", // A Monday — first day of Week 1
  cycleLengthWeeks: 2,
  weeks: [
    { days: ["THU", "FRI"] },           // Week 1: Thursday, Friday
    { days: ["WED", "THU", "FRI"] },    // Week 2: Wednesday, Thursday, Friday
  ],
  seatNumber: "153",
};

/**
 * TEAM REGISTRY — Hardcoded team member configs.
 * Add/remove entries here to manage the team.
 */
export interface TeamMember {
  id: string;
  name: string;
  config: ScheduleConfig;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sahil",
    name: "Sahil",
    config: SCHEDULE_CONFIG, // Same as the primary config
  },
  {
    id: "sudharma",
    name: "Sudharma",
    config: {
      cycleStartDate: "2025-01-06",
      cycleLengthWeeks: 2,
      weeks: [
        { days: ["MON", "TUE", "WED"] },  // Week 1: Mon, Tue, Wed
        { days: ["MON", "TUE"] },          // Week 2: Mon, Tue
      ],
      seatNumber: "153",
    },
  },
];

const DAY_MAP: Record<number, DayOfWeek> = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

/**
 * Returns the cycle week number (1-indexed) for a given date.
 */
export function getCycleWeek(date: Date, config: ScheduleConfig = SCHEDULE_CONFIG): number {
  const start = new Date(config.cycleStartDate + "T00:00:00");
  const diffMs = date.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  // Handle dates before the cycle start by wrapping
  const cycleWeek = ((diffWeeks % config.cycleLengthWeeks) + config.cycleLengthWeeks) % config.cycleLengthWeeks;
  return cycleWeek + 1; // 1-indexed
}

/**
 * Returns whether a seat is available on the given date.
 */
export function hasSeat(date: Date, config: ScheduleConfig = SCHEDULE_CONFIG): boolean {
  const dayOfWeek = DAY_MAP[date.getDay()];
  const cycleWeek = getCycleWeek(date, config);
  const weekSchedule = config.weeks[cycleWeek - 1];
  return weekSchedule.days.includes(dayOfWeek);
}

/**
 * Returns seat info for a specific date.
 */
export interface SeatInfo {
  date: Date;
  cycleWeek: number;
  dayOfWeek: DayOfWeek;
  hasSeat: boolean;
}

export function getSeatInfo(date: Date, config: ScheduleConfig = SCHEDULE_CONFIG): SeatInfo {
  return {
    date,
    cycleWeek: getCycleWeek(date, config),
    dayOfWeek: DAY_MAP[date.getDay()],
    hasSeat: hasSeat(date, config),
  };
}

/**
 * Returns all seat days in a given month (0-indexed month).
 */
export function getSeatDaysInMonth(
  year: number,
  month: number,
  config: ScheduleConfig = SCHEDULE_CONFIG
): SeatInfo[] {
  const results: SeatInfo[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const info = getSeatInfo(date, config);
    if (info.hasSeat) {
      results.push(info);
    }
  }

  return results;
}

/**
 * Returns the next N seat days from a given start date.
 */
export function getUpcomingSeatDays(
  fromDate: Date,
  count: number,
  config: ScheduleConfig = SCHEDULE_CONFIG
): SeatInfo[] {
  const results: SeatInfo[] = [];
  const current = new Date(fromDate);

  while (results.length < count) {
    const date = new Date(current);
    const info = getSeatInfo(date, config);
    if (info.hasSeat) {
      results.push(info);
    }
    current.setDate(current.getDate() + 1);
  }

  return results;
}

/**
 * Generates an ICS calendar string for seat days in a date range.
 */
export function generateICS(
  startDate: Date,
  endDate: Date,
  config: ScheduleConfig = SCHEDULE_CONFIG
): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Veritas//Seat Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Office Seat Schedule",
  ];

  const current = new Date(startDate);
  while (current <= endDate) {
    if (hasSeat(current, config)) {
      const dateStr = formatICSDate(current);
      const nextDay = new Date(current);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDateStr = formatICSDate(nextDay);
      const cycleWeek = getCycleWeek(current, config);

      lines.push("BEGIN:VEVENT");
      lines.push(`DTSTART;VALUE=DATE:${dateStr}`);
      lines.push(`DTEND;VALUE=DATE:${nextDateStr}`);
      lines.push(`SUMMARY:Office Seat (Week ${cycleWeek})`);
      lines.push(`DESCRIPTION:Seat available - Cycle Week ${cycleWeek}`);
      lines.push(`UID:seat-${dateStr}@veritas`);
      lines.push("END:VEVENT");
    }
    current.setDate(current.getDate() + 1);
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

function formatICSDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}
