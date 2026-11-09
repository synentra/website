---
id: "operations-and-targets"
title: "Operations and Targets"
sidebar_label: "Operations and Targets"
sidebar_position: 3
slug: "operations-and-targets"
description: "Understand the actions your agent can request and the systems they affect."
---

An **operation** is a named action an agent can request. A **target** is the registered system that carries out the action, such as an HTTP service or an MCP server.

For example, “look up inventory” describes an operation; the connected inventory service is its target.

## When does this matter?

Use these concepts when deciding what an agent needs to do, reviewing a sensitive request, or investigating where an action was sent.

Operations help you reason about the capability being requested without needing to understand how its network request is constructed.

Choose from the operations made available to your agent. Supply the required information for the chosen action and check that its intended target is correct.

Administrators and integration owners register the operations and targets. A caller cannot turn an arbitrary website address or tool name into an authorized target just by including it in a request.

## Availability is not permission

An operation may be discoverable but still require a task grant or human review. Governance evaluates each request in context.

Read-only actions and actions that change data can have different requirements. Do not assume that access to a lookup operation also authorizes an update.

## Example

An agent can request “read item stock” and “update item stock.” Both use the inventory system, but the update may require a valid task grant and review.

If the action you need is unavailable, ask the integration owner whether an appropriate operation is registered. If the target cannot be reached, that is an execution problem; it does not automatically mean the agent lacks permission.

Review both the requested operation and its target before approving sensitive work.

## Related concepts

- [Invocations](invocations)
- [Policies and Restrictions](policies-and-restrictions)
- [Human Approval](human-approval)
