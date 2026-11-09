---
id: "invocations"
title: "Invocation API"
sidebar_position: 4
slug: "invocations"
description: "Invocation API — Synentra v2 documentation."
---

## `POST /v2/invocations`

Requires an authenticated caller. Maximum body: 256 KiB. Mutations require `Idempotency-Key`.

```json
{
  "schemaVersion":"synentra.invocation.v2",
  "operationId":"inventory.read",
  "bindingId":"inventory-read-http",
  "arguments":{},
  "context":{
    "workflowId":"inventory-check",
    "declaredPurpose":"Read the demonstration inventory item"
  }
}
```

| Field | Requirement |
| --- | --- |
| `operationId` | Required registered operation. |
| `arguments` | Required JSON matching the operation's input. |
| `bindingId` | Optional only when the operation has exactly one binding. |
| `taskGrantId` | Supply when required by operation authority. |
| `schemaVersion` | Defaults to `synentra.invocation.v2`; send explicitly. |
| `context` | Optional, untrusted workflow/purpose evidence. |

Returns `Location: /v2/invocations/{invocationId}`. A deny uses 403. Review or pending/unknown execution uses 202. Other completed handler results use 200.

## Response

`schemaVersion`, `invocationId`, `decision`, nullable `approval`, `execution`, and `outcome` are separate fields. Decision has `outcome`, `reasonCodes`, and `policyRevision`. Approval has `id` and `status`. Execution includes status and optional transport details. Outcome has status.

The current invocation execution DTO does not expose an execution ID. Do not manufacture one from invocation ID when calling execution routes.

## `GET /v2/invocations/{id}`

Returns the current result. An administrator or the original agent in the same scope can inspect it. Missing or invisible records return 404.

## `POST /v2/invocations/{id}/resume`

Uses the authenticated principal and existing invocation; no replacement arguments. On admitted resume, returns 202; non-admitted resume returns 403 with the current invocation result. Approval-state and authority errors can follow the diagnostic path.

Reuse an idempotency key only for the same logical request. Changed normalized inputs under the same scoped key return conflict.
