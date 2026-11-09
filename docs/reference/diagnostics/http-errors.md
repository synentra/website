---
id: "http-errors"
title: "HTTP Errors and Recovery"
sidebar_position: 2
slug: "http-errors"
description: "HTTP Errors and Recovery — Synentra v2 documentation."
---

Middleware-generated problems include `title`, `status`, `type`, `errorCode`, and `traceId`; validation may also include `errors`. Endpoint-specific errors can have different bodies.

| Code | Typical HTTP status | Recovery |
| --- | --- | --- |
| UNAUTHENTICATED | 401 | Supply a valid token and required claims. |
| FORBIDDEN | 403 | Use the correct role/owner/scope for the action. |
| INVALID_REQUEST | 400 | Correct argument shape or required values. |
| VALIDATION_FAILED | 400 | Inspect field errors. |
| NOT_FOUND | 404 | Verify identifier and visibility. |
| MANIFEST_ID_MISMATCH | 409 | Match route ID to metadata.name. |
| ACTIVATION_CONFLICT | 409 | Read current revision before activating. |
| IDEMPOTENCY_KEY_REQUIRED | 400 | Supply a stable key for the mutation. |
| IDEMPOTENCY_CONFLICT | 409 | Do not reuse a key for changed input. |
| AMBIGUOUS_OR_MISSING_BINDING | 400 | Supply a valid explicit binding or configure exactly one. |
| AUTHORITY_EXPIRED | 410 | Obtain current authority; do not replay expired approval. |
| PAYLOAD_TOO_LARGE | 413 | Reduce the manifest size. |
| CREDENTIAL_UNAVAILABLE | 503 | Check provider, secret version, state, and expiry. |
| CREDENTIAL_WRITE_CONFLICT | 409 | Re-read version/state before updating. |
| NO_ACTIVE_BUNDLE | 503 in exception path | Store and activate a valid bundle. |
| GOVERNANCE_DEPENDENCY_UNAVAILABLE | 503 | Restore the reported dependency. |
| STARTUP_SECRETS_UNAVAILABLE | 503 | Restore startup-secret readiness. |
| VERIFICATION_NOT_CONFIGURED | 409 | Configure a supported verifier for the operation. |
| CANCELLATION_UNSUPPORTED_OR_ALREADY_DISPATCHED | 409 | Inspect execution; cancellation is not rollback. |
| GRANT_EXPIRY_MUST_BE_FUTURE | 400 | Supply a future expiry. |
| GRANT_OPERATION_SCOPE_REQUIRED | 400 | Include permitted operations. |
| INTERNAL_ERROR | 500 | Retain trace ID and inspect sanitized server logs. |

## Important distinctions

An invocation denied by governance returns an invocation result with 403 rather than the middleware problem envelope. `NO_ACTIVE_BUNDLE` can also appear as a governance reason, depending on the path.

Some `SYN-...` diagnostics are classified as validation even when their messages concern permissions or missing records, producing 400. Do not infer HTTP status solely from the wording.

The current middleware maps database update exceptions to `CREDENTIAL_WRITE_CONFLICT`; that name does not prove the failure was limited to credential storage.
