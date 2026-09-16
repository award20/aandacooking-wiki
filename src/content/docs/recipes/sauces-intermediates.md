---
title: Sauces & Intermediates
description: Sauces, purees, powders, doughs, batters, and other prerequisite foods used by larger A & A Cooking recipes.
---

Many A & A Cooking dishes are built from intermediate foods instead of raw ingredients alone. Sauces, purees, powders, doughs, batters, dairy products, and other prepared components create dependency chains that the [Recipe Book](/recipe-book/overview/) can track and plan.

This page records established intermediates from the retained content snapshots. Exact station recipes, quantities, and processing times will be expanded as the current entries are verified.

## Sauces and savory components

| Internal ID | Display name | Role |
|---|---|---|
| `tomato_sauce` | Tomato Sauce | Tomato-based sauce |
| `salsa_fresh` | Fresh Salsa | Fresh prepared sauce |
| `mushroom_sauce_creamy` | Creamy Mushroom Sauce | Creamy savory sauce |
| `onion_gravy` | Onion Gravy | Savory gravy |
| `garlic_paste` | Garlic Paste | Concentrated Garlic component |
| `breadcrumbs` | Breadcrumbs | Coating / recipe prerequisite |
| `breadcrumbs_seasoned` | Seasoned Breadcrumbs | Seasoned coating component |

These items can be used as prerequisites for larger dishes rather than requiring every final recipe to repeat their full preparation chain.

## Purees and fruit preparations

| Internal ID | Display name | Role |
|---|---|---|
| `tomato_puree` | Tomato Puree | Tomato intermediate |
| `pumpkin_puree` | Pumpkin Puree | Baking and cooking intermediate |
| `apple_puree` | Apple Puree | Fruit intermediate |
| `applesauce` | Applesauce | Processed Apple food |

Purees are useful examples of why the ingredient system distinguishes raw produce from a processed derivative. A recipe asking for Pumpkin Puree is not simply asking for Pumpkin in another inventory slot.

## Powders and dry ingredients

Confirmed dry intermediates include:

- `cocoa_powder` (Cocoa Powder)
- `wheat_flour` (Wheat Flour)
- `breadcrumbs` (Breadcrumbs)
- `breadcrumbs_seasoned` (Seasoned Breadcrumbs)

The broader content roadmap also contains additional powders and seasonings. Those will be added here as their current definitions are checked against the latest development source.

## Dairy and egg intermediates

| Internal ID | Display name | Role |
|---|---|---|
| `milk_cream` | Cream | Creamy dishes and baking prerequisite |
| `milk_butter` | Butter | Cooking and baking prerequisite |
| `egg_beaten` | Beaten Egg | Mixed/baking prerequisite |

These components are deliberately separate from their base ingredients so recipes can require preparation before final assembly or cooking.

## Doughs, batters, and mixtures

| Internal ID | Display name | Role |
|---|---|---|
| `wheat_bread_dough` | Bread Dough | Bread prerequisite |
| `wheat_pancake_batter` | Pancake Batter | Pancake prerequisite |
| `sugar_cookie_dough` | Sugar Cookie Dough | Cookie prerequisite |
| `chocolate_cookie_dough` | Chocolate Cookie Dough | Cookie prerequisite |
| `pumpkin_bread_batter` | Pumpkin Bread Batter | Pumpkin Bread prerequisite |
| `apple_crumble_mixture` | Apple Crumble Mixture | Apple Crumble prerequisite |

These chains are where the dedicated processing stations become especially important. A final oven recipe can depend on a mixture or dough that was already produced elsewhere in the kitchen.

## Why intermediates matter

A multi-stage recipe can look roughly like this:

1. wash or otherwise prepare the base ingredient
2. cut, peel, grind, blend, or mix it into the required form
3. create an intermediate such as a puree, sauce, batter, dough, or seasoning
4. load the final recipe at its cooking station
5. cook, bake, fry, or ferment the final dish

The Recipe Book prerequisite planner exists to make those dependency chains manageable. When a required intermediate is missing, the pinned-recipe system can expose the preparation chain rather than only reporting that the final ingredient is absent.

## Processing stations

Different intermediate families can involve different stations:

- [Blender](/stations/blender/) for applicable blended products
- [Mixing Bowl](/stations/mixing-bowl/) for applicable mixtures, batters, and doughs
- [Mortar and Pestle](/stations/mortar-and-pestle/) for applicable powders and ground ingredients
- [Saucepan](/cooking/saucepan/) for applicable liquid cooking and reductions
- [Fermentation Crock](/stations/fermentation-crock/) for fermented prerequisites

The exact current recipe definition is authoritative for station choice. This page does not assign an unverified station to every item based only on its name.

## Fermented intermediates

Fermentation adds another prerequisite family, including brines, fermented Soybean products, and Soy Sauce production. Those chains are documented separately under [Fermentation & Preservation](/recipes/fermentation-preservation/) and [Rice & Soybean](/ingredients/rice-soybean/).

## Documentation status

The item identities listed here are confirmed from retained project content. Some exact station assignments, quantities, temperatures, and processing times still need to be checked against the latest recipe definitions before they are presented as fixed values.

## Related pages

- [Recipe Catalog](/recipes/overview/)
- [Soups & Stews](/recipes/soups-stews/)
- [Ingredients Overview](/ingredients/overview/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Recipe Book](/recipe-book/overview/)
