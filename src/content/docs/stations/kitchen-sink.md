---
title: Kitchen Sink
description: Washing ingredients, handling water, and choosing from the twelve Kitchen Sink material variants.
---

The **Kitchen Sink** is the first preparation station used by many A & A Cooking ingredients. Its main role is to apply the washed ingredient state before food is cut or used by recipes that require washed produce.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>All twelve Kitchen Sink variants share the same washing, bucket exchange, and kitchen network behavior.</p>
</div>

## Material variants

Kitchen Sinks are available in Oak, Spruce, Birch, Jungle, Acacia, Dark Oak, Mangrove, Cherry, Pale Oak, Bamboo, Crimson, and Warped materials.

Each variant uses matching slabs and planks around a Cauldron. See [Wood Kitchen Variants](/reference/wood-kitchen-variants/) for the complete ID and crafting reference.

## Washing ingredients

Hold a washable A & A Cooking ingredient and use it on the sink. If the ingredient has a washable profile and is not already washed, the sink updates the held stack so its ingredient state records `washed = true`.

Washing does **not** consume the ingredient and does not change its cut style.

Items without a supported washable ingredient profile pass through to the normal block interaction rather than being converted automatically.

## Why washing matters

Recipes can require an exact ingredient state. That means a recipe may distinguish between:

- an unwashed ingredient
- a washed whole ingredient
- a washed sliced, diced, minced, julienned, or shredded ingredient

The [Cutting Board](/stations/cutting-board/) also checks the ingredient state before allowing normal preparation, so washing is commonly the first preparation step.

## Water buckets

The sink also supports bucket exchange:

| Held item | Result |
|---|---|
| Bucket | Water Bucket |
| Water Bucket | Bucket |

This interaction is separate from ingredient washing.

## Kitchen network

Every material variant is a compatible kitchen network block. A Sink can bridge nearby Counters, Cabinets, and other supported kitchen blocks regardless of which wood appearance is used.

## Recipe Book integration

Pinned recipe preparation plans can identify the sink as a required preparation station when a recipe needs a washed ingredient. The pinned recipe HUD can therefore show washing as part of the preparation chain before later steps such as cutting.

Automatic ingredient pulling and recipe loading are documented with the [Recipe Book](/recipe-book/overview/) and the individual processing stations.

## Related pages

- [Wood Kitchen Variants](/reference/wood-kitchen-variants/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Cutting Board](/stations/cutting-board/)
- [Kitchen Storage](/storage/overview/)
- [Cooking Overview](/cooking/overview/)
