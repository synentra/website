---
id: "settings-reference"
title: "Deployment Settings Reference"
sidebar_position: 11
slug: "settings-reference"
description: "Deployment Settings Reference — Synentra v2 documentation."
---

These values come from the checked-in Development configuration. They are not production recommendations or proof that every option is consumed by the runtime. Environment overrides replace colons with double underscores.

The OPA implementation reads `BaseUrl` and `Path`; the `Url` and `DecisionPath` entries below are legacy example keys and must be corrected as explained in [OPA integration](../integrations/opa). Semantic provider entries do not make the baseline intent stub a functioning classifier.

## Kestrel

| Key | Checked-in development value |
| --- | --- |
| `Kestrel:Endpoints:Http:Url` | `"http://localhost:7080"` |
| `Kestrel:Limits:MaxConcurrentConnections` | `1000` |
| `Kestrel:Limits:MaxConcurrentUpgradedConnections` | `1000` |
| `Kestrel:Limits:KeepAliveTimeout` | `"00:02:00"` |
| `Kestrel:Limits:RequestHeadersTimeout` | `"00:00:30"` |
| `Kestrel:Limits:MaxRequestBodySize` | `52428800` |

## Cors

| Key | Checked-in development value |
| --- | --- |
| `Cors:AllowedOrigins` | `["https://localhost:7181"]` |
| `Cors:AllowedMethods` | `["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]` |
| `Cors:AllowedHeaders` | `["Content-Type", "Authorization"]` |

## OutboundHttp

| Key | Checked-in development value |
| --- | --- |
| `OutboundHttp:AllowPrivateAddresses` | `true` |
| `OutboundHttp:MaxResponseBodySizeBytes` | `2097152` |
| `OutboundHttp:Timeout` | `"00:00:30"` |

## DataProtection

| Key | Checked-in development value |
| --- | --- |
| `DataProtection:ApplicationName` | `"synentra"` |
| `DataProtection:KeyRingPath` | `"./data/keys"` |
| `DataProtection:RequireEncryptedKeyRing` | `false` |
| `DataProtection:DefaultKeyLifetime` | `"90.00:00:00"` |
| `DataProtection:Certificate:Path` | `""` |

## Persistence

| Key | Checked-in development value |
| --- | --- |
| `Persistence:Provider` | `"sqlite"` |
| `Persistence:Providers:sqlite:ConnectionString` | `"Data Source=synentra.db"` |
| `Persistence:Providers:postgres:ConnectionString` | `"Host=localhost;Port=5432;Database=synentra;Username=postgres;Password=YOURPASSWORD"` |

## Logging

| Key | Checked-in development value |
| --- | --- |
| `Logging:LogLevel:Default` | `"Information"` |
| `Logging:File:Enabled` | `true` |
| `Logging:File:LogPath` | `"logs/log-.txt"` |
| `Logging:File:RollingInterval` | `"Day"` |
| `Logging:File:RetainedFileCountLimit` | `7` |
| `Logging:File:MinimumLevel` | `"Warning"` |
| `Logging:Seq:Enabled` | `false` |
| `Logging:Seq:Url` | `"http://localhost:5341"` |
| `Logging:Seq:ApiKeySecretRef` | `null` |
| `Logging:Seq:MinimumLevel` | `"Information"` |

## OpenTelemetry

| Key | Checked-in development value |
| --- | --- |
| `OpenTelemetry:Enabled` | `false` |
| `OpenTelemetry:Endpoint` | `"http://localhost:4317"` |
| `OpenTelemetry:ServiceName` | `"synentra"` |
| `OpenTelemetry:ExportLogs` | `false` |
| `OpenTelemetry:ExportTraces` | `true` |
| `OpenTelemetry:ExportMetrics` | `true` |

## Identity

