---
id: "operations-settings"
title: "Workers, Logging, and Trust"
sidebar_position: 9
slug: "operations-settings"
description: "Workers, Logging, and Trust — Synentra v2 documentation."
---

## Background execution

The checked-in configuration contains `BackgroundJobs:Outbox` and `BackgroundJobs:ClaimExpiration`, with enabled and polling settings. Verify which properties the deployed worker actually consumes.

In the inspected outbox loop, the batch size is 20 and eligible records have fewer than five attempts. Do not advertise arbitrary tuning of these values solely because a configuration property exists.

## Logging and telemetry

File and Seq settings appear under `Logging`. Application logging and persisted audit records are separate from OpenTelemetry.

The baseline startup call to enable OpenTelemetry is commented out. Setting `OpenTelemetry:Enabled` alone does not enable exports until the integration is registered. Verify exporters and the configured endpoint in a real deployment.

Do not add raw tokens or target secrets to logs while investigating failures.

## Trust

The development configuration starts trust at 50, uses quarantine threshold 10, and limits manual adjustment to 10. Evidence weights include successful execution +1, confirmed misuse −25, policy violation −5, and reviewer action 0.

These are configured values, not guarantees that every event automatically emits trust evidence. Verify the evidence path before relying on an automatic update.

## Startup and readiness

Manifest/database health and startup-secret readiness are separate concerns. A startup secret failure gates requests with 503. An active bundle is needed for ordinary governance.

Changing settings can require restarting the application depending on the service and options registration. Avoid assuming all values reload live. Governance activation uses its explicit version/revision lifecycle.
