---
id: "publishing-docs"
title: "Build and Publish the Documentation"
sidebar_position: 4
slug: "/quickstart/publishing-docs"
description: "Build and Publish the Documentation — Synentra v2 documentation."
---

This package is a complete Docusaurus site with eight ordered documentation categories.

## Build locally

From the extracted site directory:

```bash
npm ci
npm run build
npm run serve
```

If maintaining the package before a lockfile has been generated, run `npm install` once and retain the resulting lockfile. The distributed package includes its tested lockfile when dependency installation succeeds.

The production output is `build/`. Preview it locally before uploading it to static hosting. Docusaurus documents the build workflow in its [official installation guide](https://current.docusaurus.io/docs/installation).

## Hosting settings

Set `SITE_URL` to the public origin and `BASE_URL` to the deployment prefix before building. The defaults target `https://synentra.io/`. For a GitHub project site, use the repository path, for example `/synentra/`, including both slashes.

The docs are served from the site root beneath that prefix. The introduction has route `/`.

Deploy only the contents of `build/` to the configured static host. This package does not publish automatically or change your existing website.

## Merge into an existing site

Copy the category folders in `docs/`, the required static assets, and the examples you want to maintain. Merge the sidebar rather than overwriting unrelated navigation. Enable the Mermaid theme if using these diagrams.

Check route collisions with previous documentation. Preserve redirects for retired URLs where needed. This package places the earlier user concepts inside Getting Started, avoiding a ninth top-level category.

## Release checks

Run the production build with broken-link checks enabled. Recheck examples against the deployed Synentra version and identify any deployment-specific settings. Do not commit real access tokens or secret values in samples.
