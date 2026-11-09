---
id: "overview"
title: "API Conventions and Authentication"
sidebar_position: 1
slug: "overview"
description: "API Conventions and Authentication — Synentra v2 documentation."
---

The current REST prefix is `/v2`. Send `Authorization: Bearer ACCESS_TOKEN` on authenticated requests and `Content-Type: application/json` for JSON bodies.

## Discover the deployed contract

The host exposes the API UI at `/open-api` and its OpenAPI document at `/open-api/synentra/specifications.json`. Use the deployed document alongside this reference for version-specific serialization details.

The source-derived [DTO reference](data-contracts) covers body and result types. OpenAPI generation from minimal handlers may not describe every runtime branch, so the status and access notes here remain relevant.

## Common responses

| Status | Interpretation |
| --- | --- |
| 200 | Read, simulation, or completed handler response; inspect application outcome. |
| 201 | Task grant created. |
| 202 | Invocation pending/reviewing or cancellation accepted. |
| 204 | Successful action without body. |
| 400 | Invalid input, validation, or invalid state in some diagnostic paths. |
| 401 / 403 | Authentication or authorization failure; governance deny also uses 403. |
| 404 | Missing or not visible to the caller. |
| 409 | Conflicting version, idempotency, or unsupported lifecycle action. |
| 410 | Expired approval authority in the applicable exception path. |
| 413 / 415 | Payload too large / unsupported manifest media type. |
| 500 / 503 | Internal failure / unavailable service or dependency. |

Not every error is the same envelope. Middleware errors have problem fields, `errorCode`, and `traceId`; some endpoint responses contain only `errorCode`, validation issues, or no body. A denied invocation returns its normal invocation-result body.

## Pagination

Operations, pending approvals, and audits use `pageNumber` and `pageSize`. Responses include `items`, `pageNumber`, `pageSize`, `totalCount`, `totalPages`, `hasPreviousPage`, and `hasNextPage`.

The general page size defaults to 20 and clamps to 200; operation listing explicitly defaults to 50. Credential listing uses a separate `page` query and fixed 50-item pages.

See [HTTP errors](../diagnostics/http-errors) for response parsing.
