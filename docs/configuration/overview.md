---
id: "overview"
title: "Configuration Overview"
sidebar_position: 1
slug: "overview"
description: "Configuration Overview — Synentra v2 documentation."
---

Synentra uses three configuration surfaces.

| Surface | Contents | Change mechanism |
| --- | --- | --- |
| Deployment settings | Identity, persistence, networking, keys, providers, logging, workers. | Application configuration and deployment environment. |
| Governance bundle | Operations, targets, mappings, profiles, restrictions, policies. | Validate, store, activate. |
| Credential records | Target authority and versioned secret references. | Administrative credential API. |

## Environment overrides

The application uses ASP.NET Core configuration. Nested environment keys use double underscores:

```powershell
$env:Identity__Providers__Oidc__Audience = "synentra-agents"
$env:Persistence__Provider = "sqlite"
$env:Persistence__Providers__Sqlite__ConnectionString = "Data Source=synentra.db"
```

These examples configure the process started from that shell. Deployments may supply the same settings through their service manager or container environment.

## Development versus production

The base appsettings file contains the listener. Most checked-in operational examples are in the Development file. Explicitly select and supply the configuration for your actual environment.

Development allows private outbound addresses and disables mandatory key-ring encryption. Production must deliberately configure identity, TLS, network policy, persistent storage, encryption keys, and required provider access.

## Reference

The [settings reference](settings-reference) enumerates checked-in development values. These are examples, not an assertion that every named option is wired into runtime behavior.

The [schema reference](schema-reference) lists bundle fields from the current models. Consult the relevant guide for enforcement details, especially intent thresholds, worker options, and response retention.
