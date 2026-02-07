import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className="container">
      {/* Intro Section */}
      <div className={styles.section}>
        <h1 className={styles.pageTitle} style={{ fontSize: '3rem', lineHeight: 1.1 }}>Escaping Tutorial Hell</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 400, color: 'var(--text-secondary)' }}>
          Why I’m Committing to 100 Days of Responsible AI
        </h2>
        
        <div className={styles.prose}>
          <p>
            I have a folder on my laptop full of half-finished or undeployed projects.
          </p>
          <p>
            There’s a chatbot that works 80% of the time. There’s a fraud detection script that runs perfectly in a Jupyter Notebook but has never seen a production server. There are countless &quot;Hello World&quot; implementations of the latest LLM frameworks.
          </p>
          <p>
            For a long time, I thought this meant I was learning.
          </p>
          <p>
            But recently, I hit a wall. I realized that while I can make AI work, I didn’t know how to make it <strong>matter</strong>.
          </p>
          <p>
            If a CEO asked me, &quot;Is this model safe to deploy to a million users?&quot; I couldn&apos;t honestly answer &quot;Yes.&quot; If an auditor asked, &quot;Can you reproduce the exact decision this model made three months ago?&quot; I would have to say &quot;No.&quot;
          </p>
          <p>
            That gap—the massive chasm between a working demo and a responsible, production-grade system—is what I am trying to cross.
          </p>
        </div>
      </div>

      {/* The Senior Mindset */}
      <div className={styles.section}>
        <span className={styles.subHeading}>The &quot;Senior Engineer&quot; Mindset</span>
        <div className={styles.prose}>
          <p>
            I realized that the difference between a junior engineer and a leader isn’t just about knowing more syntax. It’s about responsibility.
          </p>
          <p>
            A junior engineer celebrates when the code runs. A senior engineer worries about what happens when the data drifts, when the dependency updates, or when a bad actor tries to inject a prompt.
          </p>
          <p>
             I started this blog series, <strong>100 Days of Responsible AI Engineering</strong>, to force myself into that senior mindset.
          </p>
        </div>
      </div>

      {/* Why Responsible AI - Using Cards */}
      <div className={styles.section}>
        <span className={styles.subHeading}>Why &quot;Responsible&quot; AI?</span>
        <div className={styles.prose} style={{ marginBottom: '1rem' }}>
          <p>&quot;Responsible&quot; sounds like a buzzword, but to me, it’s a technical constraint. It means building systems that are:</p>
        </div>
        <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Reliable</h3>
            <p className={styles.cardText}>
              They don&apos;t silently fail when the world changes.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Auditable</h3>
            <p className={styles.cardText}>
              We know exactly why they did what they did.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Secure</h3>
            <p className={styles.cardText}>
              They are hardened against attacks, not just bugs.
            </p>
          </div>
           <div className={styles.card}>
            <h3 className={styles.cardTitle}>Ethical</h3>
            <p className={styles.cardText}>
              They are designed with safety guards, not just accuracy metrics.
            </p>
          </div>
        </div>
      </div>

      {/* My Commitment & For the Builders */}
      <div className={styles.section}>
        <span className={styles.subHeading}>My Commitment</span>
         <div className={styles.prose}>
          <p>
            I am not writing this series as a guru on a mountaintop. I am writing it as an engineer in the trenches.
          </p>
          <p>
             I am using this blog to simulate a high-stakes environment. For the next 100 days (or however long it takes me to do 100 posts), I am holding myself to a standard:
          </p>
          <ul style={{ listStyle: 'none', marginLeft: '0', marginTop: '1rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
                <strong>No toy problems.</strong> If it works in a notebook but fails in a container, it’s a failure.
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
                <strong>No hand-waving.</strong> &quot;It depends&quot; is not an answer. I have to make a decision and defend the trade-offs.
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
                <strong>Auditability first.</strong> If I can&apos;t track it, I won&apos;t build it.
            </li>
          </ul>
        </div>
      </div>

       <div className={styles.section} style={{ borderBottom: 'none' }}>
        <span className={styles.subHeading}>This is for the Builders</span>
        <div className={styles.prose}>
          <p>
            I’m writing this for myself, to solidify my own growth. But I’m also writing it for every other software engineer who feels the same Imposter Syndrome I do when looking at the complexity of modern MLOps.
          </p>
           <p>
            I want to move beyond &quot;copy-pasting tutorials&quot; and start engineering systems that I would be proud to put my name on.
          </p>
          <p>
             This is going to be hard. I’m going to struggle with tools I haven’t used before. I’m going to have to read boring documentation about compliance and governance.
          </p>
          <p>
            But that’s the work.
          </p>
          <p style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: 500, color: 'var(--accent-color)' }}>
              Welcome to Day 000. Let’s build something real.
          </p>
        </div>
      </div>
    </div>
  );
}
