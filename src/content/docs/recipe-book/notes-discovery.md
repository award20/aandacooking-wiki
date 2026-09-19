---
title: Recipe Notes & Discovery
description: Recipe Note loot, category pools, copying, sharing, and Recipe Book discovery.
---

A & A Cooking uses a generic **Recipe Note** item (`aandacooking:recipe_note`) that stores one Recipe Book recipe ID.

## Discovering a recipe

Recipes can be discovered through successful experimentation at A & A Cooking stations or by using a Recipe Note. See the [Recipe Book](/recipe-book/overview/) guide for experimental discovery behavior.

To use a Recipe Note, use a valid note on a placed Recipe Book to discover the stored recipe. A successfully used note is consumed. A recipe already known by the book is not added a second time.

## Structure discovery

Recipe Notes appear in selected vanilla structure chests.

| Structure group | Chance | Eligible Recipe Book categories |
|---|---:|---|
| Villages | 45% | Meals, Sides, Baking, Desserts, Sauces & Condiments, Other |
| Shipwrecks | 55% | Soups & Stews, Drinks |
| Stronghold Library | 80% | All categories |

Village notes can appear in Armorer, Butcher, Cartographer, Desert House, Fisher, Fletcher, Mason, Plains House, Savanna House, Shepherd, Snowy House, Taiga House, Tannery, Temple, Toolsmith, and Weaponsmith chests.

Shipwreck notes can appear in Map, Supply, and Treasure chests.

The note recipe is selected from the current **233 Recipe Book entries** eligible for that structure group.

## Copying a known recipe

A player near the Recipe Book can copy a discovered recipe onto a generic Recipe Note.

- In Survival, copying costs **1 Paper**.
- In Creative, Paper is not consumed.
- The player must remain within **8 blocks** of the Recipe Book.

The resulting note stores the selected recipe ID and can be given to another player.

## Sharing

Recipe Notes are ordinary items, so copied discoveries can be shared through normal Minecraft inventory and multiplayer interactions. Using the note on another Recipe Book transfers that recipe into the receiving book's progress.

## Compatibility notes

Older fixed recipe note items remain registered for save compatibility. New discovery and copied notes use the generic `aandacooking:recipe_note` item.

## Related pages

- [Recipe Book](/recipe-book/overview/)
- [Complete Recipe Index](/recipes/complete-index/)
- [World Generation & Discovery](/development/world-generation-discovery/)
- [Commands](/reference/commands/)
