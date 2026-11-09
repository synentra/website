---
id: "policies"
title: "Profiles, Policies, and Restrictions"
sidebar_position: 6
slug: "policies"
description: "Profiles, Policies, and Restrictions — Synentra v2 documentation."
---

## Hard restrictions

Restrictions match agent IDs, operation IDs, or families and can deny before ordinary policy evaluation. Human approval does not bypass a hard restriction.

## Declarative policies

Operations list policy references. Rules can match:

- Agent IDs, operation IDs, and operation families.
- Resource role, type, IDs, and `all` or `any` quantifiers.
- Argument equality by JSON Pointer.
- Integer arguments greater than a threshold.

```json
{
  "id": "inventory-read-policy",
  "rules": [{
    "match": {"agentIds":["demo-agent"],"operationIds":["inventory.read"]},
    "effect": "allow"
  }]
}
```

A matching deny wins; otherwise review wins over allow. If no rule applies, the profile's default outcome applies, with deny as the safe baseline.

The model exposes a combining-algorithm property, but the inspected declarative engine follows the above behavior rather than dynamically switching algorithms.

## Profiles

Profiles group intent, trust, risk, and policy settings. A field existing in the model does not prove independent enforcement of every option.

The baseline intent provider is unavailable. Required intent failure uses the configured `onUnavailable` path; separate enforcement of numerical minimum confidence and `onLowConfidence` is not demonstrated.

Risk uses registered factor evidence. Missing factors reduce coverage; no usable factors produces maximum risk and zero coverage.

## Test changes

Use simulation to inspect representative allow, review, and deny requests before activation. Simulation can call evidence services and write audits but does not execute the target operation.

For external policy evaluation, see [OPA integration](../integrations/opa). Do not invent declarative matcher fields for evidence only exposed in the broader policy input.
