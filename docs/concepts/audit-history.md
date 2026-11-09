---
id: "audit-history"
title: "Audit History"
sidebar_label: "Audit History"
sidebar_position: 15
slug: "audit-history"
description: "Use recorded history to understand requests, decisions, and execution."
---

Audit history helps explain what an agent requested, how governance handled it, and what happened afterward. It supports review, troubleshooting, and accountability.

## When does this matter?

Consult recorded history when a request is denied, approval is questioned, an action appears missing, or an execution has an uncertain outcome.

It is also useful when you need to connect a reviewer's decision to the resulting work.

Start with the invocation or execution identifier. Examine the related records available to your role, including the requesting agent, decision, approval activity, and execution result.

Keep the sequence clear:

1. What action was requested?
2. What decision was made?
3. Was review required and completed?
4. Did execution proceed?
5. What result or outcome evidence was recorded?

Access to records depends on your deployment's permissions and available interfaces.

## Example

An agent reports that an update was approved, but the target has not changed. The history may show that the request was never resumed, authority changed before dispatch, or the external result is uncertain. Approval alone does not identify which explanation applies.

## Interpreting the record

Distinguish a governance decision from a transport result and a verified outcome. They answer different questions.

Also distinguish audit records from operational logs and metrics. Those supporting sources may provide more diagnostic detail, depending on what your deployment enables.

Some response content may intentionally be omitted to protect credentials or sensitive data. Missing response content does not automatically mean missing execution.

Do not assume every malformed request or early failure has a complete audit trail. If the available history does not explain an event, provide its identifiers and timing to the administrator responsible for investigation.

## Related concepts

- [Invocations](invocations)
- [Governance Decisions](governance-decisions)
- [Execution Results and Cancellation](execution-results-and-cancellation)
