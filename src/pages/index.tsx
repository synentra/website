import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/Homepage/features';
import GitHubContributors from '@site/src/components/GitHubContributors';
import FadingLine from '@site/src/components/FadingLine';

import styles from './index.module.css';

function CheckIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M16.7 5.8 8.5 14 3.7 9.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArrowIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GitHubIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7A11.5 11.5 0 0 0 8.36 23c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.28 5.67.42.36.79 1.07.79 2.16v3.21c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
  );
}

function ShieldIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 5 6v5c0 4.6 2.9 8.8 7 10 4.1-1.2 7-5.4 7-10V6l-7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m9 12 2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GaugeIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 30a16 16 0 1 1 32 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 24l8-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      <path d="M10 36h28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function StackIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="10" y="8" width="28" height="8" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="10" y="20" width="28" height="8" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="10" y="32" width="28" height="8" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="17" cy="12" r="1.8" fill="currentColor" />
      <circle cx="17" cy="24" r="1.8" fill="currentColor" />
      <circle cx="17" cy="36" r="1.8" fill="currentColor" />
    </svg>
  );
}

function CodeShieldIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 6 12 10v10c0 8 5.1 15.4 12 18 6.9-2.6 12-10 12-18V10L24 6Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="m21 19-4 5 4 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m27 19 4 5-4 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HitlIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="17" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="31" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M8 37c1.8-5.5 6.3-8 9-8s7.2 2.5 9 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 37c1.8-5.5 6.3-8 9-8s7.2 2.5 9 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

interface DecisionStepProps {
  number: string;
  title: string;
  value: string;
  warning?: boolean;
}

function DecisionStep({
  number,
  title,
  value,
  warning = false,
}: DecisionStepProps): JSX.Element {
  return (
    <div className={styles.pipelineStep}>
      <span className={styles.stepNumber}>{number}</span>
      <div className={styles.stepContent}>
        <span>{title}</span>
        <strong>{value}</strong>
      </div>
      {warning ? (
        <span className={styles.warningStatus}>Review</span>
      ) : (
        <span className={styles.completeStatus}>
          <CheckIcon />
        </span>
      )}
    </div>
  );
}

