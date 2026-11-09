---
id: "request-lifecycle"
title: "Request Lifecycle"
sidebar_position: 2
slug: "request-lifecycle"
description: "Request Lifecycle — Synentra v2 documentation."
---

## Sequence

```mermaid
sequenceDiagram
  participant C as Caller
  participant S as Synentra
  participant R as Reviewer
  participant W as Worker
  participant T as Target
  C->>S: Submit operation and arguments
  S->>S: Authenticate and evaluate
  alt Review required
    S-->>C: Review with approval ID
    R->>S: Approve or reject
    C->>S: Resume approved invocation
  end
  S->>S: Check authority and admit durably
  S-->>C: Invocation ID and pending state
  W->>S: Claim and revalidate work
  W->>T: Dispatch authorized request
  T-->>W: Response or uncertain exchange
  W->>S: Record execution result
  C->>S: Inspect invocation
  S-->>C: Decision, approval, execution and outcome
```

The diagram's dispatch path applies only if governance and admission succeed. Denied or rejected requests do not continue to target dispatch.

## Distinct identifiers and states

Keep invocation identifiers for request tracking and approval identifiers for review actions. Execution inspection uses execution identifiers. Do not infer that these identifiers are interchangeable; the invocation response does not include every internal record identifier.

Decision outcomes are allow, review, and deny. Baseline transport states include not started, claimed, dispatching, responded, failed before dispatch, unknown, and cancelled before dispatch. Outcome verification has a separate status.

## Revalidation

A decision or approval is time-bound evidence. Manifest changes, grant expiry or revocation, credential-authority changes, quarantine, and claim ownership can prevent dispatch after an earlier allow.

Resource resolution and effect planning occur before policy and admission where configured. Budget reservation protects bounded aggregate authority during concurrent submissions.

## Simulation

Simulation uses normalization and evaluation without admitting the requested action. It may still call evidence providers and write audit records. A simulated allow neither reserves capacity nor guarantees future admission.
