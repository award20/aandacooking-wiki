---
title: Skillet
description: Fast-response dry-heat cooking and direct-contact recipes in the Iron Skillet.
---

The **Iron Skillet** is A & A Cooking's fast-response, direct-contact stovetop cookware. It is intended for foods that cook primarily through dry heat rather than through a large liquid volume.

<div class="page-summary">
    <p><strong>Status: Implemented core system</strong></p>
    <p>The Skillet currently supports four ingredient slots, fast thermal response, visible ingredients, shared heated-recipe execution, ingredient cooking-state progression, content drops when broken, and [Recipe Book](/recipe-book/overview/) integration.</p>
</div>

## Capacity

The current Skillet has **4 ingredient slots**.

Its role is deliberately different from the [Saucepan](/cooking/saucepan/) and [Stockpot](/cooking/stockpot/): it focuses on direct heat and comparatively fast temperature response instead of water volume or reduction.

## Fast thermal response

The Skillet responds quickly to burner changes from the [Stovetop/Oven](/stations/stovetop-oven/).

This makes temperature control more immediate than in heavier or liquid-filled cookware, but recipes still use the shared thermal simulation. The Skillet does not simply become the selected burner temperature in one step.

## Recipe execution

Skillet recipes use the shared heat-based station framework and can define:

- exact ingredient requirements
- exact preparation-state requirements
- valid temperature range
- cooking time
- target doneness

The recipe locks only once the technique conditions are valid. If conditions later move outside the allowed range, progress pauses instead of silently switching to another possible recipe.

## Ingredient cooking state

Ingredients in the Skillet advance through the existing cooking-state system while heated. This lets the cookware distinguish actual cooking progress instead of treating insertion and output as an instantaneous crafting operation.

Finished recipes can propagate their finished-dish quality into the resulting food.

## Visible ingredients

Inserted ingredients are rendered in the Skillet so the cookware visibly reflects what is being cooked.

If the Skillet is broken while it still contains ingredients, its contents are dropped rather than being silently deleted.

## Connected kitchen storage

The Skillet can discover connected storage through the Stovetop and adjacent kitchen furniture.

For pinned recipes, the shared recipe-storage system can:

- preserve ingredients already inserted
- calculate only missing exact requirements
- distinguish prepared states
- source from the connected kitchen atomically

Autofill is tied to the explicitly pinned or selected recipe rather than allowing the Skillet to guess what the player intended to cook.

## Recipe catalog

The shared Skillet framework is already in place and the content catalog is being expanded independently of that infrastructure. Exact temperatures, cook times, and doneness targets belong on the individual recipe pages as those entries are documented.

## Related pages

- [Cookware Overview](/cooking/cookware/)
- [Stovetop/Oven](/stations/stovetop-oven/)
- [Wok](/cooking/wok/)
- [Recipe Book](/recipe-book/overview/)
