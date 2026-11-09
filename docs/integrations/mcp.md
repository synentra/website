---
id: "mcp"
title: "Connect MCP Clients and Servers"
sidebar_position: 2
slug: "mcp"
description: "Connect MCP Clients and Servers — Synentra v2 documentation."
---

Synentra has two MCP boundaries: a client-facing gateway and an outbound adapter for registered MCP servers.

## Client-facing gateway

Configure the MCP client to send authenticated requests to `/mcp/{serverId}`. Initialize with protocol version `2025-11-25`, retain the session ID, and list tools before calling them.

Sessions bind agent, security scope, and server. Do not share a session among unrelated identities.

The [protocol reference](../reference/api/mcp-protocol) describes headers, methods, pagination, and error codes.

## Outbound server

Register an MCP target with its endpoint and adapter reference. Bind operations to tool names and define canonical argument mapping. Add a credential binding when required.

Listing tools does not bypass per-call governance. The gateway exposes registered bindings and excludes hard-restricted operations.

## Review and task authority

Send `io.synentra/taskGrantId` where required and `io.synentra/idempotencyKey` for mutation tools. Review-required calls return an approval reference. After approval, replay the original call using `io.synentra/approvalId` and matching arguments.

The gateway checks that the original caller, operation, binding, and argument digest still match. Approval cannot be transferred to an edited tool call.

## Pending and uncertain work

A -32073 error can represent accepted work that is still pending, not simply a failed call. Inspect its invocation ID and dispatch status. Poll through the REST invocation API where the client supports that workflow.

Cancellation notifications and session deletion do not imply rollback of an already dispatched external operation.
