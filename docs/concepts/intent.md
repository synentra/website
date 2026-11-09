---
id: "intent"
title: "Intent"
sidebar_label: "Intent"
sidebar_position: 5
slug: "intent"
description: "Understand how the purpose of an action contributes to governance."
---

Intent describes what an agent is trying to accomplish with a request. It gives governance additional context beyond the operation name and supplied information.

For example, reading records to prepare an authorized report has a different purpose from collecting them for an unrelated task.

## When does this matter?

Intent matters when an operation's governance configuration requires evidence about purpose, or when a reviewer needs to understand why the agent is requesting an action.

When your integration supports a declared purpose, provide a clear and specific explanation. State the task the action supports and why the requested access is needed.

A declared purpose is a claim supplied by the caller. It does not prove that the request is safe or authorize access by itself.

## How intent affects a request

Configured intent assessment can contribute evidence to governance. If required evidence is unavailable or unusable, the request may be denied or require review, according to the applicable configuration.

A plausible explanation cannot override a hard restriction, an expired grant, or a quarantined agent.

## Example

“Read item stock to prepare today's replenishment report” gives a reviewer more useful context than “perform task.” It still does not authorize the agent to change stock levels.

Intent assessment depends on the provider enabled in your deployment. The inspected baseline implementation does not supply a working intent classifier by default. Confirm that your deployment has a functioning provider before relying on automatic classification.

If a request is sent for review because required intent evidence is missing, provide context through the approved review process. Do not assume repeatedly rewording the purpose will solve an unavailable service.

## Related concepts

- [Policies and Restrictions](policies-and-restrictions)
- [Governance Decisions](governance-decisions)
- [Human Approval](human-approval)
