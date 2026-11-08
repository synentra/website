---
id: "execution-results-and-cancellation"
title: "Execution Results and Cancellation"
sidebar_label: "Execution Results and Cancellation"
sidebar_position: 14
slug: "/concepts/execution-results-and-cancellation"
description: "Understand progress, cancellation, and uncertain outcomes."
---

Execution results describe what happened when Synentra attempted an authorized action. They are separate from permission to perform the action.

## Reading progress

| Result or stage | What to understand |
| --- | --- |
| Waiting or claimed | Work has not yet been dispatched. |
| Dispatching | Synentra is processing the external attempt. |
| Responded | A response was recorded; inspect it for success or error. |
| Failed before dispatch | The action was stopped before being sent. |
| Unknown | The available information does not establish the transport result. |
| Cancelled before dispatch | Pending work was cancelled before dispatch. |

Your client may display these stages using its own labels.

Use the invocation or execution identifier to inspect existing work. Cancel a request through the supported flow if it is still eligible and you have permission.

Cancellation is supported before dispatch. It is not a promise that an already-running action in another system can be stopped or undone.

## Handling an uncertain result

A missing response does not prove the action failed. The target might have performed it before the connection was lost.

Avoid blindly repeating an uncertain mutation. Where the operation supports outcome verification, an authorized administrator can request reconciliation: a check of authoritative evidence without repeating the original action.

Verification may confirm the expected outcome, contradict it, or remain inconclusive.

## Example

A stock update is sent, but the response is lost. Sending the update again could adjust stock twice. Inspecting the existing execution and verifying the target's records is safer than assuming nothing happened.

A received response can contain an error, and a successful exchange does not automatically prove every intended business effect. Verification support depends on the operation's configuration.

Cancellation and reconciliation are distinct actions; neither should be described as a universal rollback.

## Related concepts

- [Invocations](invocations.md)
- [Audit History](audit-history.md)
