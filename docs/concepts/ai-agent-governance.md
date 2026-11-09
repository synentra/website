---
id: "ai-agent-governance"
title: "AI Agent Governance"
sidebar_label: "AI Agent Governance"
sidebar_position: 1
slug: "ai-agent-governance"
description: "Understand how Synentra governs the actions your agents request."
---

Synentra helps you control what AI agents can do in connected systems. It evaluates requested actions against your organization's rules, asks for human review when required, and records what happens.

## When does this matter?

Use governance when an agent can access information or take actions with real consequences—for example, updating an inventory record or changing a workspace file. Connecting an agent to a system does not mean every action should be permitted.

## How it works for you

You work with a set of available **operations**: named actions that an agent can request. Synentra identifies the caller, evaluates the request, and returns a decision:

- **Allow:** The request can proceed to the next checks.
- **Review:** A person must decide whether the request may continue.
- **Deny:** The request stops.

An allowed or approved request can still be stopped if its authority is no longer valid before execution.

As an agent owner, choose the operations the agent needs and understand the rules that apply. As a reviewer, examine requests that need human judgment. As an administrator, manage the applicable configuration and access controls.

Your permissions determine which of these activities are available to you. These roles do not imply a particular dashboard or screen.

## Example

An agent can read stock levels automatically. A request to change stock levels may require review. A request to access an unregistered system cannot gain permission simply by describing a useful purpose.

Keep permission and completion separate. “Allowed” means the request passed governance; it does not mean the connected system has completed the action. Check the invocation and execution result before reporting success.

## Related concepts

- [Operations and Targets](operations-and-targets)
- [Governance Decisions](governance-decisions)
- [Invocations](invocations)
