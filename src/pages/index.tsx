import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/Homepage/features';
import GitHubContributors from '@site/src/components/GitHubContributors';
import FeatureHighlights from '@site/src/components/FeatureHighlights';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--background')}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--left">
            <Heading as="h3" className="hero-title">
            Synentra: Intent-Aware Governance Gateway for Autonomous AI Agents
            </Heading>
            <p className="hero-subtitle">{siteConfig.tagline}</p>
            <div className='{styles.buttons} text--left padding-top--lg'>
              <Link className="button button--quickstart button--lg margin-right--md margin-bottom--md"
                to="/docs/getting-started">
                Get started
              </Link>
              <Link className="button hero-button--secondary button--lg margin-right--md margin-bottom--md"
                to="docs/api-reference">
                API Reference
              </Link>
            </div>
          </div>
        </div>
        <FeatureHighlights />
      </div>
    </header>
  );
}

function HomepageAboutSynentra() {
  return (
    <section className="about-section">
      <div className="container">
      <div className="about-wrapper">
        <h2 className="about-title">What is Synentra?</h2>
        <p>
          In today’s enterprise landscape, autonomous AI agents are rapidly transforming how work gets done — 
          from automating customer support and data analysis to orchestrating complex multi‑step operations. 
          Yet, existing API gateways and security tools were not designed for the unique challenges of agentic AI: 
          understanding intent, managing dynamic trust, and enforcing granular policies at near‑real‑time speeds. 
          <b>Synentra breaks these barriers</b>. Built on .NET, this lightweight, intent‑aware governance gateway 
          intercepts every outbound call from AI agents, validates their identity, checks dynamic policies, 
          and escalates high‑risk actions for human approval. Its pluggable architecture integrates seamlessly 
          with your existing infrastructure — from OPA and Redis to ML‑powered semantic analysis.
        </p>

        <p>
          The mission of Synentra is clear: deliver a production‑ready, near‑real‑time governance layer that 
          enables organizations to safely deploy autonomous AI agents without compromising security, compliance, 
          or operational control. Synentra balances deterministic policy enforcement (attribute‑based access control) 
          with adaptive risk scoring and optional semantic intent classification — all while maintaining sub‑20ms 
          latency for the majority of requests. At its core, Synentra decouples agent identity, policy evaluation, 
          and human‑in‑the‑loop (HITL) workflows through a clean, modular architecture. Policies are expressed 
          as code (JSON or OPA Rego) and can be hot‑reloaded. Agents authenticate with short‑lived JWTs, 
          and every request is audited in a tamper‑evident log. Whether you’re running a single bot or a fleet 
          of thousands, Synentra gives you the visibility, governance, and confidence to let AI agents act — 
          safely and autonomously.
        </p>
      </div>
      </div>
    </section>

  );
}

function HomepageContributors() {
  return (
    <section className="contributorsSection">
      <div className="container">
        <Heading as="h2" className="contributorsTitle">
          Meet Our Contributors
        </Heading>

        <p className="contributorsDescription">
          Synentra thrives thanks to our dedicated community of contributors. Their expertise,
          creativity, and commitment shape every release. We are proud to introduce the people
          who make this project possible.
        </p>

        <div className="contributorsGridWrapper">
          <GitHubContributors owner="synentra" repo="synentra" />
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Streamline and orchestrate processes with Synentra, .NET-based workflow automation platform`}
      description="Design, control, and automate every step of your workflow—linking ideas, decisions, and actions into a single, smart execution engine—all without writing a line of code.">
      <HomepageHeader />
      <main>
        <HomepageAboutSynentra />
        <HomepageFeatures />
        <HomepageContributors />
      </main>
    </Layout>
  );
}
