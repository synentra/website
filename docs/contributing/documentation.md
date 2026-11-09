---
id: "documentation"
title: "Documentation Contributions"
sidebar_position: 2
slug: "documentation"
description: "Documentation Contributions — Synentra v2 documentation."
---

Write for the person performing the task. Introduce concepts in plain language, then provide exact configuration and API details where needed.

## Structure

This site uses eight top-level categories. Each Markdown document has an ID, title, sidebar position, description, and route. Category metadata controls ordering and generated landing pages.

Keep relative links to other source pages so Docusaurus resolves them correctly under a deployment prefix. Use fenced blocks for JSON, YAML, HTTP, and shell examples.

## Accuracy

Trace endpoint behavior to the current handler and command implementation. A README, enum, configuration model, or plugin catalog entry is not proof that the full behavior works.

Mark illustrative values clearly. Distinguish tested steps from procedures requiring a user's external identity provider or target. Describe implementation limits where they affect the task.

Avoid the headings “What can I do?” and “What should I expect?” in the concept pages; use direct explanatory sections.

## Validation

Run the production Docusaurus build. Check internal links, examples, category order, and displayed tables/diagrams. Preserve public routes or add redirects when reorganizing pages.

When changing errors, document their actual response channel and status. Governance reason codes, middleware problems, validation issues, and MCP errors have different envelopes.

## Sources

The package includes source hashes and a validation report for this authoring snapshot. Refresh those records when regenerating documentation from a different checkout. Do not imply that a hash of selected source files is a release version.
