---
id: "credentials"
title: "Credentials and Secret Providers"
sidebar_position: 7
slug: "credentials"
description: "Credentials and Secret Providers — Synentra v2 documentation."
---

Credentials for target access are separate from agent authentication. A target references a credential binding that limits principal, scope, operations, target, and versioned secret source.

## Resolution tiers

| Tier | Purpose |
| --- | --- |
| Bootstrap | Inputs needed to construct infrastructure and secret providers. |
| Startup | Required dependencies before accepting normal work. |
| Runtime | Credentials resolved for an authorized target invocation. |

Most bootstrap values use environment or files. The implementation also supports restricted remote-provider database-bootstrap dependencies; use the supported secret-plan validator rather than inventing arbitrary dependency chains.

## Provider configuration

Provider IDs are `localvault`, `hashicorpvault`, `azurekeyvault`, and `awssecrets`. Their deployment sections use `Secrets:Providers:LocalVault`, `HashiCorpVault`, `AzureKeyVault`, and `AwsSecrets`.

HashiCorp uses endpoint, mount, and token. Azure uses endpoint and identity configuration. AWS uses region and identity configuration. See [provider integrations](../integrations/secret-providers).

## Local key protection

Configure `DataProtection:ApplicationName`, `KeyRingPath`, `RequireEncryptedKeyRing`, key lifetime, and certificate settings as required. Persist and protect the key ring; losing it can make stored ciphertext unusable.

## Binding lifecycle

Create a versioned secret, create its binding, then reference the binding from a target. Authority changes can invalidate queued work. Material-only rotation preserves authority while changing secret material through the dedicated rotation path.

Administration returns metadata; do not expect a plaintext-secret read endpoint. Local secret writes have a 70,000-byte request limit.

## Caching

Memory caching is bounded and time-limited. Outage behavior can require the provider or use unexpired cached values. Expiry and revocation remain meaningful; caching is not permanent authorization.

See [credential API](../reference/api/credentials) for exact request fields.
