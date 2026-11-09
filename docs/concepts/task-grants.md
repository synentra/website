---
id: "task-grants"
title: "Task Grants"
sidebar_label: "Task Grants"
sidebar_position: 11
slug: "task-grants"
description: "Understand scoped and time-limited authority for an agent's task."
---

A task grant gives a particular agent authority to perform specified operations within defined resource boundaries and a limited period. Some operations require a valid task grant before they can execute.

## When does this matter?

Use task grants when an agent needs authority for a specific job rather than broad, indefinite access.

A grant can constrain which operations are permitted, which resources are covered, when authority expires, and which limits apply.

Use a grant issued for your agent and security scope. Check that it covers the requested operation and resources and remains valid for the task.

People authorized to issue grants should give the authority the task needs and define appropriate expiration and limits. Revocation withdraws authority for further work subject to the runtime's checks.

## Example

An inventory agent receives a grant to adjust specified stock resources during an approved task. The same grant does not automatically cover another agent, unrelated resources, or work after expiration.

## Grants and approvals are different

A grant defines scoped task authority. Human approval is a decision about a particular request sent for review.

A request may need both. Approval does not extend a grant's lifetime or expand its resource boundaries.

An expired, revoked, or mismatched grant can prevent execution even if the request previously received allow or approval. Synentra checks relevant authority again before sending work to the target.

Revocation does not undo an action the target has already performed. If dispatch may have occurred, inspect the result before assuming the operation was stopped.

If a grant is insufficient, request appropriate authority through your organization's process rather than borrowing another agent's grant.

## Related concepts

- [Agents and Identity](agents-and-identity)
- [Human Approval](human-approval)
