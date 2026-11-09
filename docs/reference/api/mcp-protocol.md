---
id: "mcp-protocol"
title: "MCP Gateway Protocol"
sidebar_position: 10
slug: "mcp-protocol"
description: "MCP Gateway Protocol — Synentra v2 documentation."
---

The gateway exposes `POST /mcp/{serverId}` and `DELETE /mcp/{serverId}`. Authenticate each request. Server ID identifies a registered MCP target.

## Initialize

```json
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"synentra-example","version":"1.0.0"}}}
```

Save the returned `Mcp-Session-Id`. Subsequent requests must present the session header and use the same authenticated agent, security scope, and server route. Send the MCP protocol header as required by your client integration.

Supported methods include initialize, ping, initialized notifications, tools/list, tools/call, and cancellation notifications. GET/SSE transport is not part of the listed gateway routes.

## Tool calls

```json
{
  "jsonrpc":"2.0",
  "id":2,
  "method":"tools/call",
  "params":{
    "name":"REGISTERED_TOOL_NAME",
    "arguments":{},
    "_meta":{"io.synentra/idempotencyKey":"example-request-001"}
  }
}
```

Obtain the tool name from discovery. Additional metadata keys are `io.synentra/taskGrantId` and `io.synentra/approvalId`.

Tools/list uses cursor pagination with up to 100 entries. Listed tools remain subject to invocation governance.

## Governance errors

| JSON-RPC code | Meaning |
| --- | --- |
| -32070 | Denied or approval binding/state rejected. |
| -32071 | Human review required. |
| -32072 | Expired authorization. |
| -32073 | Admission/execution unavailable, pending, uncertain, or unsupported state; inspect data. |

Pending dispatch can use -32073 with an invocation identifier. Do not treat it as an instruction to submit a new mutation.

Standard parse/request/method/parameter errors use -32700, -32600, -32601, and -32602. DELETE ends an eligible session; it does not roll back dispatched operations.
