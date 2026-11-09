---
id: "review-workflow"
title: "Try Human Review"
sidebar_position: 3
slug: "/quickstart/review-workflow"
description: "Try Human Review — Synentra v2 documentation."
---

This exercise changes the read example to require review. Use a fresh local test instance or plan the activation change: activating a new bundle revision can invalidate queued work.

## Change the rule

In `examples/quickstart-bundle.json`, set the policy rule's `effect` to `review` and increment `metadata.version`, for example to `1.0.1`. Validate, store, and activate that version using the current active revision.

Submit another invocation. The decision should be `review`, with an approval identifier and no completed execution.

## Approve

An authorized reviewer or administrator in the applicable scope submits:

```http
POST /v2/approvals/APPROVAL_ID/approve
Authorization: Bearer REVIEWER_ACCESS_TOKEN
```

The successful action returns 204 with no response body. By default, self-approval and cross-scope approval are disabled. Use a different reviewer identity from the requesting agent.

To reject instead:

```http
POST /v2/approvals/APPROVAL_ID/reject
Authorization: Bearer REVIEWER_ACCESS_TOKEN
Content-Type: application/json

{"reason":"The requested action is not appropriate for this task."}
```

## Resume

After approval, the original caller submits:

```http
POST /v2/invocations/INVOCATION_ID/resume
Authorization: Bearer AGENT_ACCESS_TOKEN
```

Successful admission returns 202. Poll the invocation resource. Resume evaluates current authority and can still deny work if approval binding, grant validity, quarantine, or configuration has changed.

Do not change the arguments and assume the approval transfers to the new request. See the [Approvals API](../reference/api/approvals) for access rules and response behavior.
