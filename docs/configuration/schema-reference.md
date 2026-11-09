---
id: "schema-reference"
title: "GovernanceBundle Schema Reference"
sidebar_position: 10
slug: "schema-reference"
description: "GovernanceBundle Schema Reference — Synentra v2 documentation."
---

This reference reproduces the current bundle model declarations. JSON/YAML property names use camel case; C# declarations below retain their source spelling. Nullable markers and initializers describe the model, while validation and runtime enforcement are documented separately.

Read [Governance bundles](governance-bundles) and [Policies](policies) before treating a declared property as an enforced capability.

## BindingModel

```csharp
public sealed class BindingModel

{

    public string Id { get; set; } = "";

    public string Version { get; set; } = "1";

    public string OperationId { get; set; } = "";

    public string TargetRef { get; set; } = "";

    public Dictionary<string, object> Configuration { get; set; } = new();

    public Dictionary<string, MappingEntryModel>? CanonicalToTarget { get; set; }

    public Dictionary<string, MappingEntryModel>? TargetToCanonical { get; set; }

}
```

## BundleMetadata

```csharp
public sealed class BundleMetadata

{

    public string Name { get; set; } = "";

    public string Version { get; set; } = "";

}
```

## BundleSpec

```csharp
public sealed class BundleSpec

{

    public List<ProfileModel> Profiles { get; set; } = new();

    public List<TargetModel> Targets { get; set; } = new();

    public List<OperationModel> Operations { get; set; } = new();

    public List<BindingModel> Bindings { get; set; } = new();

    public List<RestrictionModel> Restrictions { get; set; } = new();

    public List<PolicyModel> Policies { get; set; } = new();

}
```

## EffectResolverModel

```csharp
public sealed class EffectResolverModel

{

    public string ResolverRef { get; set; } = "";

    public string Version { get; set; } = "1";

    public Dictionary<string, object> Configuration { get; set; } = new();

}
```

## ExecutionModelModel

```csharp
public sealed class ExecutionModelModel

{

    public string Model { get; set; } = "request_response";

}
```

## GovernanceBundleModel

```csharp
public sealed class GovernanceBundleModel

{

    public string ApiVersion { get; set; } = "";

    public string Kind { get; set; } = "";

    public BundleMetadata Metadata { get; set; } = new();

    public BundleSpec Spec { get; set; } = new();

}
```

## IntentProfileModel

```csharp
public sealed class IntentProfileModel

{

    public string? ProviderRef { get; set; }

    public bool Required { get; set; }

    public double MinimumConfidence { get; set; } = 0.8;

    public string OnUnavailable { get; set; } = "review";

    public string OnLowConfidence { get; set; } = "review";

}
```

## MappingEntryModel

```csharp
using System.Text.Json;



public sealed class MappingEntryModel

{

    public string? InputPointer { get; set; }

    public string? TargetPointer { get; set; }

    public string? ResourceField { get; set; }

    public string? Role { get; set; }

    public JsonElement? Constant { get; set; }

}
```

## OperationModel

```csharp
using System.Text.Json;



public sealed class OperationModel

{

    public string Id { get; set; } = "";

    public string Version { get; set; } = "1";

    public string Family { get; set; } = "";

    public string Action { get; set; } = "";

    public string Mutability { get; set; } = "read_only";

    public ExecutionModelModel Execution { get; set; } = new();

    public string? ProfileRef { get; set; }

    public List<string> PolicyRefs { get; set; } = new();

    public bool TaskGrantRequired { get; set; }

    public JsonElement InputSchema { get; set; }

    public List<ResolverModel> Resources { get; set; } = new();

    public EffectResolverModel? Effect { get; set; }

    public VerificationModel? Verification { get; set; }

}
```

## PolicyMatchModel

```csharp
using System.Text.Json;



public sealed class PolicyMatchModel

{

    public List<string>? AgentIds { get; set; }

    public List<string>? OperationIds { get; set; }

    public List<string>? OperationFamilies { get; set; }

    public List<ResourceMatchModel>? ResourceMatches { get; set; }

    public Dictionary<string, JsonElement>? ArgumentEquals { get; set; }

    public Dictionary<string, long>? ArgumentIntegerGreaterThan { get; set; }

}
```

## PolicyModel

```csharp
public sealed class PolicyModel

{

    public string Id { get; set; } = "";

    public string? OperationFamily { get; set; }

    public List<PolicyRuleModel> Rules { get; set; } = new();

}
```

## PolicyProfileModel

```csharp
public sealed class PolicyProfileModel

{

    public string CombiningAlgorithm { get; set; } = "deny_overrides";

    public string DefaultOutcome { get; set; } = "deny";

}
```

## PolicyRuleModel

```csharp
public sealed class PolicyRuleModel

{

    public PolicyMatchModel Match { get; set; } = new();

    public string Effect { get; set; } = "deny";

}
```

## ProfileModel

```csharp
public sealed class ProfileModel

{

    public string Id { get; set; } = "";

    public IntentProfileModel? Intent { get; set; }

    public TrustProfileModel? Trust { get; set; }

    public RiskProfileModel? Risk { get; set; }

    public PolicyProfileModel? Policy { get; set; }

}
```

## ResolverModel

```csharp
public sealed class ResolverModel

{

    public string Role { get; set; } = "";

    public string ResolverRef { get; set; } = "";

    public string Version { get; set; } = "1";

    public Dictionary<string, object> Configuration { get; set; } = new();

}
```

## ResourceMatchModel

```csharp
public sealed class ResourceMatchModel

{

    public string Role { get; set; } = "";

    public string Type { get; set; } = "";

    public List<string>? Ids { get; set; }

    public string? Quantifier { get; set; }

}
```

## ResponseRetentionModel

```csharp
public sealed class ResponseRetentionModel

{

    public string Mode { get; set; } = "omit";

    public string[] AllowedProperties { get; set; } = [];



    public void Validate()

    {

        if (Mode is not ("omit" or "json-allowlist")

            || (Mode == "json-allowlist" && AllowedProperties.Length == 0)

            || AllowedProperties.Any(string.IsNullOrWhiteSpace))

            throw new InvalidOperationException("Invalid authenticated response retention policy.");

    }

}
```

## RestrictionMatchModel

```csharp
public sealed class RestrictionMatchModel

{

    public List<string>? AgentIds { get; set; }

    public List<string>? OperationFamilies { get; set; }

    public List<string>? OperationIds { get; set; }

}
```

## RestrictionModel

```csharp
public sealed class RestrictionModel

{

    public string Id { get; set; } = "";

    public RestrictionMatchModel Match { get; set; } = new();

    public string Effect { get; set; } = "deny";

}
```

## RiskProfileModel

```csharp
public sealed class RiskProfileModel

{

    public string? ProfileRef { get; set; }

    public string OnUnavailable { get; set; } = "review";

}
```

## TargetModel

```csharp
public sealed class TargetModel

{

    public string Id { get; set; } = "";

    public string AdapterRef { get; set; } = "";

    public Dictionary<string, object> Configuration { get; set; } = new();

    public ResponseRetentionModel? ResponseRetention { get; set; }

    public string? CredentialBindingRef { get; set; }

    public string? CapabilityProfileRef { get; set; }

}
```

## TrustProfileModel

```csharp
public sealed class TrustProfileModel

{

    public string? ProfileRef { get; set; }

    public string OnUnavailable { get; set; } = "deny";

}
```

## VerificationModel

```csharp
public sealed class VerificationModel

{

    public string VerifierRef { get; set; } = "";

    public string Version { get; set; } = "1";

    public Dictionary<string, object> Configuration { get; set; } = new();

}
```
