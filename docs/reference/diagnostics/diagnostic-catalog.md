---
id: "diagnostic-catalog"
title: "Structured Diagnostic Catalog"
sidebar_position: 5
slug: "diagnostic-catalog"
description: "Structured Diagnostic Catalog — Synentra v2 documentation."
---

This catalog is generated from structured diagnostic declarations in the reviewed source. It preserves the current identifiers and messages, including reused identifiers. A code alone may therefore be insufficient to identify the cause: keep the message, endpoint, and trace ID.

Validation-kind diagnostics normally map to HTTP 400; not-found to 404, conflict to 409, unauthorized to 401, and forbidden to 403. Other paths can wrap errors differently. See [HTTP errors](http-errors.md) for operational recovery.

## Structured diagnostics

| Code | Kind | Message |
| --- | --- | --- |
| `SYN-APR-0001` | Validation | Approval has expired |
| `SYN-APR-0001` | Validation | Approval &#123;approvalId&#125; not found. |
| `SYN-APR-0002` | Validation | Cannot approve in state &#123;status&#125;. |
| `SYN-APR-0002` | Validation | Reviewer permission required. |
| `SYN-APR-0003` | Validation | Cannot reject in state &#123;status&#125;. |
| `SYN-APR-0003` | Validation | Self-approval denied. |
| `SYN-APR-0004` | Validation | Cannot revoke in state &#123;status&#125;. |
| `SYN-APR-0004` | Validation | Only admin or requesting agent may revoke. |
| `SYN-APR-0005` | Validation | Cannot consume in state &#123;status&#125;. |
| `SYN-BDG-0001` | Validation | Binding digest must be a 64-character hexadecimal string |
| `SYN-CRD-0001` | Validation | Secret requires offline ciphertext migration. |
| `SYN-CRD-0002` | Validation | Secret version not found. |
| `SYN-CRD-0003` | Validation | Credential provider unavailable. |
| `SYN-CRD-0004` | Validation | Credential unavailable or invalid. |
| `SYN-CRD-0005` | Validation | Secret value missing. |
| `SYN-CRD-0006` | Validation | Vault bootstrap configuration invalid. |
| `SYN-CRD-0007` | Validation | Invalid Vault path. |
| `SYN-CRD-0008` | Validation | Secret version disabled or not yet valid. |
| `SYN-CRD-0009` | Validation | Binary secrets are not authentication headers. |
| `SYN-CRD-0010` | Validation | Secret expired. |
| `SYN-CRD-0011` | Validation | Secret requires offline ciphertext migration. |
| `SYN-CRD-0012` | Validation | Secret access revoked. |
| `SYN-CRD-0013` | Validation | Credential provider missing or ambiguous. |
| `SYN-CRD-0014` | Validation | Secret invalidated during resolution. |
| `SYN-EFM-0001` | Validation | Measure required. |
| `SYN-EFM-0002` | Validation | Unit required. |
| `SYN-EFM-0003` | Validation | Scale must be non-negative. |
| `SYN-EFM-0004` | Validation | Upper bound must be non-negative. |
| `SYN-EXE-0001` | Validation | Cannot transition to Dispatching from state &#123;state&#125;. |
| `SYN-INT-0001` | Validation | Confidence must be 0-1 |
| `SYN-INV-0001` | Validation | Authenticated agent id is required |
| `SYN-INV-0001` | Validation | Invocation &#123;invocationId&#125; not found. |
| `SYN-INV-0002` | Validation | Cross-agent resume denied. |
| `SYN-INV-0002` | Validation | OperationId cannot be empty |
| `SYN-INV-0003` | Validation | Binding digest must be a 64-character hexadecimal string |
| `SYN-INV-0003` | Validation | No approval bound to invocation. |
| `SYN-INV-0004` | Validation | Approval not in approved state: &#123;status&#125;. |
| `SYN-OPR-0001` | Validation | OperationId cannot be empty |
| `SYN-OPR-0002` | Validation | OperationId cannot exceed 256 characters |
| `SYN-PLG-0001` | Validation | Plugin &#123;pluginId&#125; version &#123;version&#125; not found. |
| `SYN-QRT-0001` | Validation | Quarantine already released. |
| `SYN-RSD-0001` | Validation | Resource type required |
| `SYN-RSD-0002` | Validation | Resource type is invalid |
| `SYN-RSD-0003` | Validation | Security scope is invalid |
| `SYN-RSD-0004` | Validation | Authority domain is invalid |
| `SYN-RSK-0001` | Validation | Risk score must be 0-1 |
| `SYN-RSK-0002` | Validation | Coverage must be 0-1 |
| `SYN-RSK-0004` | Validation | Quantity cannot be negative |
| `SYN-RSK-0005` | Validation | Cannot perform operation on quantities with incompatible units |
| `SYN-SEC-0001` | Validation | Secret reference is empty. |
| `SYN-SEC-0002` | Validation | Secret reference is ambiguous (looks like a Windows path). |
| `SYN-TGR-0001` | Validation | Cannot revoke in state &#123;state&#125;. |
| `SYN-TGR-0001` | Validation | Issuer cannot grant zero or negative authority. |
| `SYN-TGR-0002` | Validation | Grant &#123;grantId&#125; not found. |
| `SYN-TGR-0003` | Validation | Only issuer or admin may revoke grant. |
| `SYN-TRU-0001` | Validation | Trust score must be 0-100 |

## Identifier collisions

The reviewed declarations reuse these codes: `SYN-APR-0001`, `SYN-APR-0002`, `SYN-APR-0003`, `SYN-APR-0004`, `SYN-INV-0001`, `SYN-INV-0002`, `SYN-INV-0003`, `SYN-TGR-0001`. Do not publish a one-to-one meaning for them until the source contracts are corrected.

## Other channels

Governance reasons, parser issues, and MCP JSON-RPC codes use their own identifiers. They are documented in the linked guides rather than treated as structured diagnostic codes.
