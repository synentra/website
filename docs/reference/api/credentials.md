---
id: "credentials"
title: "Credential Administration API"
sidebar_position: 9
slug: "credentials"
description: "Credential Administration API — Synentra v2 documentation."
---

All routes below require administrator authentication. The prefix is `/v2/admin/credentials`; request bodies are limited to 70,000 bytes.

| Method and suffix | Body/query | Success |
| --- | --- | --- |
| PUT `/secrets/{path}/{version}` | scheme, value, expiresAt | 204 |
| DELETE `/secrets/{path}/{version}` | None | 204 |
| GET `/secrets` | Optional page | 200 metadata page |
| PUT `/bindings/{id}` | binding, expectedVersion | 204 |
| GET `/bindings/{id}` | None | 200 or 404 |
| DELETE `/bindings/{id}` | expectedVersion query | 204 or 404 |
| POST `/rotate` | bindingId, secretRef, expectedVersion | 200 |
| GET `/state` | providerId, path, version queries | 200 |
| POST `/state` | secretRef, expectedGeneration, revoke | 200 |

Binding routes use a catch-all ID. Secret path routes use one path segment; use a simple segment for local-secret examples.

## Store a local version

```json
{"scheme":"Bearer","value":"REPLACE_WITH_SECRET","expiresAt":null}
```

The API lists metadata, not plaintext secret material. Avoid capturing real values in request logs.

## Put a binding

```json
{
  "binding":{
    "id":"inventory-credential",
    "targetRef":"inventory-api",
    "allowedPrincipal":"demo-agent",
    "delegationScope":"demo",
    "allowedOperations":["inventory.read"],
    "secretRef":{"providerId":"localvault","secretPath":"inventory","version":"1","field":"value"},
    "version":"binding-v1"
  },
  "expectedVersion":null
}
```

The route ID must match the body ID. Replace principal and scope with actual values. Credential-bearing target calls require HTTPS; do not attach this to the HTTP-only local demo.

## Rotation and state

Material rotation uses a new secret reference and expected binding version, preserving authority through the dedicated path. Its response includes version and authorityVersion.

Secret state changes use an expected generation for concurrency and return generation/revoked. Provider IDs must be recognized. Version/generation conflicts must be resolved by rereading state rather than overwriting blindly.
