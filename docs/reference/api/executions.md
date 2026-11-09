---
id: "executions"
title: "Execution API"
sidebar_position: 6
slug: "executions"
description: "Execution API — Synentra v2 documentation."
---

## `GET /v2/executions/{id}`

Requires authentication. Visibility is allowed for administrators or the original invocation agent in the same security scope; otherwise returns 404.

The 200 object contains `id`, `invocationId`, `status`, `upstreamReference`, dispatch/response timestamps, response status/payload, error message, and `outcomeEvidence`.

Use an actual execution identifier obtained from the deployment's execution records. The invocation result's execution DTO currently lacks an ID field.

## `POST /v2/executions/{id}/cancel`

No body. Eligible cancellation returns 202 with:

```json
{"id":"EXECUTION_ID","status":"cancelled_before_dispatch"}
```

A non-cancellable result returns 409 with `CANCELLATION_UNSUPPORTED_OR_ALREADY_DISPATCHED`. The handler permits the administrator or original agent in scope and only cancels eligible not-started/claimed work.

Cancellation releases the execution's reservations. It cannot guarantee stopping a dispatched target action.

## `POST /v2/executions/{id}/reconcile`

Requires administrator and matching invocation security scope. No body. The active operation must declare a verifier. Without one, returns 409 `VERIFICATION_NOT_CONFIGURED`; missing/invisible records return 404.

The handler selects the configured verifier/version, reads evidence, and returns the verifier result. It does not replay the mutation, automatically change transport status, or automatically settle all budgets.

## Interpret results

A responded execution can include a tool error. Unknown means insufficient transport certainty. Verification can independently establish a verified, contradicted, or unknown outcome.

Read [execution guarantees](../../architecture/execution-guarantees) before designing retries.
