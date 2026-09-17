---
title: World Generation & Discovery
description: Current structure loot and planned world integration for recipe discovery and pantry ingredients in A & A Cooking.
---

A & A Cooking uses exploration as part of recipe discovery and ingredient progression. Some structure loot is already implemented, while broader world integration is planned for future development.

## Current structure loot

### Salt

Salt currently appears as pantry loot in selected vanilla structure chests.

| Structure chest | Chance |
|---|---:|
| Shipwreck Supply | 65% |
| Shipwreck Treasure | 45% |
| Buried Treasure | 75% |
| Village Fisher | 35% |
| Village Butcher | 25% |

Each successful Salt loot roll currently adds one Salt item.

Salt is intended to be an exploration and pantry resource rather than something produced from [Kitchen Sink](/stations/kitchen-sink/) water.

### Recipe Notes

[Recipe Notes](/recipe-book/notes-discovery/) currently appear in Villages, Shipwrecks, and Stronghold libraries.

| Structure group | Chance | Recipe focus |
|---|---:|---|
| Villages | 45% | Meals, sides, baking, desserts, sauces and condiments, and other general recipes |
| Shipwrecks | 55% | Soups, stews, and drinks |
| Stronghold libraries | 80% | Any Recipe Book category |

Shipwreck Recipe Notes can appear in map, supply, and treasure chests.

## Planned Salt distribution

The Salt loot system is planned to expand into a wider set of structures so exploration routes feel less dependent on only a few chest types.

The current target distribution is:

| Structure | Planned role | Target chance |
|---|---|---:|
| Village Butcher and Fisher chests | Most reliable village source | 75% |
| Other selected Village chests | General pantry source | 40% |
| Mineshafts | Moderate exploration source | 50% |
| Shipwreck Supply and Treasure | Moderate trade cargo source | 45% |
| Dungeons | Occasional source | 30% |
| Pillager Outposts | Rare source | 20% |
| Strongholds | Rare source | 20% |

The planned version uses one Salt item per successful roll. Buried Treasure is intended to be removed from the long term Salt distribution once the broader structure set is implemented.

Witch Huts remain a possible thematic source, but they are deferred because the vanilla structure does not provide a normal loot chest to extend in the same way.

## Shipwreck cargo rework

Loose Salt appearing directly in an underwater Shipwreck chest is a temporary abstraction. The intended long term presentation is a sealed **Spice Crate** or similar protected trade cargo container.

This gives Shipwreck Salt a more believable explanation: the cargo was sealed for transport instead of sitting exposed to seawater.

The future Shipwreck theme is broader than Salt. Structure specific discovery is intended to emphasize foods that fit maritime exploration, including:

- seafood recipes
- preserved foods
- sailor meals
- chowders and other ship appropriate soups
- pantry and trade cargo ingredients

The exact Spice Crate block, loot behavior, appearance, and generation rules will be documented when that world generation work is implemented.

## Broader world integration

Future structure loot is intended to become more thematic instead of drawing every recipe from the same generic pool. Different structures can favor different food traditions, ingredients, or preparation styles while the [Recipe Book](/recipe-book/overview/) and [Recipe Notes](/recipe-book/notes-discovery/) remain the main discovery system.

Rock Salt deposits or other natural Salt generation are also being considered for a later world generation pass. They are not part of the current documented implementation.

## Related pages

- [Recipe Notes & Discovery](/recipe-book/notes-discovery/)
- [Recipe Book](/recipe-book/overview/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Planned Features](/development/planned-features/)
- [Documentation Coverage](/reference/documentation-status/)
