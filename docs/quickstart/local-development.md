---
id: "local-development"
title: "Run Synentra Locally"
sidebar_position: 1
slug: "/quickstart/local-development"
description: "Run Synentra Locally — Synentra v2 documentation."
---

This walkthrough starts the current v2 source and a small local HTTP target. It requires an existing identity provider; it does not disable authentication.

## 1. Build the service

From a terminal:

```bash
git clone https://github.com/synentra/synentra.git
cd synentra
dotnet restore Synentra.slnx
dotnet build Synentra.slnx --configuration Release
```

## 2. Configure identity and storage

Review `src/Synentra/appsettings.Development.json`. The development settings use SQLite, a local OIDC authority, and HTTP port 7080.

Set the authority, issuer, and audience to match your provider. The default identity claims are `sub`, `security_scope`, and `roles`. Obtain an administrator token and an agent token. Configure your agent identifier as `demo-agent` or change the supplied bundle policy to the actual identifier.

See [Identity](../configuration/identity) for the exact keys. Development permits private outbound addresses and does not require an encrypted key ring. Keep this example local.

## 3. Start the example target

Extract this documentation package. In a separate terminal run:

```bash
python examples/mock-target.py
```

The example serves a fixed inventory response on `http://127.0.0.1:8200/item`.

## 4. Start Synentra

From the Synentra repository root:

```powershell
$env:ASPNETCORE_ENVIRONMENT = "Development"
dotnet run --project src/Synentra --configuration Release --no-launch-profile
```

For Bash, prefix the command with `ASPNETCORE_ENVIRONMENT=Development`.

## 5. Check startup

Open `http://localhost:7080/open-api`. Inspect `/health`; active-manifest readiness can remain unhealthy until a bundle is activated. Required startup-secret failures can block requests with 503.

Proceed to [register the example bundle](first-invocation). The example has been checked against the source contracts; live end-to-end execution requires your identity provider, tokens, and running service.
