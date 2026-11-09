---
id: "development"
title: "Development Workflow"
sidebar_position: 1
slug: "development"
description: "Development Workflow — Synentra v2 documentation."
---

Synentra uses GitHub Flow. Fork the repository, branch from main, and submit changes through a pull request.

## Build and test

```bash
git clone https://github.com/YOUR_ACCOUNT/synentra.git
cd synentra
git switch -c docs/improve-api-reference
dotnet restore Synentra.slnx
dotnet build Synentra.slnx --configuration Release
dotnet test Synentra.slnx --configuration Release
```

Use the .NET 10 SDK. Run relevant tests while developing and the required suite before submission. For this documentation site, also run `npm ci` and `npm run build`.

## Contribution requirements

The repository requires Developer Certificate of Origin compliance. Sign off your commits with `git commit -s` using your actual identity. Confirm that you have the right to contribute the work and include attribution where needed.

Follow existing project boundaries and add tests for changed behavior. Update documentation for contract, configuration, or operational changes.

## Pull request content

Explain the user-visible problem and resulting behavior. Include validation performed, related issues, and any breaking changes. Add examples or sanitized logs when they help review.

Discuss larger architecture changes before implementation. Do not include generated build folders, node_modules, access tokens, local databases, or encryption keys in your contribution.

The repository's [CONTRIBUTING.md](https://github.com/synentra/synentra/blob/main/CONTRIBUTING.md) remains the authoritative contribution policy.
