---
id: "quarantine"
title: "Quarantine"
sidebar_label: "Quarantine"
sidebar_position: 13
slug: "quarantine"
description: "Understand why an agent may be blocked and what to do next."
---

Quarantine is a state that blocks an agent's governed work while its status requires intervention. It helps prevent continued action when the agent should no longer proceed normally.

## When does this matter?

Quarantine matters when new requests stop or pending work no longer proceeds despite an earlier allow decision or approval.

It is associated with the agent's status, not just an error in one request.

## What is affected?

Synentra checks quarantine during request evaluation and again at later points before execution. Work that was previously permitted can therefore be stopped before it reaches the connected system.

Human approval does not override quarantine.

As an agent owner, pause further attempts and inspect the relevant request history and available evidence. Contact the administrator responsible for the agent's status and follow the organization's investigation process.

Administrators should establish why the agent was quarantined and what must be corrected before resolving its status. The exact management workflow depends on the deployment.

## Example

An agent has an approved update waiting to execute. The agent is then quarantined following a separate event. The earlier approval does not entitle the queued update to bypass the new restriction.

Quarantine does not reverse actions already performed by a target. It is also not proof that every prior request was harmful.

If a request may already have been dispatched, inspect its execution result. An uncertain result may need verification before you can conclude whether any effect occurred.

Repeatedly submitting the same request will not resolve quarantine. Address the agent's status and its underlying cause first, then inspect whether any pending task still needs attention.

## Related concepts

- [Agent Trust](agent-trust)
- [Human Approval](human-approval)
- [Audit History](audit-history)
