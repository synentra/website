---
id: "manifests"
title: "Manifest API"
sidebar_position: 3
slug: "manifests"
description: "Manifest API — Synentra v2 documentation."
---

All three routes require an administrator.

| Method and route | Body | Success |
| --- | --- | --- |
| `POST /v2/manifests/validate` | Raw JSON or YAML bundle | 200 validation result. |
| `PUT /v2/manifests/{id}` | Raw JSON or YAML bundle | 200 with id, version, revision. |
| `POST /v2/manifests/{id}/activate` | Activation object | 200 if activated. |

## Validate

Send a supported content type: `application/json`, `application/yaml`, `text/yaml`, or accepted YAML variant `application/x-yaml`. The manifest limit is 512 KiB.

The validation result contains `isValid` and `issues`. Each issue includes severity, code, and message. Invalid validation returns 400. Parser errors use the exception response path.

## Store

The route ID must equal `metadata.name`; mismatch returns 409 with `MANIFEST_ID_MISMATCH`. A stored version is not automatically the active bundle.

## Activate

```json
{"version":"1.0.0","expectedActiveRevision":null}
```

Use null only for the applicable initial/no-expected-revision case. For an update, supply the known active revision to detect concurrent changes. The response is an activation result; an unactivated validation result returns 400, while activation conflicts use 409.

Store and activation do not establish network reachability or successful target authorization. Validate plugin availability and credentials separately.

## Example workflow

Use the complete commands in [QuickStart](../../quickstart/first-invocation). Inspect every response before submitting invocations. Activation changes can invalidate queued work under earlier revisions.
