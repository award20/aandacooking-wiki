---
title: Recipe Book
description: Recipe discovery, planning, pinning, and recipe notes in A & A Cooking.
---

The Recipe Book is a placed block that stores discovered recipes, progression, and its current appearance. It is the central reference for recipe requirements and preparation steps.

## Placing and opening

Place the Recipe Book on top of either a full solid support or a kitchen-connecting block. Use the placed book to open its recipe interface.

The book stores its progress with the block. In Survival mode, breaking a placed book drops a book item carrying that progress. Crafting and acquisition details will be documented separately.

## Discovering recipes

Discovery adds a recipe ID to the placed book. A valid Recipe Note can be used on the book to discover its recipe, and the note is consumed after a successful discovery. A recipe that is already known is not discovered again.

Recipe discovery and loot integrations are part of the Recipe Book system. Exact locations and conditions will be documented on the discovery pages as those systems are expanded.

## Browsing recipes

The Recipe Book contains a large and growing catalog of discoverable recipes. New recipe families can be added without changing the underlying discovery and prerequisite systems.

The Recipe Book interface provides:

- Category filtering
- Search
- Recipe index pages
- Recipe details
- Ingredient preparation and cooking information
- Prerequisite and dependency links
- Recipe pinning
- Quantity controls

The details view is the reference for a specific recipe. It can show the station, ingredients, preparation steps, cooking information, and instructions stored in the recipe-book entry.

## Pinning and quantity

Select a recipe and use **Pin Recipe** to keep it available for the pinned-recipe HUD and compatible station features. A pinned recipe can also be selected for station autofill where the station and its current contents support it.

Recipe quantity means the number of recipe executions, not the number of output items. The interface accepts quantities from 1 through 64. The quantity button cycles through 1, 5, 10, 20, 32, and 64; the increment and decrement controls can adjust the value between those limits.

The output quantity depends on the recipe. For example, a recipe that produces four servings per execution produces 40 servings at a quantity of 10.

## Recipe Notes

The current system uses a generic **Recipe Note** item that stores a recipe ID. See [Recipe Notes & Discovery](/recipe-book/notes-discovery/) for the dedicated discovery and sharing guide.

To copy a discovered recipe to a note, keep Paper in the inventory and use the copy action while within 8 blocks of the placed Recipe Book. The generated note can be given to another player. Using a valid note on a Recipe Book transfers the recipe to that book's discovery progress.

Older fixed Recipe Note items remain for compatibility with existing saves. New recipes use the generic Recipe Note system.

## Book tiers

Book tier is based on the proportion of discoverable recipes learned by the player. The total catalog can grow as new recipes are added.

| Tier | Required completion |
|---|---:|
| Iron | 0% |
| Stainless Steel | 25% |
| Diamond Coated | 50% |
| Netherite | 75% |
| Culinary Compendium | 100% |

Tier progression changes the book's available appearance. It does not replace the individual recipe discovery records.

## Related pages

- [First Steps](/getting-started/first-steps/) gives the basic preparation and cooking workflow.
- [Cooking Overview](/cooking/overview/) explains matching, station behavior, and temperature presets.
- [Recipe Catalog](/recipes/overview/) explains how the growing recipe library is organized.
- [Recipe Notes & Discovery](/recipe-book/notes-discovery/) covers copying, sharing, and discovering recipes.
- [Documentation Coverage](/reference/documentation-status/) explains what is currently documented and how unfinished details are labeled.
