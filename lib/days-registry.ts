export interface DayRegistryItem {
  id: string;
  title: string;
  failure: string;
  lens: string;
  domain: string;
}

export const daysRegistry: DayRegistryItem[] = [
  {
    id: "001",
    title: "The Sanctity of the Environment",
    failure: "Dependency Hell",
    lens: "Reproducibility",
    domain: "MLOps",
  },
  {
    id: "002",
    title: "Version Control for Data & Code",
    failure: "Silent Drift",
    lens: "Reproducibility",
    domain: "Data Infra",
  },
  {
    id: "003",
    title: "Containerization Basics (Docker)",
    failure: "Environment Skew",
    lens: "Production",
    domain: "Infra",
  },
  {
    id: "004",
    title: "Unit Testing for Data Science",
    failure: "Silent Logic Failure",
    lens: "Safety",
    domain: "QA",
  },
  {
    id: "005",
    title: "Experiment Tracking & The 'Zombie Model' Problem",
    failure: "Zombie Models",
    lens: "Reproducibility",
    domain: "MLOps",
  },
  {
    id: "006",
    title: "Exploratory Data Analysis (EDA) & Profiling",
    failure: "Digital Redlining",
    lens: "Safety",
    domain: "Data Science",
  },
  {
    id: "007",
    title: "Feature Engineering & Selection",
    failure: "Data Leakage",
    lens: "Reproducibility",
    domain: "Data Science",
  },
  {
    id: "008",
    title: "Baseline Models & Benchmarking",
    failure: "Complexity Tax",
    lens: "Governance",
    domain: "Data Science",
  },
  {
    id: "009",
    title: "Evaluation Metrics for Business",
    failure: "Metric Misalignment",
    lens: "Production",
    domain: "Data Science",
  },
  {
    id: "010",
    title: "Model Validation Strategies",
    failure: "Temporal Leakage",
    lens: "Security",
    domain: "Data Science",
  },
  {
    id: "011",
    title: "Algorithmic Fairness: Auditing & Mitigation Pipelines",
    failure: "Deployment of Discriminatory Models",
    lens: "Ethics",
    domain: "Model Evaluation",
  },
  {
    id: "012",
    title: "Explainable AI (XAI): From Black Box to Glass Box",
    failure: "Stakeholder Rejection (The Black Box Problem)",
    lens: "Human Factors",
    domain: "Model Evaluation",
  },
  {
    id: "013",
    title: "Data Privacy & Anonymization: The Toxic Waste Model",
    failure: "Regulatory Non-Compliance (GDPR/CCPA)",
    lens: "Governance",
    domain: "Data Engineering",
  },
  {
    id: "014",
    title: "Model Cards: The 'Nutrition Label' for AI",
    failure: "Model Misuse & Context Collapse",
    lens: "Ethics",
    domain: "Governance",
  },
  {
    id: "015",
    title: "The Generative Shift: LLMs, APIs, and Unit Economics",
    failure: "Architectural Mismatch & Cost Blowout",
    lens: "Security",
    domain: "LLMs / Generative AI",
  },
  {
    id: "016",
    title: "Cloud Infrastructure for AI: Compute, Cost, and Carbon",
    failure: "Bill Shock & Resource Starvation",
    lens: "Sustainability",
    domain: "Infrastructure",
  },
  {
    id: "017",
    title: "CI/CD for ML: The Death of 'It Works on My Machine'",
    failure: "Manual Deployment Errors",
    lens: "Security",
    domain: "MLOps",
  },
  {
    id: "018",
    title: "Data Lineage: The Chain of Custody for AI",
    failure: "The 'Orphan Model' (Provenance Collapse)",
    lens: "Governance",
    domain: "Data Engineering",
  },
  {
    id: "019",
    title: "The ROI of AI: Translating F1 Scores to P&L",
    failure: "Project Cancellation (The 'Science Project' Trap)",
    lens: "Ethics",
    domain: "Strategy",
  },
  {
    id: "020",
    title: "Phase 1 Capstone: The 'End-to-End' Production Pipeline",
    failure: "Integration Hell (Fragmented Architecture)",
    lens: "Reproducibility",
    domain: "Orchestration",
  },
  {
    id: "021",
    title: "The LLM API Landscape (OpenAI, Anthropic, Mistral)",
    failure: "Vendor Lock-in",
    lens: "Governance",
    domain: "MLOps",
  },
  {
    id: "022",
    title: "Prompt Engineering I: Structure & Context",
    failure: "Garbage In, Garbage Out (Ambiguity)",
    lens: "Human Factors",
    domain: "MLOps",
  },
  {
    id: "023",
    title: "Prompt Engineering II: Reasoning (CoT & ReAct)",
    failure: "Logic Hallucination",
    lens: "Safety",
    domain: "LLMs",
  },
  {
    id: "024",
    title: "Structured Outputs (JSON Mode & Function Calling)",
    failure: "Pipeline Breaks (Parser Errors)",
    lens: "Security",
    domain: "MLOps",
  },
  {
    id: "025",
    title: "Building Conversational Memory: State Management Patterns",
    failure: "Conversational Amnesia (Statelessness)",
    lens: "Privacy (Right to be Forgotten)",
    domain: "Application Layer",
  },
  {
    id: "026",
    title: "Evaluating Generative Models (Beyond Accuracy)",
    failure: "The 'Vibe Check' Trap",
    lens: "Human Factors",
    domain: "MLOps",
  },
  {
    id: "027",
    title: "Automated Evaluation (LLM-as-a-Judge)",
    failure: "Scaling Bottlenecks (The Human Review Queue)",
    lens: "Governance",
    domain: "MLOps",
  },
  {
    id: "028",
    title: "Embeddings & Vector Space",
    failure: "The Synonym Gap (Keyword Mismatch)",
    lens: "Ethics (Algorithmic Bias)",
    domain: "RAG / Search",
  },
  {
    id: "029",
    title: "Vector Databases (Infrastructure)",
    failure: "Latency Spikes (The O(N) Bottleck)",
    lens: "Security (Tenant Isolation)",
    domain: "Infrastructure / RAG",
  },
  {
    id: "030",
    title: "RAG Architecture I: The Data Pipeline & Chunking Strategy",
    failure: "Context Fragmentation",
    lens: "Governance (Data Lineage)",
    domain: "RAG / Data Engineering",
  },
  {
    id: "031",
    title: "RAG Architecture II: Hybrid Search & Re-ranking",
    failure: "Semantic Drift (The Specificity Trap)",
    lens: "Reliability",
    domain: "RAG / Search",
  },
  {
    id: "032",
    title: "RAG Architecture III: Grounding & Citations",
    failure: "Hallucinations masked as facts",
    lens: "Ethics",
    domain: "LLMs",
  },
  {
    id: "033",
    title: "Automated Evaluation (The RAG Triad)",
    failure: "Vibes-based Deployment",
    lens: "Governance",
    domain: "MLOps",
  },
  {
    id: "034",
    title: "Advanced Query Transformations",
    failure: "The Zero-Result Problem",
    lens: "Human Factors",
    domain: "LLMs",
  },
  {
    id: "035",
    title: "Semantic Caching (The Cost Firewall)",
    failure: "Bill Shock & Latency",
    lens: "Security",
    domain: "MLOps",
  },
  {
    id: "036",
    title: "Observability for Chains (Tracing)",
    failure: "Black Box Debugging",
    lens: "Privacy",
    domain: "MLOps",
  },
  {
    id: "037",
    title: "Adversarial Defense (Prompt Injection)",
    failure: "The DAN Attack",
    lens: "Security",
    domain: "LLMs",
  },
  {
    id: "038",
    title: "Privacy Engineering: PII Masking",
    failure: "Data Leaks to Third Parties",
    lens: "Governance",
    domain: "Security",
  },
  {
    id: "039",
    title: "Vector Database Operations (Scale)",
    failure: "Metadata Explosion",
    lens: "Security",
    domain: "Data Infra",
  },
  {
    id: "040",
    title: "The Fine-Tuning Pivot (Build vs. Buy)",
    failure: "Over-engineered RAG",
    lens: "Business Strategy",
    domain: "MLOps",
  },
];

