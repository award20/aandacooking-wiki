---
title: World Generation & Discovery
description: Structure loot, Salt distribution, Recipe Note discovery, and future world integration in A & A Cooking.
---

Exploration is part of A & A Cooking progression. The current playtest build adds **Salt** and **Recipe Notes** to selected vanilla structure loot tables.

## Salt distribution

Each successful Salt roll adds one `aandacooking:salt` item.

| Structure chest | Chance |
|---|---:|
| Village Butcher | 75% |
| Village Fisher | 75% |
| Other selected Village chests | 40% |
| Abandoned Mineshaft | 50% |
| Shipwreck Supply | 45% |
| Shipwreck Treasure | 45% |
| Simple Dungeon | 30% |
| Pillager Outpost | 20% |
| Stronghold Corridor | 20% |
| Stronghold Crossing | 20% |
| Stronghold Library | 20% |

The selected 40% Village group includes Armorer, Cartographer, Desert House, Fletcher, Mason, Plains House, Savanna House, Shepherd, Snowy House, Taiga House, Tannery, Temple, Toolsmith, and Weaponsmith chests.

Salt is an exploration and pantry ingredient. The [Kitchen Sink](/stations/kitchen-sink/) provides water, not Salt.

## Recipe Notes

[Recipe Notes](/recipe-book/notes-discovery/) are also added to structure loot. The structure type controls which Recipe Book categories can be selected.

| Structure group | Chance | Recipe categories |
|---|---:|---|
| Villages | 45% | Meals, Sides, Baking, Desserts, Sauces & Condiments, Other |
| Shipwrecks | 55% | Soups & Stews, Drinks |
| Stronghold Library | 80% | Any category |

Village Recipe Notes can appear in the same broad set of Village chest types used by the discovery system. Shipwreck notes can appear in Map, Supply, and Treasure chests.

The [Recipe Book](/recipe-book/overview/) currently contains **233 discoverable recipes**, so the note placed into a chest is selected from the eligible recipes for that structure group.

## Shipwreck cargo direction

Salt currently appears directly in Shipwreck Supply and Treasure chests. A future presentation pass may replace the loose chest item with a sealed **Spice Crate** or similar protected trade cargo container.

That future change is about presentation and world storytelling. Shipwreck Salt itself is already implemented.

The intended Shipwreck theme can continue to emphasize:

- seafood recipes
- preserved foods
- sailor meals
- chowders and other ship appropriate soups
- pantry and trade cargo ingredients

## Future world integration

Possible later additions include natural Salt generation such as Rock Salt deposits and more structure specific pantry presentation. Witch Huts remain a thematic possibility, but vanilla Witch Huts do not provide a standard chest to extend through the current loot table approach.

These ideas are not part of the current playtest build.

## Related pages

- [Recipe Notes & Discovery](/recipe-book/notes-discovery/)
- [Recipe Book](/recipe-book/overview/)
- [Complete Recipe Index](/recipes/complete-index/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Planned Features](/development/planned-features/)
