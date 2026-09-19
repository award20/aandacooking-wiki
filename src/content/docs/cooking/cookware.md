---
title: Cookware Overview
description: Tiered stovetop cookware and oven bakeware used by A & A Cooking recipes.
---

A & A Cooking separates the **heat source** from the **cookware** that holds or supports a recipe. The [Stovetop/Oven](/stations/stovetop-oven/) provides controllable heat, while cookware defines ingredient capacity, liquids, interactions, and thermal response.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Stockpots, Saucepans, Skillets, and Woks are available in Iron, Stainless Steel, Diamond Coated, and Netherite tiers. Iron Baking Sheets and Iron Baking Dishes support oven recipes.</p>
</div>

## Stovetop cookware

| Cookware | Capacity | General role |
|---|---:|---|
| [Stockpot](/cooking/stockpot/) | 8 ingredients, 4000 mB liquid | Soups, stews, freeform dishes, potion infusion, serving |
| [Saucepan](/cooking/saucepan/) | 4 ingredients, 1500 mB water | Smaller liquid recipes, sauces, reductions, boiling |
| [Skillet](/cooking/skillet/) | 4 ingredients | Direct contact pan cooking |
| [Wok](/cooking/wok/) | 6 ingredients | High heat cooking with toss requirements and heat zones |

All four cookware families are implemented in:

1. Iron
2. Stainless Steel
3. Diamond Coated
4. Netherite

See [Cookware Tiers](/cooking/cookware-tiers/) for the exact heating and cooling multipliers and the upgrade path.

## Temperature behavior

Cookware follows the target temperature from the [Stovetop/Oven](/stations/stovetop-oven/) through thermal simulation instead of snapping instantly to the selected temperature. Higher cookware tiers heat faster and cool more slowly.

Recipes can require the cookware to remain inside a defined temperature range before valid cooking progress is made.

## Ingredients and recipe state

Heated cookware recipes can distinguish:

- exact ingredient items and quantities
- washing and cut state
- temperature range
- liquid requirements
- recipe duration
- toss requirements for Wok recipes
- oven cookware requirements for baked recipes

Spoiled ingredients are rejected when they are no longer valid inputs. Finished foods inherit freshness through the shared food pipeline. See [Freshness & Spoilage](/storage/freshness-spoilage/).

## Oven bakeware

The oven supports [Iron Baking Sheets and Iron Baking Dishes](/cooking/oven-bakeware/) as well as bare rack recipes. Each of the three oven racks has its own cookware and food position.

## Recipe reference

The [Complete Recipe Index](/recipes/complete-index/) lists all 233 Recipe Book entries with ingredients, station, time, and method or heat requirement.

## Related pages

- [Cookware Tiers](/cooking/cookware-tiers/)
- [Stovetop/Oven](/stations/stovetop-oven/)
- [Oven Bakeware](/cooking/oven-bakeware/)
- [Cooking Overview](/cooking/overview/)
- [Complete Recipe Index](/recipes/complete-index/)
