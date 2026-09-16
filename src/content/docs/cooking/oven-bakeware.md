---
title: Oven Bakeware
description: Iron Baking Sheet and Iron Baking Dish usage, oven rack cookware requirements, and Recipe Book loading.
---

A & A Cooking's oven can distinguish between food cooked directly on a rack and food cooked in dedicated bakeware. The current iron-tier bakeware consists of the **Iron Baking Sheet** and **Iron Baking Dish**.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Both iron bakeware items, per-rack cookware slots, recipe cookware requirements, and pinned-recipe cookware loading are part of the current development line.</p>
</div>

## Current bakeware

| Bakeware | Technical ID | Primary use |
|---|---|---|
| Iron Baking Sheet | `aandacooking:iron_baking_sheet` | Flat oven recipes that require a baking sheet |
| Iron Baking Dish | `aandacooking:iron_baking_dish` | Oven recipes that require a baking dish |

These are oven cookware items rather than general ingredient containers. They are inserted into an oven rack's cookware position while the food for that rack occupies its food position.

## Rack layout

The [Stovetop/Oven](/stations/stovetop-oven/) has **three independent oven racks**. Each rack contains:

- one cookware position
- one food position

This allows two recipes using the same food ingredient to require different oven setups.

## Cookware requirements

Oven recipes can currently use four cookware requirement types:

| Requirement | Required rack setup |
|---|---|
| `ANY` | Any supported rack arrangement accepted by the recipe |
| `BARE_RACK` | Food is cooked directly on the rack |
| `BAKING_SHEET` | Iron Baking Sheet in the rack's cookware position |
| `BAKING_DISH` | Iron Baking Dish in the rack's cookware position |

The cookware requirement is part of recipe matching. A recipe that explicitly requires a Baking Dish is therefore not interchangeable with the same ingredients sitting on a bare rack or Baking Sheet.

## Recipe Book loading

When an oven recipe is explicitly pinned, the station-loading system can source the exact missing ingredients from the connected kitchen network. If the recipe requires an Iron Baking Sheet or Iron Baking Dish, the loader can also pull the required bakeware and insert it into the appropriate oven cookware slot.

This follows the same rule used by the rest of the station autofill system: the station uses the player's explicitly selected recipe rather than guessing from nearby ingredients.

## Multiple racks

Each oven rack tracks its own food and cookware positions. This allows the oven to hold multiple rack setups at once instead of treating all three racks as one shared cooking slot.

A rack's recipe requirements are evaluated against the food and cookware assigned to that rack.

## Related pages

- [Stovetop/Oven](/stations/stovetop-oven/)
- [Cookware Overview](/cooking/cookware/)
- [Recipe Book](/recipe-book/overview/)
- [Kitchen Storage](/storage/overview/)
