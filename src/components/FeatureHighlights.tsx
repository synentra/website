import React from 'react';
import styles from './FeatureHighlights.module.css';

export default function FeatureHighlights() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={`${styles.title}`}>Intent-Aware</h3>
            <p className={styles.subtitle}>Understands the semantic intent of agent requests – not just HTTP methods and paths – enabling fine‑grained, context‑sensitive policy decisions.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.col}>
            <h3 className={`${styles.title}`}>Low‑Latency</h3>
            <p className={styles.subtitle}>Deterministic policy engine + optional local ONNX model delivers sub‑20ms p99 latency, meeting the demands of near‑real‑time agent interactions.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.col}>
            <h3 className={`${styles.title}`}>Human‑in‑the‑Loop</h3>
            <p className={styles.subtitle}>Suspends high‑risk or ambiguous requests for manual approval, with built‑in queue, webhooks, and admin API – no agent code changes required.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.col}>
            <h3 className={`${styles.title}`}>Policy as Code</h3>
            <p className={styles.subtitle}>Declarative policies (JSON / OPA Rego) stored in Git, hot‑reloaded, and versioned – enabling GitOps workflows and audit‑friendly compliance.</p>
          </div>
        </div>
      </div>
    );
  }