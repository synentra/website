---
id: "first-invocation"
title: "Register a Bundle and Make a Request"
sidebar_position: 2
slug: "/quickstart/first-invocation"
description: "Register a Bundle and Make a Request — Synentra v2 documentation."
---

Complete [local setup](local-development) first. Commands below run from this documentation package and use Bash with curl. In PowerShell, use `curl.exe` and its native argument continuation rules, or the included REST request file.

## 1. Prepare tokens

Set `SYNENTRA_ADMIN_TOKEN` and `SYNENTRA_AGENT_TOKEN` in your terminal using your identity provider's issued access tokens. Do not use the literal names as token values.

The sample policy permits `demo-agent`. If your provider uses a different agent ID, edit `examples/quickstart-bundle.json` before continuing.

## 2. Validate and store

```bash
curl --fail-with-body http://localhost:7080/v2/manifests/validate \
  -H "Authorization: Bearer $SYNENTRA_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  --data-binary @examples/quickstart-bundle.json

curl --fail-with-body -X PUT http://localhost:7080/v2/manifests/quickstart \
  -H "Authorization: Bearer $SYNENTRA_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  --data-binary @examples/quickstart-bundle.json
```

Validation must return `isValid: true`. Storage does not activate the bundle.

## 3. Activate

```bash
curl --fail-with-body http://localhost:7080/v2/manifests/quickstart/activate \
  -H "Authorization: Bearer $SYNENTRA_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"version":"1.0.0","expectedActiveRevision":null}'
```

This initial-activation example assumes no current active revision. For an update, supply the known current revision to detect concurrent changes. Inspect `activated` and any validation issues in the response.

## 4. Submit the read operation

```bash
curl --fail-with-body -i http://localhost:7080/v2/invocations \
  -H "Authorization: Bearer $SYNENTRA_AGENT_TOKEN" \
  -H "Content-Type: application/json" \
  --data-binary @examples/invocation.json
```

Expect an allow decision for the configured agent. A 202 response means review or execution is still pending; it is not proof of target success. Save `invocationId` and poll the returned `Location` using the same agent token.

The mock response contains item information. Inspect `execution.responseStatusCode`, `responsePayload`, and execution status. If the outcome is unknown, inspect existing work before retrying. See [errors](../reference/diagnostics/http-errors).
