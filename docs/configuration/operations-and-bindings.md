---
id: "operations-and-bindings"
title: "Operations, Targets, and Bindings"
sidebar_position: 5
slug: "operations-and-bindings"
description: "Operations, Targets, and Bindings — Synentra v2 documentation."
---

## Operation

An operation declares its ID, version, family, action, mutability, execution model, input schema, governance profile, policy references, and optional grant/resource/effect/verification requirements.

Use `read_only` for operations that do not change target state and `mutation` for changes. Do not label a mutation read-only to bypass idempotency. Baseline execution is `request_response`.

## Target

A target selects an adapter and endpoint, with optional credential binding and response-retention configuration. Register destinations deliberately; the client cannot choose arbitrary endpoints in ordinary arguments.

## Binding

A binding connects an operation to a target. For HTTP it supplies the method and path; for MCP it supplies a tool name. Mappings convert canonical arguments to transport arguments.

```json
{
  "id": "inventory-read-http",
  "version": "1",
  "operationId": "inventory.read",
  "targetRef": "inventory-api",
  "configuration": {"method":"GET","path":"/item"}
}
```

The referenced operation and target must exist. If an invocation omits binding ID, exactly one binding must match.

## Mapping rules

Mapping destinations use JSON Pointer paths. A mapping entry has one source: `inputPointer`, `targetPointer`, `resourceField`, or `constant`; optional `role` identifies a resource role.

For example, `"/itemId": {"inputPointer":"/id"}` maps the canonical ID into a target argument. Test both canonical-to-target and target-to-canonical mapping where used.

## Resource and effect dependencies

A resource resolver supplies authoritative resource descriptors; an effect resolver supplies bounded quantities. Referenced implementations and versions must be registered. Unknown effect bounds stop admission.

See [HTTP integration](../integrations/http) and [MCP integration](../integrations/mcp) for protocol behavior.
