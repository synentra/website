---
id: "simulation-and-audits"
title: "Simulation and Audit API"
sidebar_position: 8
slug: "simulation-and-audits"
description: "Simulation and Audit API — Synentra v2 documentation."
---

## `POST /v2/simulate`

Requires authentication. Accepts the same invocation request shape as submission, with a 256 KiB limit.

Returns 200 with:

```json
{"authorizing":false,"result":{"schemaVersion":"synentra.invocation-result.v2"}}
```

This abbreviated shape omits the result's decision, approval, execution, and outcome fields for readability. The real response includes them.

Simulation normalizes and evaluates but does not admit or dispatch the requested target action. Evidence providers can still be called and evaluation audits can be written. A simulation ID is not guaranteed to identify a normally persisted invocation.

## `GET /v2/audits`

Requires authentication. Query parameters:

| Parameter | Meaning |
| --- | --- |
| `actorId` | Actor filter; honored as supplied only for administrators. |
| `invocationId` | Invocation filter. |
| `category` | Audit category. |
| `from`, `to` | Date-time boundaries. |
| `pageNumber`, `pageSize` | Pagination. |

Queries are scoped to the caller's security scope. Non-admin requests force the actor filter to the caller's agent ID.

Returns the common paginated envelope. Use invocation IDs to correlate evaluation, admission, and subsequent actions.

## Example

```http
GET /v2/audits?invocationId=INVOCATION_ID&pageNumber=1&pageSize=20
Authorization: Bearer ACCESS_TOKEN
```

An empty audit page does not prove nothing happened: check scope, actor, date filters, and whether the relevant path records that event. Operational logs and transport state answer different questions.
