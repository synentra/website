---
id: "system-overview"
title: "System Overview"
sidebar_position: 1
slug: "system-overview"
description: "System Overview — Synentra v2 documentation."
---

Synentra separates **request evaluation**, **durable admission**, and **governed execution**. External clients and targets sit outside the runtime boundary.

```mermaid
flowchart LR
  A[Agents and clients] --> I
  subgraph S[Synentra runtime]
    I[REST or MCP ingress] --> ID[Identity and scope]
    ID --> G[Governance evaluation]
    G -->|Allow| AD[Durable admission]
    G -->|Review| H[Human approval]
    H -->|Approved and resumed| AD
    G -->|Deny| STOP[Stop]
    H -->|Rejected| STOP
    AD --> W[Execution worker]
    W --> T[HTTP or MCP adapter]
    C[Credential resolution] -.-> T
    T --> N[Outbound security]
  end
  N --> R[Registered targets]
  DB[(Governance and execution stores)] -.-> G
  AD -.-> DB
  W -.-> DB
  S -.-> O[Audit and operational telemetry]
```

Solid arrows represent request/execution flow. Dotted arrows represent dependencies or persisted evidence. The diagram describes responsibility boundaries, not deployment replicas or independent microservices.

## Request evaluation

Identity supplies the authenticated agent and security scope. Normalization resolves an operation and binding. Governance checks quarantine, hard restrictions, configured intent and risk evidence, resolved resources, bounded effects, and policy.

## Durable admission

Admission checks decision freshness, active revision, grants, quarantine, and budgets. It commits authorized work and its execution snapshot so a later worker uses the admitted request.

## Governed execution

The worker rechecks current authority. Adapters construct target calls; credential resolution supplies permitted credentials, and outbound controls constrain the destination and connection.

## Shared services

SQLite or PostgreSQL stores governance and execution records. Audit connects decisions to subsequent actions. OpenTelemetry requires startup integration to be enabled; the baseline registration is commented out.

See [execution guarantees](execution-guarantees) before designing retries or high-availability behavior.
