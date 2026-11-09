---
id: "manifest-errors"
title: "Manifest Validation Errors"
sidebar_position: 4
slug: "manifest-errors"
description: "Manifest Validation Errors — Synentra v2 documentation."
---

Manifest errors appear either as parse failures or validation issues. Inspect `issues[].code` and message for the affected reference.

| Code or family | Correction |
| --- | --- |
| UNSUPPORTED_API_VERSION | Use `synentra.io/v2alpha2`. |
| INVALID_KIND | Use `GovernanceBundle`. |
| DUPLICATE_*_ID | Make IDs unique within each object kind. |
| EMPTY_*_ID | Supply a non-empty identifier. |
| UNRESOLVED_PROFILE_REF | Define the referenced profile. |
| UNRESOLVED_POLICY_REF | Define every operation policy reference. |
| UNRESOLVED_OPERATION_REF | Bind to an existing operation. |
| UNRESOLVED_TARGET_REF | Bind to an existing target. |
| UNRESOLVED_ADAPTER_REF | Register the target adapter. |
| UNRESOLVED_RESOURCE_RESOLVER | Register the resource resolver implementation. |
| UNRESOLVED_EFFECT_RESOLVER | Register the effect resolver implementation. |
| UNRESOLVED_VERIFIER | Register the outcome verifier. |
| INVALID_MUTABILITY | Use a supported mutability value. |
| INVALID_EXECUTION_MODEL | Use a recognized model with an actually capable adapter. |
| DUPLICATE_RESOURCE_ROLE | Make operation resource roles unambiguous. |
| INVALID_POLICY_EFFECT | Use allow, review, or deny. |
| INVALID_QUANTIFIER | Use all or any. |
| MAPPING_MISSING_SOURCE | Specify one source for the mapping destination. |
| MAPPING_MULTIPLE_SOURCES | Reduce the entry to one source. |
| MAPPING_INVALID_POINTER | Use a JSON Pointer destination beginning with slash. |

## Parser failures

Reduce oversized input below 512 KiB. Remove duplicate keys, unknown fields, YAML anchors/aliases/tags, and multiple documents. Deep nesting can exceed the parser limit.

## Validation versus execution

Validation checks structure and registration. It does not certify target availability, valid credentials, or a functioning provider behind every advertised capability.

The filesystem sample references a custom resolver. If it fails registration checks, either install the intended resolver or use the simpler [QuickStart bundle](../../quickstart/first-invocation.md). Do not remove required governance merely to silence a validation error.
