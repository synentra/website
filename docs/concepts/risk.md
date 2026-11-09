---
id: "risk"
title: "Risk"
sidebar_label: "Risk"
sidebar_position: 7
slug: "risk"
description: "Understand how risk evidence informs the handling of a request."
---

Risk represents evidence about the potential concern associated with a requested action. Synentra can use that evidence as part of governance.

A risk assessment helps guide handling; it is not a guarantee that an action is safe or harmful.

## When does this matter?

Risk matters when configured governance uses it to distinguish requests that can proceed from those requiring additional review or denial.

Reviewers may also use available risk evidence to understand why a request deserves closer attention.

Consider the requested action, affected resources, and available evidence together. Do not judge a request solely by a number without understanding what produced it.

If a request is held because required evidence is missing, investigate the missing information or service rather than assuming the agent did something wrong.

## Scores and evidence coverage

Synentra's risk assessment distinguishes the score from evidence coverage. Coverage describes how much of the configured risk evidence was available.

A score based on incomplete evidence should not be treated as equally well-supported as one based on all expected evidence. If no risk factors provide usable evidence, the baseline does not label the request low risk.

## Example

A request may have limited risk evidence because a supporting component is unavailable. Depending on the configured rules, human review may be more appropriate than automatic execution.

Risk behavior depends on the factors and policies enabled in your deployment. Do not assume every installation includes anomaly detection or every possible risk signal.

An agent with favorable trust can still request a prohibited action. Risk evidence complements restrictions, grants, and approvals; it does not replace them.

## Related concepts

- [Agent Trust](agent-trust)
- [Policies and Restrictions](policies-and-restrictions)
- [Human Approval](human-approval)
