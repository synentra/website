import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './features.module.css';
import { Icon } from '@iconify/react';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
  slug: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Intent‑Aware Policies',
    icon: 'carbon:intent-request-active',
    slug: '',
    description: (
      <>
        Synentra understands the <b>semantic intent</b> of agent requests – not just HTTP methods and paths. Using a lightweight model 
        or optional external LLMs, it classifies intents. Policies can then enforce different rules based on intent, enabling fine‑grained, 
        context‑sensitive governance.
      </>
    ),
  },
  {
    title: 'Deterministic Policy Engine',
    icon: 'carbon:rule-filled',
    slug: '',
    description: (
      <>
        Synentra includes an embedded policy engine that evaluates <b>attribute‑based access control (ABAC)</b> rules. Policies are written as 
        JSON or OPA Rego, version‑controlled in Git, and hot‑reloaded at runtime. The engine supports conditions like <b>eq</b>, <b>contains</b>, 
        <b>regex</b>, and <b>in</b>, with priorities and rule chaining.
      </>
    ),
  },
  {
    title: 'Agent Identity & JWT',
    icon: 'mdi:badge-account',
    slug: '',
    description: (
      <>
        Every AI agent is registered with a unique ID and client secret. Synentra issues short‑lived <b>JWTs</b> that encode agent identity, 
        trust score, and session information. Tokens are validated on each request without database lookups, ensuring low latency.
      </>
    ),
  },
  {
    title: 'Human‑in‑the‑Loop (HITL)',
    icon: 'pajamas:approval-solid',
    slug: '',
    description: (
      <>
        Suspends high‑risk or ambiguous requests for manual approval. Synentra stores pending requests in Redis, provides a REST API for 
        approve/deny, and can integrate with Slack, Teams, or custom webhooks. Agents poll or receive callbacks once a decision is made.
      </>
    ),
  },
  {
    title: 'Adaptive Risk Scoring',
    icon: 'mdi:chart-bell-curve',
    slug: '',
    description: (
      <>
        Synentra computes a dynamic <b>risk score</b> (0.0–1.0) for each request based on method, path, agent history, time of day, and 
        anomaly detection. The score can be used to automatically deny, challenge (HITL), or allow requests. Risk thresholds are configurable.
      </>
    ),
  },
  {
    title: 'Low‑Latency Architecture',
    icon: 'grommet-icons:performance',
    slug: '',
    description: (
      <>
        Synentra is built for <b>near‑real‑time</b> processing. Deterministic policy evaluation runs in &lt;10ms; the optional local ONNX model 
        adds &lt;20ms. Caching (memory + Redis) avoids repeated database calls, and the YARP reverse proxy ensures efficient forwarding.
        Target p99 latency: &lt;30ms for typical workloads.
      </>
    ),
  },
  {
    title: 'Policy as Code (GitOps)',
    icon: 'mdi:source-branch',
    slug: '',
    description: (
      <>
        All policies are defined as JSON or Rego files and stored alongside your infrastructure code. Synentra watches the policy directory and 
        hot‑reloads changes without restarting. This enables <b>GitOps workflows</b>, peer review via pull requests, and full audit history.
      </>
    ),
  },
  {
    title: 'Semantic Analysis',
    icon: 'mdi:brain',
    slug: '',
    description: (
      <>
        Synentra includes an optional <b>local ONNX</b> model that classifies agent prompts into intents with high confidence. 
        The model runs in‑process, adds &lt;20ms latency, and respects data privacy – no external API calls. Custom models can be fine‑tuned.
      </>
    ),
  },
  {
    title: 'Multi‑Provider Semantic Fallback',
    icon: 'carbon:model-alt',
    slug: '',
    description: (
      <>
        When local model confidence is low, Synentra can escalate to <b>external LLM providers</b> (Azure OpenAI, Google Gemini, Ollama) 
        as an optional fallback. Results are cached and time‑boxed to avoid latency spikes. This hybrid approach balances speed and accuracy.
      </>
    ),
  },
  {
    title: 'Agent Trust Score',
    icon: 'mdi:shield-check',
    slug: '',
    description: (
      <>
        Each agent maintains a dynamic <b>trust score</b> (0.0–1.0) based on past violations, approval history, and request behaviour. 
        Low trust scores can trigger stricter policies, increased risk scoring, or automatic revocation. Trust scores are updated in real time.
      </>
    ),
  },
  {
    title: 'Audit Logging & Compliance',
    icon: 'mdi:file-document-outline',
    slug: '',
    description: (
      <>
        Every decision (allow, deny, HITL) is written to an <b>audit log</b> with agent ID, request details, intent, risk score, and timestamp. 
        Structured logging also feeds to Seq, Elasticsearch, or cloud storage.
      </>
    ),
  },
  {
    title: 'Reverse Proxy',
    icon: 'mdi:proxy-outline',
    slug: '',
    description: (
      <>
        Synentra is built on <b>YARP (Yet Another Reverse Proxy)</b>. It intercepts agent requests, applies governance, 
        then forwards to upstream APIs. The proxy supports HTTP/1.1, HTTP/2, gRPC, and WebSockets, with connection pooling and load balancing.
      </>
    ),
  },
  {
    title: 'Configuration & Extensibility',
    icon: 'mdi:plugin-outline',
    slug: '',
    description: (
      <>
        Synentra is configured via configuration file and environment variables. Every component – policy engine, risk calculators, 
        semantic providers, caching, logging – can be replaced or augmented through a <b>pluggable service model</b> (dependency injection). 
        Semantic engines can be added without forking the core.
      </>
    ),
  },
  {
    title: 'Developer‑Friendly CLI',
    icon: 'heroicons:command-line-20-solid',
    slug: '',
    description: (
      <>
        <b>synctl</b> is a powerful command‑line tool for managing agents, policies, HITL approvals, 
        and audit logs. It supports scripting, automation, and infrastructure‑as‑code workflows. Output formats: table, JSON, YAML.
      </>
    ),
  },
  {
    title: 'Client SDKs',
    icon: 'material-symbols:sdk',
    slug: '',
    description: (
      <>
        Official SDKs for <b>.NET</b> simplify agent integration. SDKs handle JWT generation, automatic token refresh, HITL polling, 
        and error retries. Available NuGet.
      </>
    ),
  },
  {
    title: 'OpenAPI / Admin API',
    icon: 'dashicons:rest-api',
    slug: '',
    description: (
      <>
        Synentra exposes a versioned <b>RESTful Admin API</b> (OpenAPI 3.0) for agent registration, policy management, HITL approval, 
        and audit queries. The API can be consumed by the CLI, dashboard, or custom automation.
      </>
    ),
  },
  {
    title: 'Observability (Metrics, Logs, Traces)',
    icon: 'eos-icons:monitoring',
    slug: '',
    description: (
      <>
        Synentra emits <b>metrics</b> (request rate, latency, policy decision counts, semantic confidence). Structured logs 
        can be sent to Seq, Loki, or files. Distributed traces (OpenTelemetry) help debug end‑to‑end agent calls.
      </>
    ),
  },
  {
    title: 'Standalone & Containerised',
    icon: 'cib:docker',
    slug: '',
    description: (
      <>
        Synentra runs as a single binary (Windows, Linux, macOS) or as a Docker container. It can be deployed as a sidecar alongside each 
        agent, a central gateway, or a fleet behind a load balancer. Helm charts for Kubernetes are provided.
      </>
    ),
  }
];

function Feature({ title, icon, description, slug }: FeatureItem) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className={styles.featureCard}>
        <div className={styles.featureHeader}>
          <Icon className={styles.featureIcon} icon={icon} height="56" />
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        </div>

        <div className={styles.featureBody}>
          {description}
        </div>

        {slug && (
          <div className={styles.featureFooter}>
            <a
              className={styles.readMoreButton}
              href={slug}
            >
              Read more
              <Icon icon="mdi:arrow-right" className={styles.readMoreIcon} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Synentra Features & Capabilities  
        </Heading>

        <p className={styles.sectionSubtitle}>
          A comprehensive look at the intent‑aware governance gateway that secures, controls, and observes autonomous AI agents in real time.
        </p>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}