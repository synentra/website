import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './design-partners.module.css';

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12.5L9.2 17L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12H19M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StepNumber = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.stepNumber}>{children}</div>
);

export default function DesignPartners(): JSX.Element {
  const logoUrl = useBaseUrl('/img/logo.svg');

  return (
    <Layout
      title="Design Partners"
      description="Become a Synentra Design Partner and help shape open-source governance for autonomous AI agents."
    >
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                DESIGN PARTNER PROGRAM
              </div>

              <h1 className={styles.heroTitle}>
                Help shape the future of
                <span className={styles.heroAccent}>
                  {' '}
                  AI agent governance.
                </span>
              </h1>

              <p className={styles.heroDescription}>
                We are looking for a small number of teams building
                autonomous AI agents to evaluate Synentra with real-world
                workflows.
              </p>

              <p className={styles.heroSubtext}>
                No cost. No contract. No sales commitment.
                <br />
                Just real engineering, real use cases, and honest feedback.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="mailto:contact@synentra.io?subject=Synentra Design Partner"
                  className={styles.primaryButton}
                >
                  Become a Design Partner
                  <ArrowIcon />
                </a>

                <Link
                  to="/docs"
                  className={styles.secondaryButton}
                >
                  Explore Synentra
                </Link>
              </div>
            </div>

            {/* Governance flow */}
            <div className={styles.flowCard}>
              <div className={styles.flowHeader}>
                <div className={styles.flowStatus}>
                  <span className={styles.statusDot} />
                  GOVERNANCE FLOW
                </div>
                <span className={styles.flowLive}>LIVE</span>
              </div>

              <div className={styles.flow}>
                <div className={styles.flowNode}>
                  <span className={styles.nodeIcon}>AI</span>
                  <div>
                    <strong>AI Agent</strong>
                    <small>Request</small>
                  </div>
                </div>

                <div className={styles.flowLine} />

                <div className={`${styles.flowNode} ${styles.synentraNode}`}>
                  <span className={styles.nodeIcon}>S</span>
                  <div>
                    <strong>Synentra</strong>
                    <small>Evaluate &amp; enforce</small>
                  </div>
                </div>

                <div className={styles.decisionRow}>
                  <span>ALLOW</span>
                  <span>REVIEW</span>
                  <span>DENY</span>
                </div>

                <div className={styles.flowLine} />

                <div className={styles.flowNode}>
                  <span className={styles.nodeIcon}>API</span>
                  <div>
                    <strong>Upstream API</strong>
                    <small>Execute action</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className={styles.section}>
          <div className={styles.containerNarrow}>
            <div className={styles.sectionLabel}>WHY DESIGN PARTNERS?</div>

            <h2 className={styles.sectionTitle}>
              We don't want to build governance
              <br />
              <span>in a vacuum.</span>
            </h2>

            <p className={styles.sectionDescription}>
              Autonomous agents are moving from experiments into systems
              that can access APIs, data, tools, and business operations.
              Synentra is being built to provide a governance layer for
              those systems.
            </p>

            <p className={styles.sectionDescription}>
              Design Partners help us validate that we're solving real
              problems—not problems we imagine developers might have.
            </p>
          </div>
        </section>

        {/* What we offer */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <div className={styles.sectionLabel}>WHAT YOU GET</div>
                <h2 className={styles.sectionTitle}>
                  Work directly with the project.
                </h2>
              </div>

              <p className={styles.sectionHeaderText}>
                This is an engineering collaboration, not a sales program.
              </p>
            </div>

            <div className={styles.cardGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardNumber}>01</div>
                <h3>Free evaluation</h3>
                <p>
                  Run Synentra with a real agent workflow in your
                  development or staging environment.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardNumber}>02</div>
                <h3>Integration support</h3>
                <p>
                  Get direct help integrating Synentra with your existing
                  agents, APIs, tools, and infrastructure.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardNumber}>03</div>
                <h3>Policy design</h3>
                <p>
                  Work together to define practical governance policies
                  for your specific agent workflows.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardNumber}>04</div>
                <h3>Roadmap influence</h3>
                <p>
                  Your experience directly informs what we build, improve,
                  simplify, or remove.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who we're looking for */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.twoColumn}>
              <div>
                <div className={styles.sectionLabel}>WHO WE'RE LOOKING FOR</div>

                <h2 className={styles.sectionTitle}>
                  Teams already building
                  <br />
                  <span>AI agents.</span>
                </h2>

                <p className={styles.sectionDescription}>
                  You don't need to be in production. A proof of concept,
                  staging environment, or active development project is
                  enough.
                </p>
              </div>

              <div className={styles.checkList}>
                {[
                  'AI agent platforms',
                  'Agentic workflows and automation',
                  'AI-powered SaaS products',
                  'Developer and coding agents',
                  'Enterprise AI systems',
                  'AI infrastructure and security',
                ].map((item) => (
                  <div className={styles.checkItem} key={item}>
                    <span className={styles.checkIcon}>
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Example */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.exampleGrid}>
              <div>
                <div className={styles.sectionLabel}>A SIMPLE EXAMPLE</div>

                <h2 className={styles.sectionTitle}>
                  Let the agent work.
                  <br />
                  <span>Control the risky actions.</span>
                </h2>

                <p className={styles.sectionDescription}>
                  Synentra can sit between your agent and the systems it
                  interacts with, applying policies before an action reaches
                  the upstream API.
                </p>
              </div>

              <div className={styles.codeCard}>
                <div className={styles.codeHeader}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.codeContent}>
                  <div>
                    <span className={styles.codeMuted}>Agent</span>
                    <span> → Refund customer $4,500</span>
                  </div>

                  <div className={styles.codeArrow}>↓</div>

                  <div>
                    <span className={styles.codeAccent}>Synentra</span>
                    <span> → Risk evaluation</span>
                  </div>

                  <div className={styles.codeArrow}>↓</div>

                  <div className={styles.codeReview}>
                    <span>HUMAN APPROVAL</span>
                  </div>

                  <div className={styles.codeArrow}>↓</div>

                  <div>
                    <span className={styles.codeMuted}>Payment API</span>
                    <span> → Execute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <div className={styles.sectionLabel}>HOW IT WORKS</div>
                <h2 className={styles.sectionTitle}>
                  Start small. Learn quickly.
                </h2>
              </div>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <StepNumber>01</StepNumber>
                <div>
                  <h3>Tell us about your workflow</h3>
                  <p>
                    Share what your agent does, what it can access, and
                    what you would like to govern.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <StepNumber>02</StepNumber>
                <div>
                  <h3>Have a technical conversation</h3>
                  <p>
                    We'll look at your architecture and identify a
                    practical starting point.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <StepNumber>03</StepNumber>
                <div>
                  <h3>Run a small pilot</h3>
                  <p>
                    Integrate Synentra into one workflow in a development
                    or staging environment.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <StepNumber>04</StepNumber>
                <div>
                  <h3>Build from what we learn</h3>
                  <p>
                    Your feedback helps shape Synentra's implementation
                    and roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we ask */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.containerNarrow}>
            <div className={styles.sectionLabel}>WHAT WE ASK</div>

            <h2 className={styles.sectionTitle}>
              Honest feedback is more valuable
              <br />
              <span>than a testimonial.</span>
            </h2>

            <div className={styles.askGrid}>
              <div className={styles.askItem}>
                <CheckIcon />
                <span>A real agent workflow to evaluate</span>
              </div>

              <div className={styles.askItem}>
                <CheckIcon />
                <span>A development or staging environment</span>
              </div>

              <div className={styles.askItem}>
                <CheckIcon />
                <span>Technical feedback during integration</span>
              </div>

              <div className={styles.askItem}>
                <CheckIcon />
                <span>Honest feedback about what doesn't work</span>
              </div>
            </div>

            <p className={styles.disclaimer}>
              There is no requirement to become a customer, continue using
              Synentra, or publicly endorse the project.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow} />

          <div className={styles.containerNarrow}>
            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>LET'S BUILD TOGETHER</div>

              <h2 className={styles.ctaTitle}>
                Have an AI agent
                <br />
                <span>we can work with?</span>
              </h2>

              <p className={styles.ctaDescription}>
                We're looking for a few teams willing to put Synentra
                against a real problem and help us make it better.
              </p>

              <a
                href="mailto:contact@synentra.io?subject=Synentra Design Partner"
                className={styles.primaryButton}
              >
                Become a Design Partner
                <ArrowIcon />
              </a>

              <p className={styles.ctaNote}>
                Tell us about your agent, architecture, and the workflow
                you'd like to evaluate.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}