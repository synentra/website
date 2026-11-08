---
id: "human-approval"
title: "Human Approval"
sidebar_label: "Human Approval"
sidebar_position: 10
slug: "/concepts/human-approval"
description: "Understand how review, approval, rejection, and resume work."
---

Human approval lets an authorized reviewer decide whether a request marked for review may continue. It adds human judgment to governance where the applicable rules require it.

## When does this matter?

Review is useful for sensitive actions that should not proceed automatically. The request waits while the reviewer examines the intended action and available evidence.

## What should a reviewer consider?

Check the requesting agent, operation, affected resource or target, supplied information, and reason for review. Consider the purpose and available risk evidence where provided.

Approve only the request you have actually reviewed. Approval does not give the agent general permission to perform similar actions later.

## What happens next?

- **Approved:** The caller can resume the approved invocation.
- **Rejected:** The request stops.
- **Still pending:** The request remains waiting for a decision.

In the baseline flow, approval and resume are separate steps. Your client may help manage them, but approval alone should not be reported as completed execution.

## Example

A reviewer approves a stock adjustment for a specified item and amount. Changing the item or amount is a different request and must not reuse that approval as unrestricted authority.

As the caller, retain the invocation identifier, wait for a decision, and resume the approved request using the supported client flow. As the reviewer, make a decision based on the actual request rather than a summary that omits relevant details.

Approved work still undergoes applicable checks. An expired task grant, changed authorization, or quarantine can stop it before execution.

If approved work does not proceed, inspect the invocation and execution records. Repeated approval attempts will not correct an unrelated authority or connection problem.

## Related concepts

- [Governance Decisions](governance-decisions.md)
- [Invocations](invocations.md)
- [Task Grants](task-grants.md)
