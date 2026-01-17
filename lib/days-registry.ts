export type DayStatus = "done" | "locked";

export interface DayRegistryItem {
  id: string;
  title: string;
  failure: string;
  lens: string;
  domain: string;
  status: DayStatus;
}

export const daysRegistry: DayRegistryItem[] = [
  { id: "001", title: "The Sanctity of the Environment", failure: "Dependency Hell", lens: "Reproducibility", domain: "MLOps", status: "done" },
  { id: "002", title: "Version Control for Data & Code", failure: "Silent Drift", lens: "Reproducibility", domain: "Data Infra", status: "done" },
  { id: "003", title: "Containerization Basics (Docker)", failure: "Environment Skew", lens: "Production", domain: "Infra", status: "done" },
  { id: "004", title: "Unit Testing for Data Science", failure: "Silent Logic Failure", lens: "Safety", domain: "QA", status: "done" },
  { id: "005", title: "Experiment Tracking & The 'Zombie Model' Problem", failure: "Zombie Models", lens: "Reproducibility", domain: "MLOps", status: "done" },
  { id: "006", title: "Exploratory Data Analysis (EDA) & Profiling", failure: "Digital Redlining", lens: "Safety", domain: "Data Science", status: "done" },
  { id: "007", title: "Feature Engineering & Selection", failure: "Data Leakage", lens: "Reproducibility", domain: "Data Science", status: "done" },
  { id: "008", title: "Baseline Models & Benchmarking", failure: "Complexity Tax", lens: "Governance", domain: "Data Science", status: "done" },
  { id: "009", title: "Evaluation Metrics for Business", failure: "Metric Misalignment", lens: "Production", domain: "Data Science", status: "done" },
  { id: "010", title: "Model Validation Strategies", failure: "Temporal Leakage", lens: "Security", domain: "Data Science", status: "done" },
  { id: "011", title: "Algorithmic Fairness: Auditing & Mitigation Pipelines", failure: "Deployment of Discriminatory Models", lens: "Ethics", domain: "Model Evaluation", status: "done" },
  { id: "012", title: "Explainable AI (XAI): From Black Box to Glass Box", failure: "Stakeholder Rejection (The Black Box Problem)", lens: "Human Factors", domain: "Model Evaluation", status: "done" },
  { id: "013", title: "Data Privacy & Anonymization: The Toxic Waste Model", failure: "Regulatory Non-Compliance (GDPR/CCPA)", lens: "Governance", domain: "Data Engineering", status: "done" },
  { id: "014", title: "Model Cards: The 'Nutrition Label' for AI", failure: "Model Misuse & Context Collapse", lens: "Ethics", domain: "Governance", status: "done" },
  { id: "015", title: "The Generative Shift: LLMs, APIs, and Unit Economics", failure: "Architectural Mismatch & Cost Blowout", lens: "Security", domain: "LLMs / Generative AI", status: "done" },
  { id: "016", title: "Cloud Infrastructure for AI: Compute, Cost, and Carbon", failure: "Bill Shock & Resource Starvation", lens: "Sustainability", domain: "Infrastructure", status: "done" },
  { id: "017", title: "CI/CD for ML: The Death of 'It Works on My Machine'", failure: "Manual Deployment Errors", lens: "Security", domain: "MLOps", status: "done" },
  { id: "018", title: "Data Lineage: The Chain of Custody for AI", failure: "The 'Orphan Model' (Provenance Collapse)", lens: "Governance", domain: "Data Engineering", status: "locked" },
  { id: "019", title: "The ROI of AI: Translating F1 Scores to P&L", failure: "Project Cancellation (The 'Science Project' Trap)", lens: "Ethics", domain: "Strategy", status: "locked" },
  { id: "020", title: "Phase 1 Capstone: The 'End-to-End' Production Pipeline", failure: "Integration Hell (Fragmented Architecture)", lens: "Reproducibility", domain: "Orchestration", status: "locked" },
  { id: "021", title: "The LLM API Landscape (OpenAI, Anthropic, Mistral)", failure: "Vendor Lock-in", lens: "Governance", domain: "MLOps", status: "locked" },
  { id: "022", title: "Prompt Engineering I: Structure & Context", failure: "Garbage In, Garbage Out (Ambiguity)", lens: "Human Factors", domain: "MLOps", status: "locked" },
  { id: "023", title: "Prompt Engineering II: Reasoning (CoT & ReAct)", failure: "Logic Hallucination", lens: "Safety", domain: "LLMs", status: "locked" },
  { id: "024", title: "Structured Outputs (JSON Mode & Function Calling)", failure: "Pipeline Breaks (Parser Errors)", lens: "Security", domain: "MLOps", status: "locked" },
  { id: "025", title: "Building Conversational Memory: State Management Patterns", failure: "Conversational Amnesia (Statelessness)", lens: "Privacy (Right to be Forgotten)", domain: "Application Layer", status: "locked" },
  { id: "026", title: "Evaluating Generative Models (Beyond Accuracy)", failure: "The 'Vibe Check' Trap", lens: "Human Factors", domain: "MLOps", status: "locked" },
];

export function isDayUnlocked(id: string): boolean {
  const day = daysRegistry.find((d) => d.id === id);
  return day?.status === "done";
}