/**
 * Calculates the day of the year (1-365) for a given date in 2026.
 * January 1st = 1, January 25th = 25, February 1st = 32, etc.
 * 2026 is not a leap year, so there are 365 days.
 */
export function getDayOfYear2026(date: Date = new Date()): number {
  // Create the start of year 2026 in the same timezone
  const startOf2026 = new Date(date.getFullYear(), 0, 1); // January 1st of the current year
  
  // If we want to strictly enforce 2026 calendar
  if (date.getFullYear() !== 2026) {
    // If before 2026, no days unlocked; if after 2026, all days unlocked
    if (date.getFullYear() < 2026) return 0;
    if (date.getFullYear() > 2026) return 365;
  }
  
  // Calculate the difference in days
  const diffTime = date.getTime() - startOf2026.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Add 1 because January 1st should be day 1, not day 0
  return diffDays + 1;
}

/**
 * Checks if a day should be unlocked based on the current date.
 * A day is unlocked if its ID (as a number) is less than or equal to
 * the current day of the year in 2026.
 * 
 * Examples (for 2026 calendar):
 * - January 25th unlocks day 025
 * - February 1st unlocks day 032 (31 days of January + 1)
 */
export function isDayUnlocked(id: string): boolean {
  const day = daysRegistry.find((d) => d.id === id);
  if (!day) return false;
  
  const dayNumber = parseInt(id, 10);
  const currentDayOfYear = getDayOfYear2026();
  
  return dayNumber <= currentDayOfYear;
}

