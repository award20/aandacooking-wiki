---
title: Ingredients Overview
description: Ingredient families, preparation states, intermediates, and naming conventions used by A & A Cooking recipes.
---

A & A Cooking treats ingredients as more than interchangeable crafting inputs. Recipes can depend on the ingredient itself, its preparation state, and intermediate products made at other kitchen stations.

The ingredient catalog is large and continues to expand during pre alpha development. This page establishes the structure used by the wiki rather than attempting to freeze every item into one enormous list.

## Ingredient families

The current content can be browsed through several broad families:

| Family | Examples |
|---|---|
| Produce | Tomato, Onion, Garlic, Orange and other crop ingredients |
| Prepared produce | Sliced, diced, minced, julienned, peeled, shredded, crushed, or ground forms |
| Grains and legumes | Wheat, Rice, Soybean and their processed derivatives |
| Eggs and dairy | Egg preparations, milk products, cream, butter, cheese, custard and related foods |
| Herbs and seasonings | Fresh herbs, crushed/ground herbs, herb blends, Salt and powdered ingredients |
| Liquids and sauces | Juices, [Seed Oil](/recipes/details/seed-oil/), Salt Brine, sauces, purees, pastes and fermented liquids |
| Doughs and batters | Bread doughs, pancake batters, cookie doughs, focaccia dough and similar intermediates |
| Cooked components | [Cooked Rice](/recipes/details/cooked-rice/), noodles, seared foods, tofu, sauces and other prerequisites used by larger dishes |
| Finished dishes | Soups, stews, stir fries, pasta, rice dishes, baked foods, drinks and desserts |

These are documentation groups rather than hard technical registry categories. A single ingredient can participate in several systems.

## Preparation states

Recipes can require a specific prepared form instead of accepting the unprepared parent ingredient. Common preparation paths include:

- washing at the [Kitchen Sink](/stations/kitchen-sink/)
- peeling and cutting at the [Cutting Board](/stations/cutting-board/)
- crushing or grinding at the [Mortar and Pestle](/stations/mortar-and-pestle/)
- blending at the [Blender](/stations/blender/)
- mixing, whisking, or folding at the [Mixing Bowl](/stations/mixing-bowl/)
- heating with cookware or the [Stovetop/Oven](/stations/stovetop-oven/)
- fermentation in the [Fermentation Crock](/stations/fermentation-crock/)

The exact state matters to recipe matching. For example, a recipe that calls for a diced ingredient is not merely asking for the same raw item in a different slot.

## Ingredient first naming

A & A Cooking generally uses the parent or primary ingredient first in item IDs, followed by the resulting form or preparation. Examples include:

```text
 tomato_sauce
 onion_powder
 garlic_minced
 milk_cheese_fresh
 soybean_milk
 rice_flour
```

This keeps related content grouped together in the registry and makes long production chains easier to follow.

## Intermediates and dependencies

Many recipes use multiple stages. A finished dish may depend on one or more intermediate recipes, which can themselves depend on prepared ingredients.

For example, a larger recipe may need:

1. a crop ingredient to be washed
2. a prepared form such as diced or minced
3. a station made intermediate such as a sauce, batter, cooked grain, brine, or fermented product
4. a final cooking step

The [Recipe Book](/recipe-book/overview/) and its prerequisite planner are designed around these dependency chains instead of treating every recipe as an isolated craft.

## Freshness

Perishable ingredients participate in the freshness/spoilage system documented under [Kitchen Storage](/storage/overview/) and [Cold Storage](/storage/cold-storage/). Processing does not imply that an ingredient becomes permanently fresh; freshness behavior continues through food production where the current recipe implementation supports it.

## Related pages

- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Rice & Soybean](/ingredients/rice-soybean/)
- [Rice Dishes & Bowls](/recipes/rice-dishes-bowls/)
- [Soybean & Tofu Foods](/recipes/soybean-tofu-foods/)
- [Drinks](/recipes/drinks/)
- [Herbs & Seasonings](/recipes/herbs-seasonings/)
- [Recipe Catalog](/recipes/overview/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
