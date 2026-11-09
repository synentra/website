---
id: "opa"
title: "Open Policy Agent Integration"
sidebar_position: 3
slug: "opa"
description: "Open Policy Agent Integration — Synentra v2 documentation."
---

Synentra can delegate policy evaluation to OPA. Configure the provider and the keys read by the current implementation:

```json
{
  "Policy":{
    "Provider":"Opa",
    "Providers":{
      "Opa":{
        "BaseUrl":"http://localhost:8181/",
        "Path":"synentra/authz/decision",
        "Timeout":"00:00:05"
      }
    }
  }
}
```

The client appends `v1/data/` to BaseUrl and the configured path. Do not put a leading slash or an additional `v1/data` prefix in Path for this example.

The checked-in Development example uses `Url` and `DecisionPath`; those do not match the properties read by the inspected engine. Use BaseUrl and Path.

## Input

The POST body wraps an `input` object with schema `synentra.policy-input.v2`, agent identity and scope, operation, resources, grant ID, evidence (intent/risk/trust), and untrusted context.

Keep untrusted context distinct from authenticated identity in your policy.

## Result

OPA's `result` may be a boolean or object. Object flags are evaluated in deny, review, allow precedence; no true flag denies. Optional `revision` and string-array `reasons` describe the result.

Illustrative response:

```json
{"result":{"review":true,"revision":"policy-2026-11","reasons":["SENSITIVE_OPERATION"]}}
```

## Credentials and failures

If OpaBearerToken is configured, the endpoint must use HTTPS. Resolve secret material through supported deployment secret configuration.

Undefined, invalid, unreachable, or malformed responses fail closed. Timeouts and response limits are also subject to the configured HTTP client; do not assume a property alone independently controls every request.

Test allow, deny, review, undefined results, and outages before using OPA for live operations.
