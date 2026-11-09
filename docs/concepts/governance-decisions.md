---
id: "governance-decisions"
title: "Governance Decisions"
sidebar_label: "Governance Decisions"
sidebar_position: 9
slug: "governance-decisions"
description: "Understand Allow, Review, and Deny and your next step."
---

A governance decision tells you whether a request can proceed toward execution, needs human review, or must stop.

## The three decisions

| Decision | What it means | Your next step |
| --- | --- | --- |
| **Allow** | The request has passed governance evaluation. | Follow its execution progress. |
| **Review** | Human judgment is required. | Wait for the review process; resume if approved. |
| **Deny** | The request cannot proceed. | Inspect the reason and address the cause. |

## When does this matter?

Read the decision before interpreting a request as successful. It explains the governance outcome, not necessarily the outcome in the connected system.

## Allow is not completion

An allowed request still needs valid authority when execution proceeds. Changes to rules, credentials, grants, or quarantine status can prevent execution.

Even when execution occurs, the target may return an error or the final outcome may remain uncertain.

## Review is not rejection

Review means the request needs an authorized person's decision. The reviewer may approve or reject it. Approval permits the caller to resume the request; it does not mean the action has already happened.

## Deny is not a request for approval

A denied request does not automatically enter the approval process. Some causes, such as hard restrictions, cannot be overridden through ordinary review.

## Example

An agent requests an update. Governance returns allow, but the target is unavailable during execution. The decision remains understandable as permission to proceed; the execution result explains the failed or uncertain attempt.

Follow the next step appropriate to the decision. Keep the request identifier and recorded reason when asking for help. Avoid repeatedly resubmitting a denied or uncertain request without understanding its cause.

## Related concepts

- [Human Approval](human-approval)
- [Execution Results and Cancellation](execution-results-and-cancellation)
- [Audit History](audit-history)
