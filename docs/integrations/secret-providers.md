---
id: "secret-providers"
title: "Secret Provider Integrations"
sidebar_position: 4
slug: "secret-providers"
description: "Secret Provider Integrations — Synentra v2 documentation."
---

## Provider selection

| Provider ID | Deployment section | Required integration inputs |
| --- | --- | --- |
| localvault | Secrets:Providers:LocalVault | Enabled local provider and persistent protected key ring. |
| hashicorpvault | Secrets:Providers:HashiCorpVault | Endpoint, mount, bootstrap token. |
| azurekeyvault | Secrets:Providers:AzureKeyVault | Endpoint and supported workload/client identity settings. |
| awssecrets | Secrets:Providers:AwsSecrets | Region and supported web-identity/access-key settings. |

Do not confuse provider IDs used in secret references with deployment-section casing.

## Versioned references

```json
{"providerId":"azurekeyvault","secretPath":"inventory-api-token","version":"PROVIDER_VERSION","field":"value"}
```

The version must identify the intended provider material. Confirm the provider-specific interpretation before rotating production credentials.

Azure settings include Identity, ClientId, TenantId, and ClientSecret. AWS settings include Identity, AccessKey, SecretKey, and SessionToken. HashiCorp includes Mount and Token. Supply secret values through bootstrap configuration rather than embedding them in docs.

## Dependency planning

A provider may require bootstrap credentials before it can resolve later secrets. Declare supported tier dependencies and validate the plan. Cycles, duplicate destinations, invalid tiers, and unsupported providers are rejected.

The no-secrets mode and provider-enablement paths have specific validation behavior. Confirm the selected deployment plan rather than assuming LocalVault enablement alone satisfies every remote-provider configuration rule.

## Test and rotate

Resolve a non-production secret, create a scoped binding, and exercise an HTTPS target. Test expiry, revocation, and provider outage. Rotate through the supported binding rotation API with expected version.

A provider outage does not authorize indefinite cache use. Cache TTL, secret expiry, revocation, and outage policy remain relevant.
