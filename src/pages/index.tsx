import {useState, type ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import GitHubContributors from '@site/src/components/GitHubContributors';
import styles from './index.module.css';

const github = 'https://github.com/synentra/synentra';
const dockerCommand = 'docker run -p 7080:7080 ghcr.io/synentra/synentra:latest';

function DockerCommand(): ReactElement {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  async function copyCommand(): Promise<void> {
    try {
      await navigator.clipboard.writeText(dockerCommand);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  }
  return <div className={styles.dockerBox}>
    <div className={styles.dockerHeader}><span>RUN WITH DOCKER</span><button type="button" className={styles.copyButton} onClick={copyCommand} aria-label="Copy Docker command"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={copyStatus === 'copied' ? 'm5 12 4 4L19 6' : 'M9 5V3h12v14h-2 M3 7h12v14H3V7Z'} /></svg>{copyStatus === 'copied' ? 'Copied' : 'Copy'}</button></div>
    <pre className={styles.dockerCode}><code>{dockerCommand}</code></pre>
    <p className={styles.copyStatus} role="status">{copyStatus === 'copied' ? 'Command copied to clipboard.' : copyStatus === 'error' ? 'Clipboard access is unavailable. Select the command and copy it manually.' : ''}</p>
  </div>;
}

function SecurityIcon({kind = 'shield'}: {kind?: string}): ReactElement {
  const paths: Record<string, string> = {
    shield: 'M12 3 4.5 6v5c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10V6L12 3Z M8.5 12l2.5 2.5 4.5-5',
    policy: 'M7 3h10l3 3v15H4V3h3 M8 9h8 M8 13h8 M8 17h5',
    people: 'M15 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2 M15 4a4 4 0 0 1 0 8 M21 21v-2a4 4 0 0 0-3-3.9 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8',
    key: 'M15 3a6 6 0 0 0-5.5 8.4L3 18v3h3v-3h3v-3l3-3 M15 3a6 6 0 1 1-3 11 M16 7h.01',
    scope: 'M8 3H3v5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5 M8 12h8 M12 8v8',
    record: 'M5 3h14v18H5V3 M8 8h8 M8 12h8 M8 16h4',
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[kind] ?? paths.shield} /></svg>;
}

const scenarios = {
  allow: {label: 'Allow', operation: 'inventory.read', rule: 'Read access permitted', next: 'Proceed to admission', note: 'The request may proceed. Authority is checked again before dispatch.'},
  review: {label: 'Review', operation: 'inventory.adjust', rule: 'Human approval required', next: 'Wait for approval', note: 'Execution is paused. A reviewer decides, then the caller resumes approved work.'},
  deny: {label: 'Deny', operation: 'inventory.delete', rule: 'Operation restricted', next: 'Stop before execution', note: 'The request stops. No target action is dispatched.'},
};

function Arrow(): ReactElement {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
}

const capabilities = [
  ['Policies with context', 'Evaluate identity, scope, trust, risk, and configured intent evidence against versioned policies and explicit restrictions.'],
  ['Explicit operation boundaries', 'Register the actions agents can request and the systems they can reach. Bind each operation to its permitted target.'],
  ['Keep people in control', 'Pause requests that need review. Bind approval to the original request, then recheck authority when the caller resumes.'],
  ['Bound task authority', 'Use scoped, time-limited task grants and applicable budgets to constrain the operations an agent can perform.'],
  ['Control target access', 'Resolve credentials through target bindings. Enforce destination, network, and HTTPS requirements before external calls.'],
  ['Follow the outcome', 'Inspect decisions and execution records. Use configured outcome verification to investigate uncertain results.'],
];

const stages = [
  ['Evaluate the request', 'Resolve the caller and operation. Apply governance to decide whether work can proceed.', 'Identity · Scope · Intent evidence · Trust · Risk · Policy'],
  ['Admit authorized work', 'Check current authority and persist the authorized operation and target for execution.', 'Approvals · Task grants · Limits · Execution snapshot'],
  ['Execute with controls', 'Revalidate queued work, resolve credentials, and dispatch through the selected adapter.', 'HTTP / MCP · Outbound security · Execution records'],
];

function RequestExample(): ReactElement {
  const [decision, setDecision] = useState<keyof typeof scenarios>('review');
  const scenario = scenarios[decision];
  return (
    <figure className={styles.example} aria-labelledby="request-example-title">
      <div className={styles.exampleHeader}><span className={styles.panelLabel}>SYNENTRA / RUNTIME</span><span className={styles.exampleLabel}>Interactive example</span></div>
      <div className={styles.exampleBody}>
        <div className={styles.inputRow}><span className={styles.agentGlyph} aria-hidden="true">⌘</span><div><span className={styles.smallLabel}>AGENT REQUEST</span><code>{scenario.operation}</code></div><span className={styles.protocol}>HTTP / MCP</span></div>
        <div className={styles.connector} aria-hidden="true"><span /></div>
        <div className={styles.controlBoundary}>
          <div className={styles.controlHeading}><div className={styles.shield}><SecurityIcon /></div><div><p className={styles.smallLabel}>CONTROL BOUNDARY</p><Heading as="h2" id="request-example-title">Runtime governance</Heading></div></div>
          <div className={styles.controlTags}><span>Identity & scope</span><span>Policy & risk</span><span>Task authority</span></div>
          <div className={styles.decisionSelector} role="group" aria-label="Explore an illustrative governance decision">
            {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map(value => <button key={value} type="button" aria-pressed={decision === value} className={`${styles.decisionButton} ${decision === value ? styles.selectedDecision : ''}`} onClick={() => setDecision(value)}>{scenarios[value].label}</button>)}
          </div>
        </div>
        <div className={styles.connector} aria-hidden="true"><span /></div>
        <div className={styles.outcome} data-outcome={decision} aria-live="polite" aria-atomic="true"><div className={styles.outcomeHeading}><span className={styles.statusDot} aria-hidden="true" /><strong>{scenario.rule}</strong></div><p>{scenario.note}</p><span className={styles.nextStep}>{scenario.next} <Arrow /></span></div>
        <div className={styles.targetRow}><SecurityIcon kind="key" /><span>Credentials and outbound checks apply before target access.</span></div>
      </div>
      <figcaption className={styles.exampleCaption}>Illustrative policies · This preview does not execute requests.</figcaption>
    </figure>
  );
}

function Hero(): ReactElement {
  return <header className={styles.hero}>
    <div className={`container ${styles.heroGrid}`}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span aria-hidden="true" /> AI AGENT SECURITY · OPEN SOURCE</p>
        <Heading as="h1" className={styles.title}>Intent-Aware Runtime <span>Governance for AI Agents</span></Heading>
        <p className={styles.lead}>Let agents act. Keep authority in your hands.</p>
        <p className={styles.description}>Put security and control between agent decisions and real-world actions. Govern access to HTTP APIs and MCP tools with explicit policies, human approval, and durable execution.</p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/docs/quickstart/local-development">Get started <Arrow /></Link>
          <Link className={styles.secondaryButton} href={github}>View on GitHub <Arrow /></Link>
        </div>
        <ul className={styles.compatibility} aria-label="Project foundations"><li>HTTP + MCP</li><li>Self-hosted</li><li>Apache 2.0</li></ul>
        <DockerCommand />
      </div>
      <div className={styles.runtimeScene}>
        <div className={styles.sceneCaption}><span>FROM INTENT TO ACTION</span><span>A governed path to your systems</span></div>
        <svg className={styles.sceneWires} viewBox="0 0 1200 620" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="600" cy="310" rx="530" ry="270" /><ellipse cx="600" cy="310" rx="480" ry="235" /></svg>
        <div className={styles.sceneRail} data-side="agents">
          <span className={styles.railLabel}>01 / YOUR AGENTS</span>
          <div className={styles.endpoint}><span className={styles.endpointIcon}><SecurityIcon kind="scope" /></span><strong>AI agents</strong><span>Intent + requested action</span></div>
          <div className={styles.endpoint}><span className={styles.endpointIcon}><SecurityIcon kind="policy" /></span><strong>Applications</strong><span>REST and MCP clients</span></div>
          <p>Every request enters through an explicit control boundary.</p>
        </div>
        <RequestExample />
        <div className={styles.sceneRail} data-side="targets">
          <span className={styles.railLabel}>03 / YOUR SYSTEMS</span>
          <div className={styles.endpoint}><span className={styles.endpointIcon}><SecurityIcon kind="key" /></span><strong>HTTP APIs</strong><span>Registered operations</span></div>
          <div className={styles.endpoint}><span className={styles.endpointIcon}><SecurityIcon kind="record" /></span><strong>MCP tools</strong><span>Registered servers</span></div>
          <p>Target access follows authorization and outbound checks.</p>
        </div>
      </div>
    </div>
    <div className={`container ${styles.foundationStrip}`}>
      <div><SecurityIcon kind="scope" /><div><strong>Explicit authority</strong><span>Registered operations. Scoped access.</span></div></div>
      <div><SecurityIcon kind="people" /><div><strong>Human oversight</strong><span>Review when your policies require it.</span></div></div>
      <div><SecurityIcon kind="shield" /><div><strong>Controlled execution</strong><span>Revalidate authority before dispatch.</span></div></div>
    </div>
  </header>;
}

const capabilityDetails = [
  ['Versioned policies', 'Context-aware decisions'],
  ['Registered operations', 'Explicit target bindings'],
  ['Request-bound approvals', 'Authority checks on resume'],
  ['Scoped, time-limited grants', 'Applicable execution budgets'],
  ['Credential binding resolution', 'Destination and HTTPS checks'],
  ['Decision and execution records', 'Configured outcome verification'],
];

function Workflow(): ReactElement {
  return <section className={styles.section} aria-labelledby="workflow-title"><div className="container">
    <div className={styles.sectionHeading}>
      <div><p className={styles.kicker}>The runtime boundary</p><Heading as="h2" id="workflow-title">Control before the call.<br />Evidence after execution.</Heading></div>
      <p>Permission, execution, and a verified outcome are different things. Synentra keeps them distinct so you can understand what happened.</p>
    </div>
    <ol className={styles.workflow}>{stages.map(([title, text, detail], i) => <li key={title}><span className={styles.stageNumber}>0{i + 1}</span><Heading as="h3">{title}</Heading><p>{text}</p><div className={styles.stageDetail}>{detail}</div></li>)}</ol>
    <div className={styles.decisionLegend}><span><b className={styles.allow}>Allow</b> Proceed to admission</span><span><b className={styles.review}>Review</b> Pause for a decision</span><span><b className={styles.deny}>Deny</b> Stop the request</span></div>
    <Link className={styles.textLink} to="/docs/architecture/system-overview">Explore the architecture <Arrow /></Link>
  </div></section>;
}

function Capabilities(): ReactElement {
  return <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="capabilities-title"><div className="container">
    <div className={styles.sectionHeading}><div><p className={styles.kicker}>Security and governance</p><Heading as="h2" id="capabilities-title">Agent access.<br />On your terms.</Heading></div><p>Define what an agent may do, where it may act, and when a person needs to decide.</p></div>
    <div className={styles.capabilityGrid}>{capabilities.map(([title, text], i) => <article key={title} className={styles.capability}><div className={styles.capabilityTop}><SecurityIcon kind={['policy','scope','people','shield','key','record'][i]} /><span>0{i + 1}</span></div><Heading as="h3">{title}</Heading><p>{text}</p><ul className={styles.capabilityDetails}>{capabilityDetails[i].map(detail => <li key={detail}><span aria-hidden="true">↳</span>{detail}</li>)}</ul></article>)}</div>
    <p className={styles.providerNote}>Intent assessment depends on a configured provider. The current baseline requires an additional working implementation for semantic classification.</p>
  </div></section>;
}

function GetStarted(): ReactElement {
  return <section className={styles.section} aria-labelledby="start-title"><div className={`container ${styles.startPanel}`}>
    <div><p className={styles.kicker}>Built for your stack</p><Heading as="h2" id="start-title">Your agents. Your systems.<br />Your governance.</Heading><p>Self-host Synentra, connect your identity provider, and register the operations your agents need. Start with one HTTP target and expand from there.</p><div className={styles.actions}><Link className={styles.primaryButton} to="/docs/quickstart/local-development">Follow the QuickStart <Arrow /></Link><Link className={styles.textLink} to="/docs/getting-started">Read the introduction <Arrow /></Link></div></div>
    <div className={styles.setup}><p className={styles.setupLabel}>Your starting checklist</p><ul><li><span>01</span> .NET 10 and SQLite or PostgreSQL</li><li><span>02</span> An identity provider and issued tokens</li><li><span>03</span> A registered operation and target</li></ul><p>Self-host the runtime and connect the systems your agents need.</p></div>
  </div></section>;
}

function Community(): ReactElement {
  return <section className={`${styles.section} ${styles.community}`} aria-labelledby="community-title"><div className="container">
    <p className={styles.kicker}>Built in the open</p><Heading as="h2" id="community-title">Help shape governed agent execution.</Heading>
    <p className={styles.communityIntro}>Contribute code, improve the docs, or share what you need from Synentra in a real agent workflow.</p>
    <div className={styles.communityActions}><Link className={styles.textLink} href={`${github}/discussions`}>Join the discussion <Arrow /></Link><Link className={styles.textLink} to="/design-partners">Become a design partner <Arrow /></Link></div>
    <div className={styles.contributors}><Heading as="h3">Project contributors</Heading><GitHubContributors owner="synentra" repo="synentra" /></div>
  </div></section>;
}

export default function Home(): ReactElement {
  return <Layout title="Intent-Aware Runtime Governance for AI Agents" description="Govern AI-agent requests to registered HTTP APIs and MCP tools with policies, human approval, scoped authority, and durable execution."><main className={styles.home}><Hero /><Workflow /><Capabilities /><GetStarted /><Community /></main></Layout>;
}
