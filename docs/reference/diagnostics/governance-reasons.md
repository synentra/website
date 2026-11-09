---
id: "governance-reasons"
title: "Governance and Execution Reasons"
sidebar_position: 3
slug: "governance-reasons"
description: "Governance and Execution Reasons — Synentra v2 documentation."
---

Reason codes explain evaluation, admission, and transport behavior. They are not all HTTP errors.

| Reason | Meaning and response |
| --- | --- |
| AGENT_QUARANTINED | Agent is blocked; investigate its status. |
| HARD_DENY:restriction-id | A matching hard restriction stopped evaluation; ordinary approval cannot override it. |
| INTENT_UNAVAILABLE | Required intent evidence is unusable; check the provider and fallback configuration. |
| RESOLVER_NOT_FOUND:resolver | Register the required resolver/version. |
| RESOURCE_UNAVAILABLE | Restore resource resolution. |
| RESOURCE_UNAUTHORIZED | Check resource authority and scope. |
| RESOURCE_NOT_FOUND | Verify the requested resource. |
| EFFECT_RESOLVER_NOT_FOUND | Register the configured effect resolver. |
| UNKNOWN_EFFECT_BOUND | Supply a supported bounded effect plan. |
| NO_APPLICABLE_PERMISSION | No matching permission/default allow; inspect policy and caller. |
| EXPLICIT_DENY | A policy rule denies the request. |
| REVIEW_REQUIRED / DEFAULT_REVIEW | Wait for review and resume if approved. |
| POLICY_ALLOW / DEFAULT_ALLOW | Governance allows admission to continue. |
| DECISION_EXPIRED_OR_MANIFEST_CHANGED | Re-evaluate under current authority. |
| TASK_GRANT_REQUIRED | Supply the operation's required grant. |
| TASK_GRANT_INVALID | Check state, expiry, agent, and scope. |
| TASK_GRANT_OPERATION_MISMATCH | Grant does not cover the operation. |
| TASK_GRANT_RESOURCE_MISMATCH | Grant does not cover a resolved resource. |
| TASK_GRANT_LIMIT_EXCEEDED | Per-invocation bound exceeded. |
| TASK_GRANT_AGGREGATE_EXCEEDED | Aggregate authority unavailable. |
| INVALID_EFFECT_BUDGET_PLAN | Fix unknown/duplicate budget quantities. |
| BUDGET_EXCEEDED | Required reservation exceeds availability. |
| CLAIM_CONFLICT | Another execution claim won; inspect existing work. |
| APPROVAL_BINDING_INVALID | Approval no longer matches the authorized request. |

## Transport results

`HTTP_TIMEOUT_AFTER_POSSIBLE_DISPATCH`, `DISPATCH_CANCELLED_OR_RESPONSE_LOST`, `TRANSPORT_UNCERTAIN`, and `UPSTREAM_RESPONSE_TOO_LARGE` can represent uncertainty. Do not assume these prove no effect occurred.

`INVALID_REGISTERED_DESTINATION`, `DESTINATION_REJECTED`, and `UPSTREAM_CONNECTION_FAILED` identify destination/connection problems. Inspect the persisted execution state to determine the applicable lifecycle boundary.

## External policy

OPA reports reasons such as `OPA_ALLOW`, `OPA_DENY`, `OPA_UNDEFINED`, `OPA_INVALID_RESULT`, `OPA_CREDENTIAL_REQUIRES_HTTPS`, and `POLICY_BACKEND_UNAVAILABLE`. Custom OPA results can supply their own reasons.

See [OPA integration](../../integrations/opa) and the [catalog](diagnostic-catalog) for source locations.
