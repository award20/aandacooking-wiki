---
title: Kitchen Sink
description: Washing ingredients and handling water with the Oak Kitchen Sink.
---

The **Oak Kitchen Sink** is the first preparation station used by many A & A Cooking ingredients. Its main role is to apply the washed ingredient state before food is cut or used by recipes that require washed produce.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>The washing interaction and bucket exchange described here are present in the documented source.</p>
</div>

## Washing ingredients

Hold a washable A & A Cooking ingredient and use it on the sink. If the ingredient has a washable profile and is not already washed, the sink updates the held stack so its ingredient state records `washed = true`.

Washing does **not** consume the ingredient and does not change its cut style.

Items without a supported washable ingredient profile pass through to the normal block interaction rather than being converted automatically.

## Why washing matters

Recipes can require an exact ingredient state. That means a recipe may distinguish between:

- an unwashed ingredient
- a washed whole ingredient
- a washed sliced, diced, minced, julienned, or shredded ingredient

The Cutting Board also checks the ingredient state before allowing normal preparation, so washing is commonly the first preparation step.

## Water buckets

The sink also supports bucket exchange:

| Held item | Result |
|---|---|
| Bucket | Water Bucket |
| Water Bucket | Bucket |

This interaction is separate from ingredient washing.

## Recipe Book integration

Pinned recipe preparation plans can identify the sink as a required preparation station when a recipe needs a washed ingredient. The pinned recipe HUD can therefore show washing as part of the preparation chain before later steps such as cutting.

Automatic ingredient pulling and recipe loading are documented with the [Recipe Book](/recipe-book/overview/) and the individual processing stations.

## Related pages

- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Cutting Board](/stations/cutting-board/)
- [Cooking Overview](/cooking/overview/)
