---
title: Recipe Book
description: Recipe discovery, planning, pinning, and recipe notes in A & A Cooking.
---

The Recipe Book is a placed block that stores discovered recipes, progression, and its current appearance. It is the central reference for recipe requirements and preparation steps.

## Placing and opening

Place the Recipe Book on top of either a full solid support or a kitchen-connecting block. Use the placed book to open its recipe interface.

The book stores its progress with the block. In Survival mode, breaking a placed book drops a book item carrying that progress. The current source does not define a separate installation or crafting guide for the book yet.

## Discovering recipes

Discovery adds a recipe ID to the placed book. A valid Recipe Note can be used on the book to discover its recipe, and the note is consumed after a successful discovery. A recipe that is already known is not discovered again.

The current source also defines discovery and loot integrations. Their exact locations and conditions will be documented when they are verified in a playtest build.

## Browsing recipes

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

The current system uses a generic **Recipe Note** item that stores a recipe ID.

To copy a discovered recipe to a note, keep Paper in the inventory and use the copy action while within 8 blocks of the placed Recipe Book. The generated note can be given to another player. Using a valid note on a Recipe Book transfers the recipe to that book's discovery progress.

The source still contains older fixed recipe-note items for compatibility with existing saves. New documentation uses the generic Recipe Note system.

## Book tiers

Book tier is based on the proportion of discoverable recipes in the current source. The exact recipe count can change as recipes are added.

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
- [Documentation Status](/reference/documentation-status/) explains how source-confirmed and unverified information is labeled.
