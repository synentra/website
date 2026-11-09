---
id: "agent-trust"
title: "Agent Trust"
sidebar_label: "Agent Trust"
sidebar_position: 8
slug: "agent-trust"
description: "Understand how recorded behavior contributes to governance."
---

Agent trust is evidence about an agent's recorded behavior. It can contribute to risk assessment and to decisions about whether the agent should remain active.

Trust is associated with an agent; it is different from the purpose or risk of one particular request.

## When does this matter?

Trust matters when you investigate changes in how an agent's requests are handled, review recorded behavior, or assess an agent that has been quarantined.

As an agent owner, review the relevant request history and any available trust evidence when behavior changes. Correct the underlying problem rather than assuming that submitting the same request again will resolve it.

Administrative changes to trust should follow your organization's supported process and be supported by an explanation.

## What trust does not mean

High trust is not unrestricted permission. The agent still needs the right identity, operation access, task authority, and any required approval.

Low trust is not proof that every request is malicious. It is a signal to examine with its supporting evidence and the current request.

## Example

Confirmed misuse can affect an agent's trust when that evidence is recorded by the deployment. If the agent is quarantined, an earlier approved request may no longer proceed.

The effect of different events depends on the configured scoring and implemented evidence paths. Do not assume every successful operation automatically improves trust or every reviewer decision changes the score.

Trust should be explainable through recorded evidence. If an apparent change has no clear explanation in the information available to you, ask an administrator to investigate.

Quarantine has a separate operational effect: it blocks governed work while the agent's status requires intervention.

## Related concepts

- [Agents and Identity](agents-and-identity)
- [Risk](risk)
- [Quarantine](quarantine)