/**
 * Returns the count of unlocked days based on the current date.
 */
export function getUnlockedDaysCount(): number {
  const currentDayOfYear = getDayOfYear2026();
  return daysRegistry.filter((d) => parseInt(d.id, 10) <= currentDayOfYear).length;
}

/**
 * Represents an audit log entry for a day release.
 */
export interface AuditLogEntry {
  date: string;          // Format: "2026-01-25"
  displayDate: string;   // Format: "Jan 25, 2026"
  eventType: "INIT" | "CONTENT";
  description: string;
  hash: string;
  dayId: string;
  dayTitle: string;
  dayFailure: string;
  dayLens: string;
}

/**
 * Generates a deterministic pseudo-hash for a day based on its ID.
 * This creates consistent hashes that look realistic.
 */
function generateDayHash(dayId: string): string {
  const hashChars = "0123456789abcdef";
  let hash = "";
  const seed = parseInt(dayId, 10);
  
  // Generate first 4 chars
  for (let i = 0; i < 4; i++) {
    hash += hashChars[(seed * (i + 1) * 7 + i * 3) % 16];
  }
  hash += "...";
  // Generate last 4 chars
  for (let i = 0; i < 4; i++) {
    hash += hashChars[(seed * (i + 5) * 11 + i * 13) % 16];
  }
  
  return hash;
}

/**
 * Converts a day of year (1-365) to a Date object in 2026.
 */
function dayOfYearToDate(dayOfYear: number): Date {
  const date = new Date(2026, 0, 1); // January 1, 2026
  date.setDate(dayOfYear);
  return date;
}

/**
 * Formats a date as "2026-01-25" (ISO format without time).
 */
function formatDateISO(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Formats a date as "Jan 25, 2026".
 */
function formatDateDisplay(date: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

/**
 * Generates audit log entries for all unlocked days.
 * Returns entries in reverse chronological order (newest first).
 * 
 * Each day corresponds to a specific date in 2026:
 * - Day 001 = January 1, 2026
 * - Day 025 = January 25, 2026
 * - Day 032 = February 1, 2026
 */
export function getAuditLogEntries(): AuditLogEntry[] {
  const currentDayOfYear = getDayOfYear2026();
  const entries: AuditLogEntry[] = [];
  
  // Get all unlocked days
  const unlockedDays = daysRegistry.filter(
    (d) => parseInt(d.id, 10) <= currentDayOfYear
  );
  
  // Generate entries for each unlocked day
  for (const day of unlockedDays) {
    const dayNumber = parseInt(day.id, 10);
    const releaseDate = dayOfYearToDate(dayNumber);
    
    entries.push({
      date: formatDateISO(releaseDate),
      displayDate: formatDateDisplay(releaseDate),
      eventType: dayNumber === 1 ? "INIT" : "CONTENT",
      description: dayNumber === 1 
        ? `Initial Commit & Day ${day.id}`
        : `Release Day ${day.id}`,
      hash: generateDayHash(day.id),
      dayId: day.id,
      dayTitle: day.title,
      dayFailure: day.failure,
      dayLens: day.lens,
    });
  }
  
  // Sort by day number descending (newest first)
  entries.sort((a, b) => parseInt(b.dayId, 10) - parseInt(a.dayId, 10));
  
  return entries;
}

/**
 * Gets the latest audit log entry (most recently released day).
 */
export function getLatestAuditLogEntry(): AuditLogEntry | null {
  const entries = getAuditLogEntries();
  return entries.length > 0 ? entries[0] : null;
}
