---
id: "execution-guarantees"
title: "Durability, Retries, and Outcomes"
sidebar_position: 3
slug: "execution-guarantees"
description: "Durability, Retries, and Outcomes — Synentra v2 documentation."
---

## Admission boundary

The admitted transaction records the invocation, authorized snapshot, execution claim, audit entry, and durable dispatch work. Admission does not commit a partially authorized operation when its checks fail.

The snapshot captures operation, target, arguments, revision, and credential authority. It preserves authorization context; it is not a copy of raw credentials or every deployment setting.

## Dispatch boundary

The worker persists dispatch ownership and marks the outbox record processed before external I/O. This avoids automatically replaying a mutation whose effect may already have occurred.

A process failure after that boundary can leave uncertain work. Durable execution is not an exactly-once guarantee for an external system.

## Idempotency

Mutations require `Idempotency-Key`. Deduplication is scoped to agent, security scope, operation, and key; a changed request digest conflicts. Baseline retention is 24 hours.

Target-side idempotency remains a separate capability. Forwarding a key does not prove that the target honors it.

## Cancellation and reconciliation

Cancellation is limited to eligible work before dispatch and releases its reservations. It is not a remote rollback.

Reconciliation uses the configured verifier to read authoritative evidence. It does not repeat the mutation. The inspected handler records evidence without automatically replacing transport status or settling every reservation.

## Operational implications

Record request identifiers, poll existing work, and reconcile uncertainty before retrying a potentially effective mutation. Preserve database and encryption keys together in backup planning.

The baseline claim lifetime is 60 seconds; the worker reads up to 20 eligible records with fewer than five attempts. Validate multi-instance behavior and operational tuning against the exact version rather than inferring guarantees from configuration names.
