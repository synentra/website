---
id: "governance-bundles"
title: "Governance Bundles and Activation"
sidebar_position: 4
slug: "governance-bundles"
description: "Governance Bundles and Activation — Synentra v2 documentation."
---

A GovernanceBundle versions the operations and rules active in Synentra. It is accepted as JSON or restricted YAML.

## Structure

```yaml
apiVersion: synentra.io/v2alpha2
kind: GovernanceBundle
metadata:
  name: quickstart
  version: "1.0.0"
spec:
  profiles: []
  targets: []
  operations: []
  bindings: []
  restrictions: []
  policies: []
```

This shows structure only. Use `examples/quickstart-bundle.json` for the complete runnable-target example.

## Lifecycle

Validate the candidate, store it under its metadata name, then activate its version. Storage and activation are separate. On updates, supply the expected current active revision to detect concurrent changes.

A bundle's metadata version is an author-supplied label; the active revision identifies the stored configuration used for authorization. Do not substitute one for the other.

## Parsing rules

The parser limits manifests to 512 KiB and nesting depth to 64. Unknown fields and duplicate keys are rejected. YAML anchors, aliases, explicit tags, and multiple documents are not accepted.

Validation checks identifiers, references, supported values, mappings, and registered plugins. Successful validation does not establish that a remote target is reachable or that credentials are valid.

## Change impact

Queued work can fail if the active revision changes before dispatch. Plan configuration activation around pending sensitive work; do not assume existing approvals permanently authorize new configuration.

The legacy `samples/v1` files use earlier contracts. The v2 filesystem example also references a custom resolver and credential binding; adapt and register those dependencies before use.

See [Manifest API](../reference/api/manifests) and [schema reference](schema-reference).
