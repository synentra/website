---
id: "networking-and-retention"
title: "Outbound Networking and Response Retention"
sidebar_position: 8
slug: "networking-and-retention"
description: "Outbound Networking and Response Retention — Synentra v2 documentation."
---

## Network controls

`OutboundHttp` controls private-address allowance, response-size limits, and timeout. Development examples allow private addresses for local services. Set the intended policy explicitly for deployment.

Governed target HTTP requests validate the authorized destination, reject URI user information, disable automatic redirects/cookies/proxy use, and check resolved IP addresses before connecting to a validated address. Credential-bearing requests require HTTPS.

These controls complement operation authorization. A governance allow does not permit a request to bypass destination or TLS checks.

## Retention

Targets can set:

```json
{
  "responseRetention": {
    "mode": "json-allowlist",
    "allowedProperties": ["product_id","name","quantity"]
  }
}
```

For credential-bearing responses, no configured policy omits the payload. `omit` also omits it. JSON allowlisting requires an object and selects root properties, then removes sensitive names and recognized credential representations.

The credential-free path currently returns the full payload regardless of this policy. Treat these settings as credential-aware retention, not universal content filtering or general data-loss prevention.

The adapter reads retention settings at dispatch; they are not fully frozen in the execution snapshot.

## CORS

Browser clients need their origin and headers allowed. Add `Idempotency-Key` for mutation requests and MCP session/protocol headers for browser MCP integrations where required. CORS does not authenticate a caller or authorize an operation.

## Failure handling

Blocked destinations fail before a valid target exchange. Timeouts after possible dispatch can produce uncertainty. Inspect execution state before deciding whether a retry is safe.
