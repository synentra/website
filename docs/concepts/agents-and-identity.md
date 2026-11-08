---
id: "agents-and-identity"
title: "Agents and Identity"
sidebar_label: "Agents and Identity"
sidebar_position: 2
slug: "/concepts/agents-and-identity"
description: "Understand who a request belongs to and where its authority applies."
---

An agent is a caller that asks Synentra to perform an operation. Its identity tells Synentra who is making the request. Its **security scope** establishes the boundary within which that identity's authority applies.

## When does this matter?

Identity matters whenever Synentra evaluates a request, checks a task grant, resumes approved work, or determines who may inspect or cancel an execution.

A name written in a request is not proof of identity. Synentra relies on the caller's authenticated identity.

Use the credentials and connection settings provided for your agent. Ensure the agent operates in the intended security scope, particularly when your organization has several teams or environments.

An administrator or integration owner manages the identity configuration. Agent owners should not attempt to change identity by adding a different agent name or scope to ordinary request arguments.

## Example

A purchasing agent working in one security scope receives authority to update a particular inventory resource. Another agent cannot borrow that authority simply by copying its task-grant identifier.

## Identity is different from trust

Identity establishes who the caller is. Trust reflects recorded evidence about that agent's behavior. An authenticated agent can still be denied, required to obtain approval, or placed in quarantine.

Similarly, high trust does not grant access to every operation.

If identity cannot be established correctly, the request cannot continue as an authenticated agent. Check the configured connection and contact the person responsible for identity setup.

When investigating a request, keep its agent identity and security scope together. The same operation name does not imply the same authority across scopes.

## Related concepts

- [Agent Trust](agent-trust.md)
- [Task Grants](task-grants.md)
- [Quarantine](quarantine.md)
