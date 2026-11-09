---
id: "approvals"
title: "Approval API"
sidebar_position: 5
slug: "approvals"
description: "Approval API — Synentra v2 documentation."
---

| Route | Body | Success |
| --- | --- | --- |
| `GET /v2/approvals` | None | 200 pending page. |
| `GET /v2/approvals/{id}` | None | 200 approval record. |
| `POST /v2/approvals/{id}/approve` | None | 204. |
| `POST /v2/approvals/{id}/reject` | Optional reason object | 204. |
| `POST /v2/approvals/{id}/revoke` | None | 204. |

## Listing and inspection

Listing requires reviewer or administrator and filters pending approvals to the caller's security scope. It accepts `pageNumber` and `pageSize`.

The current detail endpoint returns 404 when the record is missing or its visibility condition fails. That condition permits administrators, matching security scope, or matching requesting-agent identity. It is not identical to the stricter ownership checks on invocation inspection.

## Decisions

Approve and reject enforce reviewer permissions in the command handlers. Approval settings govern self-approval and cross-scope approval. Revoke is limited by its handler to the administrator or requesting agent.

A rejection body is:

```json
{"reason":"The task does not justify this change."}
```

Approval-state errors can be reported as validation diagnostics rather than a uniform 403. Parse the response body and code.

## Resume separately

An approved request does not automatically complete execution. The caller resumes the original invocation through the invocation API. Current authority is checked again.

Approval remains bound to the reviewed request. Changing the operation, binding, caller, or arguments cannot silently reuse approval. Expiration, revocation, quarantine, and active-configuration changes can prevent continuation.

See [review walkthrough](../../quickstart/review-workflow) for the end-to-end sequence.