function HomepageHeader(): JSX.Element {
  const dockerCommand =
    'docker run -p 7080:7080 ghcr.io/synentra/synentra:latest';

  const copyCommand = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(dockerCommand);
    } catch {
      // Clipboard access can be unavailable in restricted contexts.
    }
  };

  return (
    <header className={styles.hero}>
      <div className={styles.softGlow} aria-hidden="true" />
      <div className={styles.waveLeft} aria-hidden="true" />
      <div className={styles.waveRight} aria-hidden="true" />

      <div className={`${styles.heroContainer} container`}>
        <section className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Open-source governance for autonomous AI agents
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleBlack}>Govern every</span>
            <span className={styles.titleBlack}>AI-agent action</span>
            <span className={styles.titleRed}>before it reaches</span>
            <span className={styles.titleRed}>your APIs.</span>
          </h1>

          <p className={styles.description}>
            Synentra understands agent intent, calculates contextual risk,
            applies deterministic policies, and routes sensitive actions for
            human approval.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryButton} to="/docs/getting-started">
              Get started
              <ArrowIcon />
            </Link>

            <Link
              className={styles.secondaryButton}
              href="https://github.com/synentra/synentra"
            >
              <GitHubIcon />
              View on GitHub
            </Link>
          </div>

          <div className={styles.proof}>
            <span><CheckIcon /> Runs locally</span>
            <span><CheckIcon /> No agent code changes</span>
            <span><CheckIcon /> Apache 2.0</span>
          </div>

          <div className={styles.install}>
            <div className={styles.installHeader}>Quick install with Docker</div>
            <div className={styles.command}>
              <span className={styles.prompt}>$</span>
              <code>{dockerCommand}</code>
              <button type="button" onClick={copyCommand} aria-label="Copy Docker command">
                Copy
              </button>
            </div>
          </div>
        </section>

        <section className={styles.visual} aria-label="Synentra Gateway decision preview">
          <div className={styles.gatewayCard}>
            <div className={styles.cardHeader}>
              <div className={styles.windowControls} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className={styles.cardTitle}>Synentra Gateway</span>
              <span className={styles.liveStatus}><span /> Live</span>
            </div>

            <div className={styles.requestHeader}>
              <div>
                <span className={styles.requestLabel}>Incoming action</span>
                <strong>Delete customer account</strong>
              </div>
              <span className={styles.method}>DELETE</span>
            </div>

            <div className={styles.pipeline}>
              <DecisionStep number="01" title="Intent classified" value="destructive_delete" />
              <DecisionStep number="02" title="Risk evaluated" value="92 / 100 · Critical" warning />
              <DecisionStep number="03" title="Policy evaluated" value="production-destructive-actions" />
            </div>

            <div className={styles.decision}>
              <div className={styles.decisionIcon}><ShieldIcon /></div>
              <div>
                <span>Final decision</span>
                <strong>Human approval required</strong>
              </div>
              <span className={styles.hitlBadge}>HITL</span>
            </div>

            <div className={styles.cardFooter}>
              <div>
                <span>Latency</span>
                <strong>28.4 ms</strong>
              </div>
              <div>
                <span>Agent trust</span>
                <strong>0.78</strong>
              </div>
              <div>
                <span>Request ID</span>
                <strong>req_8f2a</strong>
              </div>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.intentCard}`}>
            <span>Intent confidence</span>
            <strong>96.8%</strong>
          </div>

          <div className={`${styles.floatingCard} ${styles.auditCard}`}>
            <span className={styles.auditIcon}><ShieldIcon /></span>
            <div>
              <strong>Audit event</strong>
              <span>recorded</span>
            </div>
          </div>
        </section>
      </div>

      <div className={`${styles.metrics} container`}>
        <div className={styles.metricItem}>
          <div className={styles.metricIcon}><GaugeIcon /></div>
          <div className={styles.metricContent}>
            <strong>&lt;35 ms</strong>
            <span>Target P85 latency</span>
          </div>
        </div>

        <div className={styles.metricItem}>
          <div className={styles.metricIcon}><StackIcon /></div>
          <div className={styles.metricContent}>
            <strong>Local-first</strong>
            <span>Private intent classification</span>
          </div>
        </div>

        <div className={styles.metricItem}>
          <div className={styles.metricIcon}><CodeShieldIcon /></div>
          <div className={styles.metricContent}>
            <strong>Policy as Code</strong>
            <span>Versioned governance rules</span>
          </div>
        </div>

        <div className={styles.metricItem}>
          <div className={styles.metricIcon}><HitlIcon /></div>
          <div className={styles.metricContent}>
            <strong>HITL</strong>
            <span>Human oversight for high risk</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageAboutSynentra(): JSX.Element {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-kicker">Intent-aware governance</div>
          <h2 className="about-title">What is Synentra?</h2>
          <p>
            In today’s enterprise landscape, autonomous AI agents are rapidly
            transforming how work gets done — from automating customer support
            and data analysis to orchestrating complex multi-step operations.
            Yet, existing API gateways and security tools were not designed for
            the unique challenges of agentic AI: understanding intent, managing
            dynamic trust, and enforcing granular policies at near-real-time
            speeds. <b>Synentra breaks these barriers</b>. Built on .NET, this
            lightweight, intent-aware governance gateway intercepts every
            outbound call from AI agents, validates their identity, checks
            dynamic policies, and escalates high-risk actions for human approval.
          </p>
          <p>
            Synentra delivers a production-ready governance layer without
            compromising security, compliance, or operational control. It
            combines deterministic policy enforcement, adaptive risk scoring,
            semantic intent classification, short-lived JWT identity, policy as
            code, and tamper-evident audit records in a modular architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

function HomepageContributors(): JSX.Element {
  return (
    <section className="contributorsSection">
      <div className="container">
        <div className="section-kicker">Open-source community</div>
        <Heading as="h2" className="contributorsTitle">
          Meet Our Contributors
        </Heading>
        <p className="contributorsDescription">
          Synentra thrives thanks to contributors whose expertise, creativity,
          and commitment shape every release.
        </p>
        <div className="contributorsGridWrapper">
          <GitHubContributors owner="synentra" repo="synentra" />
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Intent-Aware Governance Gateway for Autonomous AI Agents"
      description="The essential security layer for autonomous AI. Evaluate agent intent, enforce guardrails, and route high-risk operations to human approval workflows."
    >
      <HomepageHeader />
      <main>
        <FadingLine />
        <HomepageAboutSynentra />
        <FadingLine />
        <HomepageFeatures />
        <FadingLine />
        <HomepageContributors />
      </main>
    </Layout>
  );
}
