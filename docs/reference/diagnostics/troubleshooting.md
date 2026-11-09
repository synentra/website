---
id: "troubleshooting"
title: "Troubleshooting Guide"
sidebar_position: 1
slug: "troubleshooting"
description: "Troubleshooting Guide — Synentra v2 documentation."
---

Start with the request's stage and retain its identifiers. Do not retry a mutation until you know whether external dispatch may have occurred.

| Symptom | Check first | Next action |
| --- | --- | --- |
| Service will not start | Configuration validation, database access, key-ring paths. | Correct the reported dependency before changing policies. |
| All requests return 503 | Startup-secret readiness. | Restore required provider access and verify declarations. |
| Health is unhealthy | Database and active manifest. | Confirm storage and activate a valid bundle. |
| 401 | Issuer, audience, token expiry, claim mapping. | Obtain a correct token; retain validation safeguards. |
| 403 invocation result | `decision.reasonCodes`. | Resolve the governance or admission cause. |
| Operation missing | Active bundle, hard restrictions, agent ID. | Check discovery under the actual caller. |
| Review never executes | Approval state and caller resume. | Resume the original approved invocation. |
| Allowed but queued work stops | Revision, grant, quarantine, credential authority. | Inspect execution/audit state; do not blindly resubmit. |
| Payload missing | Credential-aware retention. | Check retention policy and response metadata. |
| Unknown result | Possible dispatch with missing response. | Reconcile using authoritative evidence where configured. |
| No traces exported | Startup registration and exporter. | Enable and verify the telemetry integration. |

## Evidence to collect

Record timestamp with timezone, invocation/approval/execution ID where available, error code, trace ID, active revision, operation, and caller scope. Include sanitized logs and configuration keys, never access tokens or secret material.

Use [HTTP error codes](http-errors), [governance reasons](governance-reasons), and the [source-derived diagnostic catalog](diagnostic-catalog).

## Conflicts

A conflict can protect a concurrent change. Read the latest state and compare your intended action before retrying. For idempotency conflict, determine whether the same key was reused for different arguments.

## Recovery boundary

Restoring availability does not automatically establish that uncertain external effects did not occur. Keep transport state and business outcome separate.
