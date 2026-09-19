---
title: Recipe Book
description: The 233 recipe discovery catalog, tiers, appearances, pinning, bulk quantity, notes, and station loading.
---

The **Recipe Book** is a placed block that stores discovered recipes, progression tier, and appearance. It is the central planning interface for A & A Cooking.

## Current catalog

The private alpha playtest build contains **233 discoverable Recipe Book entries** across eight categories.

| Category | Recipes |
|---|---:|
| Meals | 82 |
| Soups & Stews | 16 |
| Sides | 30 |
| Baking | 23 |
| Desserts | 16 |
| Drinks | 18 |
| Sauces & Condiments | 38 |
| Other | 10 |

See the [Complete Recipe Index](/recipes/complete-index/) for every entry.

## Placing and persistence

Place the Recipe Book on a full solid support or compatible kitchen connecting block. Using the placed book opens the recipe interface.

The placed book stores its discovered recipes, tier, and appearance. In Survival, breaking it drops a Recipe Book item carrying that progress.

## Browsing

The interface provides:

- category filtering
- search
- recipe pages
- ingredient quantities and preparation states
- station and cooking information
- prerequisite links
- recipe pinning
- quantity controls
- appearance cycling
- a Recipe Book sound toggle

## Pinning and quantity

**Pin Recipe** selects the recipe used by the pinned HUD and compatible **Load Pinned** station features.

Quantity represents **recipe executions**, not raw output count. Values range from 1-64. The quantity button cycles through 1, 5, 10, 20, 32, and 64, while increment/decrement controls can adjust between those limits.

Stations with bulk queue support can repeatedly process valid executions as ingredients and output space permit.

## Prerequisites and station loading

The preparation planner can trace a final recipe backward through intermediate recipes, washing, cutting, processing stations, liquids, cookware, and connected storage.

Supported station loading preserves existing valid inputs and pulls only missing requirements for the explicitly pinned recipe. Oven loading can also source required [bakeware](/cooking/oven-bakeware/).

## Discovery

Recipes can be discovered through experimentation or by using a valid [Recipe Note](/recipe-book/notes-discovery/).

When a valid A & A Cooking recipe finishes at a cooking or processing station and the recipe is not already known, the nearest Recipe Book on the connected kitchen network learns it automatically. If no connected book is found, a Recipe Book within 8 blocks can receive the discovery instead.

The closest player within 8 blocks of the station receives an action bar message such as **Recipe Discovered: Fried Egg** when a new recipe is added. Recipes that are already known do not show the message again.

Experimental discovery works with the Skillet, Wok, Saucepan, Stockpot, Oven, Blender, Mixing Bowl, Mortar and Pestle, and Fermentation Crock. The crafted Cream recipe also uses the same discovery behavior.

Recipe Notes remain another discovery path. They are found in Villages, Shipwrecks, and Stronghold libraries and can also be copied from known recipes for sharing.

See [Recipe Notes & Discovery](/recipe-book/notes-discovery/) for exact structure chances and category pools.

## Tiers

Tier is based on discovered recipe count relative to the full 233 recipe catalog.

| Tier | Completion | Current recipe threshold |
|---|---:|---:|
| Iron | 0% | 0 |
| Stainless Steel | 25% | 59 |
| Diamond Coated | 50% | 117 |
| Netherite | 75% | 175 |
| Culinary Compendium | 100% | 233 |

Thresholds use ceiling rounding for percentage tiers.

## Appearances

Each tier unlocks its matching appearance:

- Iron
- Stainless Steel
- Diamond Coated
- Netherite
- Enchanted Culinary Compendium

The interface can cycle through appearances already unlocked by the current tier. When a new tier is earned, the book switches to that tier's default appearance unless a later player selection changes it.

## Recipe Book sound

The interface speaker control toggles Recipe Book sounds. The client setting is saved to `config/aandacooking-client.json` as `recipeBookSounds`.

## Administration commands

Permission level 2 commands can set the targeted book tier, discover one recipe, discover all 233 recipes, or reset the book. The player must look at the Recipe Book within 8 blocks.

See [Commands](/reference/commands/) for exact syntax.

## Related pages

- [Complete Recipe Index](/recipes/complete-index/)
- [Recipe Notes & Discovery](/recipe-book/notes-discovery/)
- [Cooking Overview](/cooking/overview/)
- [Kitchen Storage](/storage/overview/)
- [Commands](/reference/commands/)
