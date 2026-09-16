---
title: Cookware Overview
description: Heated cookware and oven bakeware used by A & A Cooking recipes.
---

A & A Cooking separates the **heat source** from the **cookware** that holds or supports a recipe. The Stovetop/Oven provides controllable heat, while cookware defines where ingredients are held, how much can be loaded, and which cooking interactions are available.

<div class="page-summary">
    <p><strong>Status: Implemented core system</strong></p>
    <p>The current cooking line includes stovetop cookware and oven bakeware. Exact recipe lists, vessel capacities, and material-tier differences will be documented on their dedicated pages.</p>
</div>

## Stovetop cookware

The current heated cookware family includes:

| Cookware | General role |
|---|---|
| [Saucepan](/cooking/saucepan/) | Smaller-volume heated recipes, liquids, evaporation, and reductions |
| [Stockpot](/cooking/stockpot/) | Larger-volume soups, stews, freeform cooking, potions, and serving |
| [Skillet](/cooking/skillet/) | Fast-response direct-contact pan cooking |
| [Wok](/cooking/wok/) | High-heat cooking with heat zones and an ingredient-toss interaction |

These vessels use the shared heated-cooking infrastructure while retaining station-specific capacity and interaction rules.

## Temperature behavior

Stovetop cookware responds to the target temperature provided by the [Stovetop/Oven](/stations/stovetop-oven/). The cookware temperature changes through the thermal simulation rather than instantly snapping to the selected value.

Recipes can require their cookware to be within a defined temperature range before valid cooking progress is made.

## Ingredients and recipe state

Heated cookware recipes can distinguish exact ingredients, quantities, preparation states, heat ranges, and recipe-specific interaction requirements.

The cooking system tracks the active recipe and doneness once cooking begins so the result is associated with the recipe that actually started instead of constantly changing because another possible match briefly appears.

Spoiled ingredients are rejected when they are no longer valid food inputs, and completed foods use the current recipe-output freshness rules to carry freshness through multi-step cooking chains.

## Stockpot serving

The Stockpot supports serving completed dishes with compatible serving containers. Serving is separate from the recipe-matching step: the recipe is cooked in the pot, then portions can be transferred into the supported container flow.

Exact serving containers and portion behavior will be listed on the dedicated Stockpot page.

## Wok tossing

The Wok adds an active tossing interaction to its cooking flow. Recipes that depend on wok handling can therefore require more than simply placing ingredients over heat and waiting.

Exact toss requirements belong on the individual recipe or Wok reference page.

## Oven bakeware

The oven side of the Stovetop/Oven supports cookware requirements separate from stovetop vessels. Current bakeware includes:

- **Iron Baking Sheet**
- **Iron Baking Dish**

An oven recipe can require a baking sheet, baking dish, a bare rack, or accept any supported rack arrangement. See [Stovetop/Oven](/stations/stovetop-oven/) for the current rack and cookware requirement types.

## Recipe Book integration

Cookware requirements are part of the Recipe Book loading workflow. When a selected oven recipe requires supported bakeware, the station autofill system can pull and insert that cookware along with the recipe ingredients from the connected kitchen network.

The same recipe-planning system can use cookware requirements when presenting the steps needed to prepare a selected dish.

## Dedicated cookware guides

The cookware-wide behavior stays on this page, while the individual guides now cover the implemented vessel-specific systems:

- [Stockpot](/cooking/stockpot/) for canonical and freeform cooking, liquids, potions, quality, serving, and visual behavior
- [Saucepan](/cooking/saucepan/) for its three solid slots, 1500 mB water capacity, evaporation, and reduction
- [Skillet](/cooking/skillet/) for four-slot dry-heat cooking and fast thermal response
- [Wok](/cooking/wok/) for five-slot high-heat cooking, heat zones, toss counts, and toss streaks

Baking Sheet and Baking Dish usage and material/equipment-tier differences will receive their own reference coverage as those parts of the content catalog settle.

## Related pages

- [Cooking Overview](/cooking/overview/)
- [Stovetop/Oven](/stations/stovetop-oven/)
- [Recipe Book](/recipe-book/overview/)
