---
title: Stovetop/Oven
description: Stovetop and oven temperature controls, racks, cookware requirements, thermal behavior, and Recipe Book loading.
---

The **Stovetop/Oven** is the central heated kitchen station in A & A Cooking. Its stovetop and oven are controlled independently, allowing cookware on the top surface and recipes inside the oven to use separate temperature targets.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Independent heat controls, temperature presets, oven preheating, rack cookware requirements, thermal cooking behavior, recipe locking, and [Recipe Book](/recipe-book/overview/) loading are currently implemented.</p>
</div>

## Independent heat controls

The stovetop and oven each have their own enabled state and target temperature. Changing one does not automatically change the other.

The fine controls support both small and large adjustments:

- **±1 °C** for precise changes
- **±10 °C** for faster adjustment

Internally, the temperature system keeps Celsius values at hundredth degree precision even though the player facing controls use normal whole degree adjustments.

## Temperature ranges

The current controllable ranges are:

| Heat source | Minimum | Maximum |
|---|---:|---:|
| Stovetop | 40 °C | 300 °C |
| Oven | 50 °C | 300 °C |

Recipes can define their own acceptable cooking range inside those station limits.

## Presets

The Stovetop/Oven also exposes shared cooking presets for quick setup:

| Preset | Temperature |
|---|---:|
| Low | 95 °C |
| Low Med | 120 °C |
| Med | 150 °C |
| Med High | 180 °C |
| High | 230 °C |

Presets provide convenient targets, but a recipe can still call for a different temperature inside the supported range.

## Stovetop thermal behavior

Cookware placed on the stovetop does not simply become its target temperature instantly. Heated cookware follows the stovetop target through the cooking thermal system, allowing its contents to heat and cool over time.

That thermal state is then used by heated recipes to determine whether the current cookware is within the recipe's valid temperature range.

Detailed cookware specific capacities, heat response, liquid rules, and serving behavior will be documented on the dedicated cookware pages.

## Oven preheating

The oven tracks its current temperature separately from its target temperature. Enabling the oven and selecting a target begins the preheat process rather than immediately treating the oven as fully heated.

Oven recipes can use this temperature state as part of their cooking requirements.

## Oven racks

The oven contains **three racks**. Each rack provides a cookware position and a food position so recipes can distinguish between food placed directly on the rack and food cooked in supported bakeware.

Current cookware requirement types include:

| Requirement | Meaning |
|---|---|
| `ANY` | The recipe does not require a specific oven cookware type |
| `BARE_RACK` | Food must cook directly on the rack |
| `BAKING_SHEET` | A baking sheet is required |
| `BAKING_DISH` | A baking dish is required |

The **[Iron Baking Sheet](/cooking/oven-bakeware/)** and **[Iron Baking Dish](/cooking/oven-bakeware/)** are implemented cookware options for these requirements.

## Cooking progress and recipe locking

Once a valid heated recipe is underway, the cooking system tracks its recipe state and doneness rather than continuously swapping to a different result because another recipe happens to become temporarily matchable.

This recipe locking behavior keeps a cooking process associated with the recipe that actually began it while its requirements remain valid.

## Freshness and spoilage

Heated recipes reject spoiled ingredients when those ingredients are no longer valid food inputs. Completed food inherits freshness through the current recipe output freshness rules so cooking does not automatically reset every ingredient to an unrelated fresh state.

## Kitchen storage network

The Stovetop/Oven can act as a transparent bridge in the connected kitchen storage network. A layout such as:

`Counter → Stovetop/Oven → Cabinet → Sink → Counter`

can remain one connected ingredient search network instead of being broken into separate groups by the functional stations between the storage blocks.

## Recipe Book loading

A selected pinned recipe can use connected kitchen storage to load required ingredients into supported stations.

For oven recipes, the loading system can also pull and insert required bakeware, such as a baking sheet or baking dish, when the selected recipe calls for it.

The selected recipe quantity represents the number of recipe executions to prepare, not simply the raw number of output items.

## Related pages

- [Cooking Overview](/cooking/overview/)
- [Recipe Book](/recipe-book/overview/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
