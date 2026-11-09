---
id: "code-organization"
title: "Code Organization and Extension Boundaries"
sidebar_position: 4
slug: "code-organization"
description: "Code Organization and Extension Boundaries — Synentra v2 documentation."
---

| Project | Responsibility |
| --- | --- |
| `Synentra` | Host, endpoints, MCP gateway, middleware, startup. |
| `Synentra.Application` | Commands, queries, normalization, governance, admission, and contracts. |
| `Synentra.Domain` | Identity, governance, grants, approvals, execution, and value objects. |
| `Synentra.Infrastructure` | Identity/secret providers, policy engines, adapters, networking, workers. |
| `Synentra.Persistence` | Shared persistence models and stores. |
| `Synentra.Persistence.Sqlite` | SQLite provider. |
| `Synentra.Persistence.PostgreSql` | PostgreSQL provider. |

## Extensibility

Registered interfaces support transport adapters, intent providers, risk factors, resource resolvers, effect resolvers, outcome verifiers, policy engines, trust, and obligations.

A catalog entry is metadata, not automatic executable-plugin installation. Required implementations must be registered and their referenced versions must match.

## Configuration boundaries

Deployment configuration chooses infrastructure providers. Governance bundles define operations, bindings, targets, profiles, restrictions, and policies. Credential-binding records connect targets and permitted operations to versioned secret references.

Preserve these boundaries in new integrations. Untrusted request context must not become identity, target authorization, or credential authority.

## Adding behavior

Define the contract, failure behavior, and lifecycle stage first. Test unavailable dependencies and ambiguous results as well as successful execution. An enum value or configuration property alone is not feature completion.

See [Contributing](../contributing/development) for the repository workflow and [custom integrations](../integrations/extensions) for integration-specific checks.
