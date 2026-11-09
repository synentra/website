---
id: "http"
title: "Connect an HTTP API"
sidebar_position: 1
slug: "http"
description: "Connect an HTTP API — Synentra v2 documentation."
---

## Register the target and operation

Define a target with `adapterRef: http` and `configuration.endpoint`. Define an operation with an input schema, mutability, and applicable policies. Connect them with an HTTP binding's `method` and `path`.

Use the QuickStart's inventory example as a complete credential-free local pattern. For a real credential-bearing service, configure an HTTPS endpoint and credential binding.

## Request construction

The adapter uses the admitted method/path and mapped arguments. GET and HEAD do not carry the JSON argument body; other requests serialize arguments as JSON.

Do not assume arbitrary path templating or query interpolation. Verify the supported adapter mapping before modeling an operation that depends on it.

The safe outbound header subset includes Accept, If-Match, If-None-Match, Prefer, and User-Agent. Credential authorization is applied separately at runtime. The baseline idempotency header is `Idempotency-Key`.

## Response handling

Responses are bounded by configured size. The adapter records status/payload according to retention behavior. Credential-bearing payloads are omitted without an explicit retention policy.

An HTTP error response still counts as a received response; inspect the response status. A lost/oversized response or timeout after possible dispatch can leave uncertain execution.

## Integration test

1. Validate and activate the bundle.
2. Discover the operation as the actual agent.
3. Simulate representative allowed and denied requests.
4. Execute a read-only request against a test target.
5. Test review, credential failure, destination rejection, and timeout behavior.
6. For mutations, verify both Synentra and target idempotency semantics.

Keep target authorization in registered configuration, not arbitrary URLs supplied by the agent.