| Key | Checked-in development value |
| --- | --- |
| `Identity:Provider` | `"oidc"` |
| `Identity:Claims:AgentId` | `"sub"` |
| `Identity:Claims:Roles` | `"roles"` |
| `Identity:Claims:SecurityScope` | `"security_scope"` |
| `Identity:Providers:oidc:Authority` | `"http://localhost:8080/realms/synentra"` |
| `Identity:Providers:oidc:Audience` | `"synentra-agents"` |
| `Identity:Providers:oidc:Issuer` | `"http://localhost:8080/realms/synentra"` |
| `Identity:Providers:oidc:RequireHttpsMetadata` | `false` |
| `Identity:Providers:ldap:Endpoint` | `"ldap://localhost:389"` |
| `Identity:Providers:ldap:BaseDn` | `"dc=example,dc=com"` |
| `Identity:Providers:ldap:UserDnPattern` | `"uid={0},ou=users,dc=example,dc=com"` |
| `Identity:Providers:ldap:BindDn` | `"cn=admin,dc=example,dc=com"` |
| `Identity:Providers:ldap:BindPasswordSecretRef` | `"<your-ldap-password-secret-ref>"` |

## Approvals

| Key | Checked-in development value |
| --- | --- |
| `Approvals:AllowSelfApproval` | `false` |
| `Approvals:AllowCrossScopeApproval` | `false` |

## Trust

| Key | Checked-in development value |
| --- | --- |
| `Trust:InitialScore` | `50` |
| `Trust:QuarantineThreshold` | `10` |
| `Trust:MaxManualAdjustment` | `10` |
| `Trust:EvidenceWeights:SuccessfulExecution` | `1` |
| `Trust:EvidenceWeights:ConfirmedMisuse` | `-25` |
| `Trust:EvidenceWeights:PolicyViolation` | `-5` |
| `Trust:EvidenceWeights:ReviewerAction` | `0` |

## Semantic

| Key | Checked-in development value |
| --- | --- |
| `Semantic:Providers:Internal:ModelType` | `"Community"` |
| `Semantic:Providers:Internal:PackagePath` | `"/models/community-model.zip"` |
| `Semantic:Providers:Ollama:Endpoint` | `"http://localhost:11434"` |
| `Semantic:Providers:Ollama:Model` | `"llama3.2"` |
| `Semantic:Providers:AzureAi:Endpoint` | `"https://<your-endpoint>.inference.ai.azure.com"` |
| `Semantic:Providers:AzureAi:ApiKey` | `"<your-api-key>"` |
| `Semantic:Providers:AzureAi:Model` | `"gpt-4o-mini"` |
| `Semantic:Providers:OpenAi:ApiKey` | `"<your-openai-api-key>"` |
| `Semantic:Providers:OpenAi:Model` | `"gpt-4o-mini"` |
| `Semantic:Providers:Gemini:ApiKey` | `"<your-gemini-api-key>"` |
| `Semantic:Providers:Gemini:Model` | `"gemini-2.0-flash"` |

## Policy

| Key | Checked-in development value |
| --- | --- |
| `Policy:Provider` | `"Declarative"` |
| `Policy:Providers:Opa:Url` | `"http://localhost:8181"` |
| `Policy:Providers:Opa:DecisionPath` | `"synentra/authz/decision"` |
| `Policy:Providers:Opa:Timeout` | `"00:00:05"` |

## BackgroundJobs

| Key | Checked-in development value |
| --- | --- |
| `BackgroundJobs:Outbox:Enabled` | `true` |
| `BackgroundJobs:Outbox:PollingInterval` | `"00:00:02"` |
| `BackgroundJobs:Outbox:MaxAttempts` | `5` |
| `BackgroundJobs:ClaimExpiration:Enabled` | `true` |
| `BackgroundJobs:ClaimExpiration:PollingInterval` | `"00:00:30"` |

## Initialization

| Key | Checked-in development value |
| --- | --- |
| `Initialization:ManifestBootstrap:Enabled` | `true` |

## Secrets

| Key | Checked-in development value |
| --- | --- |
| `Secrets:Provider` | `"none"` |
| `Secrets:Providers:LocalVault:Enabled` | `true` |
| `Secrets:Resolution:Timeout` | `"00:00:30"` |
| `Secrets:Cache:Mode` | `"memory"` |
| `Secrets:Cache:Ttl` | `"00:01:00"` |
| `Secrets:Cache:MaximumEntries` | `1024` |
| `Secrets:Cache:OutagePolicy` | `"use-unexpired-cache"` |

## Provider and deployment models

