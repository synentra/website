---
id: "discovery"
title: "Capabilities and Operations"
sidebar_position: 2
slug: "discovery"
description: "Capabilities and Operations — Synentra v2 documentation."
---

## `GET /v2/capabilities`

Requires an authenticated principal. Returns 200 with an `adapters` array. Each entry includes:

| Field | Meaning |
| --- | --- |
| `adapterId`, `version` | Registered adapter identity. |
| `supportedExecutionModels` | Advertised execution modes. |
| `supportedSchemaVersions` | Supported contract versions. |
| `enforcementCapabilities` | Adapter enforcement metadata. |
| `supportedModalities` | Supported request modalities. |

Discovery metadata does not prove an external target is configured or healthy.

## `GET /v2/operations`

Requires authentication. Optional query parameters: `pageNumber` and `pageSize` (default 1 and 50).

Returns the common paginated envelope. Items describe ID, version, family, action, mutability, execution model, task-grant requirement, policy references, and binding IDs.

Operations blocked by hard restrictions for the caller are excluded. Ordinary policies are still evaluated when invoking a listed operation. An empty active configuration can produce an empty listing.

```http
GET /v2/operations?pageNumber=1&pageSize=50
Authorization: Bearer AGENT_ACCESS_TOKEN
```

## Client handling

Do not cache discoverability as permanent authorization. Preserve operation and binding identifiers exactly, and use a fresh invocation to obtain a decision.

If the desired action is missing, verify active bundle and caller identity before changing the client. Multiple bindings require an explicit selection in the invocation.
