---
id: "task-grants"
title: "Task Grant API"
sidebar_position: 7
slug: "task-grants"
description: "Task Grant API — Synentra v2 documentation."
---

## `POST /v2/task-grants`

Requires administrator or trusted issuer. The grant's security scope comes from the authenticated issuer, not a request field.

```json
{
  "agentId":"demo-agent",
  "operationIds":["inventory.adjust"],
  "resourceScopes":[{"role":"subject","type":"inventory-item","ids":["item-001"]}],
  "limits":[{"measure":"items","unit":"count","scale":0,"perInvocation":5,"aggregate":20}],
  "expiresAt":"2030-01-01T00:00:00Z",
  "externalReference":"example-task"
}
```

This is a shape example, not a grant for the read-only QuickStart. Choose the operation, resources, measures, and future expiration for your deployment.

Resource scope fields are role, type, and IDs. Limits use integer quantities with scale, per-invocation bound, and aggregate bound.

Trusted issuers need a JSON `synentra_grant_limits` claim mapping `measure:unit` to bounded authority. Requested authority is constrained by the issuer's permitted ceilings. Administrators use a separate path.

Returns 201 and a Location header. The result contains grant ID, state, expiry, and limit-state information. An expiry in the past or empty operation scope returns 400 with a specific error code.

## `GET /v2/task-grants/{id}`

Requires authentication. The endpoint permits administrator, matching grantee agent, or matching issuer agent; otherwise 404. Do not assume this condition is identical to invocation scope visibility.

Returns limit states including authorized, settled, reserved, and available amounts. Availability can change as executions reserve or settle capacity.

## `POST /v2/task-grants/{id}/revoke`

No body; success returns 204. The handler requires the issuer or administrator. Revocation affects subsequent authority checks and does not undo completed target effects.
