import styles from "./page.module.css";
import { AlertCircle } from "lucide-react";
import LensTag from "../../components/LensTag";

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Placeholder content based on ID. In a real app, fetch from markdown files or CMS.
  // We'll hardcode Day 001 for demo purposes.
  
  return (
    <div className="container">
      <div className={styles.articleContainer}>
        <main>
          <div className={styles.breadcrumb}>
            DAY {id} / GOVERNANCE / RELIABILITY
          </div>
          
          <h1 className={styles.title}>Defining the Operational Design Domain</h1>
          
          <div className={styles.abstract}>
            Before writing inference code, we must rigorously define the boundary conditions 
            under which the system is authorized to operate.
          </div>

          <div className={styles.tags}>
             <LensTag>Safety</LensTag>
             <LensTag>Governance</LensTag>
             <LensTag>ISO 21448</LensTag>
          </div>

          <div className={styles.auditNote}>
            <div className={styles.auditTitle}>
              <AlertCircle size={16} /> Critical Audit Note
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Failures to strictly define the ODD is the primary cause of &quot;silent failures&quot; in generative AI systems.
              Regulators are starting to demand this document as part of risk types.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeader}>01. The Problem: Implicit Context</h2>
            <div className={styles.prose}>
              <p>
                Most machine learning models are trained on a specific distribution of data (e.g., high 
                resolution medical images from US hospitals) but deployed into a world that contains 
                infinite variation (e.g., low-resolution images from mobile devices in rural clinics).
              </p>
              <p>
                When a model encounters input outside its training distribution, it does not typically fail 
                with an error. Instead, it confidently output a wrong prediction. This is Out-of-Distribution 
                (OOD) Silent Failure.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeader}>02. The Pattern: Explicit ODD Manifest</h2>
            <div className={styles.prose}>
              <p>
                We borrow the concept of &quot;Operational Design Domain&quot; (ODD) from autonomous vehicle 
                safety standards. The ODD is a formal specification of the conditions under which the 
                system is designed to function.
              </p>
              <p>
                In software terms, treat this as a contract. If input does not meet the ODD contract, the 
                system must refuse to infer. It is better to return a &quot;422 Unprocessable Entity&quot; than a 
                hallucination.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeader}>03. Implementation: ODD.yaml</h2>
            <div className={styles.prose}>
              <p>
                We implement this contract via a strict, machine-readable configuration.
                This manifest loads into the inference service at startup.
              </p>
              <pre className={styles.codeBlock}>
{`# odd_manifest.yaml
version: "1.0.0"

input_constraints:
  resolution: { min: [1024, 1024], max: [4096, 4096] }
  colorspace: ["RGB"]
  data_type: ["float32"]
  content_format: ["image/jpeg", "image/png"]
  max_file_size_mb: 15

semantics:
  required_entities: ["person", "face"]
  forbidden_entities: ["minor", "watermark"]

environment:
  region: ["us-east-1", "eu-west-1"]
  latency_budget_ms: 200`}
              </pre>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeader}>04. Runtime Enforcement</h2>
            <div className={styles.prose}>
              <p>
                The inference pipeline must include a blocking ODD Guard stage before model 
                invocation. This stage validates the incoming request against the stored manifest.
              </p>
              <p>
                This creates a &quot;hard boundary&quot;—requests that violate the ODD are never seen by the model. 
                This eliminates an entire class of risks by converting them from probabilistic to deterministic 
                errors.
              </p>
            </div>
            
          </div>

        </main>
        
        <aside className={styles.sidebar}>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Related Days</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'var(--accent-color)' }}>Day 012: Input Guardrails</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'var(--accent-color)' }}>Day 045: Model Cards</a></li>
            </ul>
          </div>
          
           <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Audit Logs</h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Last Updated: Dec 12, 2024<br/>
              Author: System Arch Group
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
