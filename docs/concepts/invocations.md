---
id: "invocations"
title: "Invocations"
sidebar_label: "Invocations"
sidebar_position: 4
slug: "/concepts/invocations"
description: "Follow one request from submission through its decision and result."
---

An invocation is one request for Synentra to perform an operation. It brings together the caller, the requested action, the supplied information, and the governance decision.

## When does this matter?

Think in terms of invocations when you need to follow a specific request, wait for approval, check progress, or explain why an action stopped.

## The journey of a request

1. **Submit:** The agent requests an available operation with the required information.
2. **Evaluate:** Synentra checks identity, rules, and applicable evidence.
3. **Decide:** The request is allowed, sent for review, or denied.
4. **Prepare:** An eligible request is recorded for execution after its authority is checked.
5. **Execute:** Synentra attempts the authorized action against the registered target.
6. **Inspect:** You check the recorded result and, where supported, verification of the outcome.

A review decision adds a pause: a reviewer decides, then the caller resumes approved work.

Keep the invocation identifier returned by your client or integration. Use it to follow the same request rather than submitting replacement requests whenever progress is unclear.

For actions that change data, your integration must handle repeat submissions carefully. Ask the integration owner how retries are managed before manually repeating an uncertain action.

## Example

An agent requests a stock adjustment. The request waits for approval, is approved, and then resumes. The resulting target response belongs to that same tracked request.

“Accepted,” “approved,” and “completed successfully” describe different points in the journey. A request can be accepted while still awaiting review or execution.

If the outcome is uncertain, investigate the existing invocation before starting another action that could duplicate its effect.

## Related concepts

- [Governance Decisions](governance-decisions.md)
- [Human Approval](human-approval.md)
- [Execution Results and Cancellation](execution-results-and-cancellation.md)
