---
id: "persistence"
title: "Persistence and Backup"
sidebar_position: 3
slug: "persistence"
description: "Persistence and Backup — Synentra v2 documentation."
---

## Select a provider

SQLite is convenient for local evaluation:

```json
{"Persistence":{"Provider":"sqlite","Providers":{"sqlite":{"ConnectionString":"Data Source=synentra.db"}}}}
```

PostgreSQL uses the `postgres` provider key:

```json
{"Persistence":{"Provider":"postgres","Providers":{"postgres":{"ConnectionString":"Host=db.example.com;Port=5432;Database=synentra;Username=synentra;Password=REPLACE_ME"}}}}
```

The password is illustrative. Supply real database credentials using your deployment's secret process, not source-controlled files.

## Stored data

Persistence includes active bundles, credential bindings, approvals, grants, trust, invocation state, claims, dispatch work, outcome evidence, and audits. Capacity planning must account for execution and audit growth, not only bundle size.

Startup invokes the application's database initialization path. Do not assume arbitrary external migration commands are required or sufficient; use the provider's implementation for the version being deployed.

## Backup and restore

Back up the database and data-protection key ring with compatible retention. Encrypted local credentials may be unusable without the corresponding keys. Protect backups with the same care as the active service.

Test restore into an isolated environment. Check active revision, credential resolution, and pending/uncertain work before reconnecting restored state to real targets. Restoring state must not be treated as authorization to replay mutations.

## Operations

Use database health results, application logs, and trace identifiers to investigate startup failures. Check connection permissions and persistence paths before changing governance rules.

For production availability or multiple workers, test the chosen provider's coordination behavior under the intended deployment topology. Documentation of durable admission is not a substitute for deployment-specific failure testing.
