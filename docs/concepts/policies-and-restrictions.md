---
id: "policies-and-restrictions"
title: "Policies and Restrictions"
sidebar_label: "Policies and Restrictions"
sidebar_position: 6
slug: "/concepts/policies-and-restrictions"
description: "Understand the rules that govern requested actions."
---

Policies and restrictions define how Synentra handles requests. They establish which actions are prohibited, which can proceed, and which require human judgment.

## Policies and restrictions

A **restriction** can prohibit an agent from using a particular operation or family of operations. Hard restrictions stop the request early and cannot be bypassed by ordinary human approval.

A **policy** evaluates the request using the evidence supported by the configured policy engine and produces an allow, review, or deny outcome.

## When does this matter?

These rules matter when an agent owner wants to understand permitted behavior, a reviewer assesses a request, or an administrator changes how the organization controls access.

As a caller, choose an appropriate operation and provide the information it requires. If a request is denied, inspect its reason rather than assuming it needs an approval.

As an administrator, manage rules through the deployment's supported configuration process. Confirm the capabilities of the selected policy engine before relying on a particular condition.

## Example

An organization may prohibit an agent from all deletion operations while requiring review for selected updates. A reviewer can consider an update sent for review, but approval is not a route around the deletion restriction.

Rules can change while work is pending. A previously allowed request may stop before execution if its authorization is no longer current.

A policy decision also does not remove execution safeguards. Valid grants, available limits, current agent status, and the authorized destination still matter.

Use the recorded decision and its supporting explanation to determine whether the request itself, its authority, or the organization's rules need attention.

## Related concepts

- [Governance Decisions](governance-decisions.md)
- [Task Grants](task-grants.md)
- [Audit History](audit-history.md)
