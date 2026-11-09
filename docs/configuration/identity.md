---
id: "identity"
title: "Identity and Access"
sidebar_position: 2
slug: "identity"
description: "Identity and Access — Synentra v2 documentation."
---

## OIDC settings

```json
{
  "Identity": {
    "Provider": "oidc",
    "Claims": {
      "AgentId": "sub",
      "Roles": "roles",
      "SecurityScope": "security_scope"
    },
    "Providers": {
      "oidc": {
        "Authority": "https://identity.example.com/realms/synentra",
        "Issuer": "https://identity.example.com/realms/synentra",
        "Audience": "synentra-agents",
        "RequireHttpsMetadata": true
      }
    }
  }
}
```

Replace the illustrative issuer with your actual provider. Configure token issuance there; Synentra is not the token issuer. Required claim values must come from validated authentication.

## Claim mapping

Exactly one authenticated identity is accepted. Agent ID, security scope, issuer, and subject must be present and unambiguous. Duplicate required claims are rejected even when their values match.

Roles are separate claim values, such as a top-level array. OAuth `scope` values are space-delimited permissions and are not used as role names.

| Role | Principal type |
| --- | --- |
| `admin` | Administrator |
| `reviewer` | Reviewer |
| `trusted-issuer` | Grant issuer |
| None of those | Agent |

Precedence follows the table. Trusted issuers need the `synentra_grant_limits` bounded-authority claim for grant creation. Administrators use a separate authority path.

## Approval settings

```json
{"Approvals":{"AllowSelfApproval":false,"AllowCrossScopeApproval":false}}
```

These settings do not turn a hard deny into an approvable request. Follow the [API reference](../reference/api/approvals) for action-specific access checks.

## Diagnosis

For 401, verify signing metadata, issuer, audience, expiry, and required claims. For denied access, inspect the actual action's role and ownership rules. Do not weaken token validation to resolve an unrelated policy denial.
