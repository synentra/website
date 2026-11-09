---
id: "extensions"
title: "Custom Resolvers and Verifiers"
sidebar_position: 5
slug: "extensions"
description: "Custom Resolvers and Verifiers — Synentra v2 documentation."
---

Use extensions when the baseline cannot supply authoritative resources, bounded effects, or evidence of a target outcome.

## Resource resolvers

A resolver converts canonical request references into resource descriptors with identity, scope, and trusted attributes. Register the required reference and version. Unavailable, unauthorized, or missing resources prevent evaluation from treating the descriptor as valid.

Avoid copying caller-provided claims into trusted attributes without verification.

## Effect resolvers

An effect resolver describes bounded quantities using measure, unit, scale, budget identity, and upper bound. The configured resolver supports a fixed bound or an integer argument with a configured maximum.

Admission rejects unknown bounds. Design resolver output to match grant and budget quantities exactly.

## Outcome verifiers

The baseline HTTP readback verifier is `http-readback` version `1.0.0`. It uses a configured endpoint, adds the execution ID, bounds its response to 64 KiB, and records an evidence digest.

The verifier must check authoritative state rather than re-executing the mutation. Verified, contradicted, and unknown are distinct outcomes.

## Registration and tests

A manifest reference does not install code. Register the implementation and plugin metadata, confirm its supported version, and test both normal and unavailable paths.

For any extension, document its input, trusted evidence source, timeout behavior, scope boundary, and failure result. Do not advertise end-to-end obligation execution merely because a handler is registered; that orchestration is incomplete in the inspected baseline.
