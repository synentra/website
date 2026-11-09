---
id: "data-contracts"
title: "Request and Response Data Contracts"
sidebar_position: 11
slug: "data-contracts"
description: "Request and Response Data Contracts — Synentra v2 documentation."
---

These source-derived declarations complement the endpoint guides. Public HTTP JSON uses camel-case names. Domain enums can serialize as names; invocation lifecycle DTOs explicitly use lower snake-case status strings. C# nullable fields are marked with `?`. Requiredness also depends on validators, so consult the endpoint notes and deployed OpenAPI document.

## ApprovalDto

```csharp
public sealed record ApprovalDto(string Id, string Status);
```

## DecisionDto

```csharp
public sealed record DecisionDto(string Outcome, IReadOnlyList<string> ReasonCodes, string PolicyRevision);
```

## ExecutionDto

```csharp
public sealed record ExecutionDto(

    string Status,

    string? UpstreamReference = null,

    int? ResponseStatusCode = null,

    string? ResponsePayload = null,

    string? ErrorMessage = null,

    DateTimeOffset? DispatchedAt = null,

    DateTimeOffset? RespondedAt = null);
```

## InvocationContext

```csharp
public sealed record InvocationContext

{

    public string? WorkflowId { get; init; } // untrusted evidence

    public string? DeclaredPurpose { get; init; } // untrusted evidence

}
```

## InvocationRequest

```csharp
using System.Text.Json;



public sealed record InvocationRequest

{

    public string SchemaVersion { get; init; } = "synentra.invocation.v2";

    public required string OperationId { get; init; }

    public string? BindingId { get; init; }

    public string? TaskGrantId { get; init; }

    public required JsonElement Arguments { get; init; }

    public InvocationContext? Context { get; init; }

}
```

## InvocationResultDto

```csharp
public sealed record InvocationResultDto

{

    public string SchemaVersion { get; init; } = "synentra.invocation-result.v2";

    public required string InvocationId { get; init; }

    public required DecisionDto Decision { get; init; }

    public ApprovalDto? Approval { get; init; }

    public required ExecutionDto Execution { get; init; }

    public required OutcomeDto Outcome { get; init; }

}
```

## OutcomeDto

```csharp
public sealed record OutcomeDto(string Status);
```

## GrantLimitDto

```csharp
public sealed record GrantLimitDto(

    string Measure, 

    string Unit, 

    int Scale, 

    long? PerInvocation, 

    long? Aggregate);
```

## GrantLimitStateDto

```csharp
public sealed record GrantLimitStateDto(

    string Measure, 

    string Unit, 

    long AuthorizedAggregate, 

    long Settled, 

    long ActiveReserved, 

    long Available);
```

## ResourceScopeDto

```csharp
public sealed record ResourceScopeDto(

    string Role, 

    string Type, 

    IReadOnlyList<string> Ids);
```

## TaskGrantRequest

```csharp
public sealed record TaskGrantRequest(

    string AgentId, 

    IReadOnlyList<string> OperationIds, 

    IReadOnlyList<ResourceScopeDto> ResourceScopes, 

    IReadOnlyList<GrantLimitDto> Limits, 

    DateTimeOffset ExpiresAt, 

    string? ExternalReference);
```

## TaskGrantResponse

```csharp
public sealed record TaskGrantResponse(

    string Id, 

    string State, 

    DateTimeOffset ExpiresAt, 

    IReadOnlyList<GrantLimitStateDto> LimitStates);
```

## ActivationResult

```csharp
public sealed record ActivationResult(

    bool Activated, 

    string? PreviousRevision, 

    string NewRevision, 

    IReadOnlyList<ValidationIssue> Issues);
```

## ValidationIssue

```csharp
public sealed record ValidationIssue(

    string Severity, 

    string Code, 

    string Message, 

    string? Path = null);
```

## ValidationResult

```csharp
public sealed record ValidationResult(bool IsValid, IReadOnlyList<ValidationIssue> Issues)

{

    public static ValidationResult Ok() => new(true, Array.Empty<ValidationIssue>());

}
```

## GetCapabilitiesResponse

```csharp
public sealed record GetCapabilitiesResponse(IReadOnlyList<GetCapabilityDto> Adapters);



public sealed record GetCapabilityDto(

    string AdapterId,

    string Version,

    IReadOnlyList<string> SupportedExecutionModels,

    IReadOnlyList<string> SupportedSchemaVersions,

    IReadOnlyList<string> EnforcementCapabilities,

    IReadOnlyList<string> SupportedModalities);
```

## OperationDto

```csharp
public sealed record OperationDto(

    string Id, 

    string Version, 

    string Family, 

    string Action, 

    string Mutability,

    string ExecutionModel, 

    bool TaskGrantRequired, 

    IReadOnlyList<string> PolicyRefs, 

    IReadOnlyList<string> BindingIds);
```

## AuditEntry

```csharp
public sealed record AuditEntry(

    string Id, 

    string Category, 

    string ActorId, 

    string SecurityScope, 

    string? OperationId, 

    string? BindingId, 

    string? TargetId, 

    string? InvocationId, 

    string? InputDigest, 

    string? PolicyRevision, 

    string? ApprovalId, 

    IReadOnlyDictionary<string, string> Details, 

    DateTimeOffset Timestamp);
```

## AuditQuery

```csharp
public sealed record AuditQuery(

    string? SecurityScope, 

    string? ActorId, 

    string? InvocationId, 

    string? Category, 

    DateTimeOffset? From, 

    DateTimeOffset? To);
```