The following declarations include additional properties that may not appear in the Development file. Validate provider registration and configuration before use.

### OidcConfiguration

```csharp
namespace Synentra.Infrastructure.Configuration.Identity;



/// <summary>

/// External provider settings (Keycloak, Auth0, Azure AD, Custom)

/// </summary>

public class OidcConfiguration

{

    public string Authority { get; set; } = string.Empty;

    public string Audience { get; set; } = string.Empty;

    public string Issuer { get; set; } = string.Empty;

    public bool RequireHttpsMetadata { get; set; } = true;



}
```

### DataProtectionConfiguration

```csharp
using System.Security.Cryptography.X509Certificates;



namespace Synentra.Infrastructure.Configuration.DataProtection;



public sealed class DataProtectionConfiguration : ISynentraConfiguration

{

    public static string SectionName => "DataProtection";



    public string ApplicationName { get; set; } = "synentra";

    public string KeyRingPath { get; set; } = "./data/keys";

    public bool RequireEncryptedKeyRing { get; set; } = false;

    public TimeSpan DefaultKeyLifetime { get; set; } = TimeSpan.FromDays(90);

    public KeyRingCertificateConfiguration Certificate { get; set; } = new();

}



public sealed class KeyRingCertificateConfiguration

{

    public string? Path { get; set; }

    public string? Password { get; set; }

    public string? Thumbprint { get; set; }

    public StoreName StoreName { get; set; } = StoreName.My;

    public StoreLocation StoreLocation { get; set; } = StoreLocation.CurrentUser;

}
```

### OutboundHttpConfiguration

```csharp
namespace Synentra.Infrastructure.Configuration.OutboundHttp;



public class OutboundHttpConfiguration: ISynentraConfiguration

{

    public static string SectionName => "OutboundHttp";



    public bool? AllowPrivateAddresses { get; set; } = false;

    public int? MaxResponseBodySizeBytes { get; set; } = 2 * 1024 * 1024; // 2MB

    public TimeSpan? Timeout { get; set; } = TimeSpan.FromSeconds(30);

}
```

### OpaPolicyConfiguration

```csharp
namespace Synentra.Infrastructure.Configuration.Policy;



public class OpaPolicyConfiguration

{

    public string BaseUrl { get; set; } = string.Empty;

    public string Path { get; set; } = "/v2/data/synentra/authz";

    public string? OpaBearerToken { get; set; } = string.Empty;

    public TimeSpan? Timeout { get; set; } = TimeSpan.FromSeconds(5);

}
```

### SecretDeclaration

```csharp
using Synentra.Domain.Security.ValueObjects;



namespace Synentra.Infrastructure.Configuration.Secrets;



public sealed class SecretDeclaration

{

    public SecretTier Tier { get; set; }

    public string Provider { get; set; } = "";

    public string Path { get; set; } = "";

    public string Version { get; set; } = "";

    public string? ConfigurationKey { get; set; }

    public string[] DependsOn { get; set; } = [];

    public override string ToString() => "SecretDeclaration([REDACTED])";

    public SecretProviderRef Reference => new(Provider, Path, Version);

}
```

### HashiCorpVaultConfiguration

```csharp
namespace Synentra.Infrastructure.Configuration.SecretManagement;



public class HashiCorpVaultConfiguration

{

    public string Endpoint { get; set; } = string.Empty;

    public string Mount { get; set; } = "secret";

    public string Token { get; set; } = "";

}
```

### AzureKeyVaultConfiguration

```csharp
namespace Synentra.Infrastructure.Configuration.Secrets;



public class AzureKeyVaultConfiguration

{

    public string Endpoint { get; set; } = string.Empty;

    public string Identity { get; set; } = "workload";

    public string? ClientId { get; set; }

    public string? TenantId { get; set; }

    public string? ClientSecret { get; set; }

}
```

### AwsSecretsConfiguration

```csharp
namespace Synentra.Infrastructure.Configuration.Secrets;



public class AwsSecretsConfiguration

{

    public string? Region { get; set; }

    public string Identity { get; set; } = "web-identity";

    public string? AccessKey { get; set; }

    public string? SecretKey { get; set; }

    public string? SessionToken { get; set; }

}
```
