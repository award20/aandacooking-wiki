---
title: Rice Dishes & Bowls
description: Cooked Rice, porridge, pancakes, rice cakes, fried Rice, and Rice bowl content in A & A Cooking.
---

Rice is both a staple ingredient and the foundation for several finished meal families in A & A Cooking. The current content includes simple cooked Rice, porridge, pancakes, rice cakes, multiple fried Rice dishes, and later Soy Sauce Rice bowls.

This page records the established Rice dishes and their item IDs where available. Exact ingredient quantities, processing times, temperatures, and station requirements will be added as individual recipes receive dedicated documentation.

## Rice foundation

Several Rice products act as prerequisites for later dishes rather than only as finished foods:

| ID | Display name | Role |
|---|---|---|
| `rice_cooked` | [Cooked Rice](/recipes/details/cooked-rice/) | Base for larger Rice dishes |
| `rice_flour` | Rice Flour | Processed grain ingredient |
| `rice_pancake_batter` | Rice Pancake Batter | Pancake intermediate |
| `rice_cake_dough` | Rice Cake Dough | Rice cake intermediate |

The wider production chain is documented on [Rice & Soybean](/ingredients/rice-soybean/).

## Porridge

The established porridge branch includes:

- `rice_porridge` (Rice Porridge)
- `rice_porridge_chicken` (Chicken Rice Porridge)

This branch shows the progression from a simple cooked grain dish into a larger meal that adds another prepared ingredient.

## Pancakes and rice cakes

Rice Flour also supports foods outside bowls and fried Rice:

- `rice_pancake_batter` (Rice Pancake Batter)
- `rice_pancake` (Rice Pancake)
- `rice_cake_dough` (Rice Cake Dough)
- `rice_cake_seared` (Seared Rice Cake)

These foods connect the Rice chain to the broader batter, dough, and direct cooking systems. See [Breads & Baked Foods](/recipes/breads-baked-foods/) for the wider grain and batter catalog.

## Fried Rice

The established fried Rice family includes:

| ID | Display name |
|---|---|
| `rice_fried_vegetable` | Vegetable Fried Rice |
| `rice_fried_egg` | Egg Fried Rice |
| `rice_fried_chicken` | Chicken Fried Rice |
| `rice_fried_beef` | Beef Fried Rice |
| `rice_fried_mushroom` | Mushroom Fried Rice |
| `rice_fried_salmon` | Salmon Fried Rice |

These dishes reuse [Cooked Rice](/recipes/details/cooked-rice/) as a prepared base and combine it with produce, egg, meat, mushrooms, or fish.

## Soy Sauce fried Rice

The later Soy Sauce branch adds:

| ID | Display name |
|---|---|
| `rice_fried_chicken_soy_sauce` | Chicken Soy Fried Rice |
| `rice_fried_beef_soy_sauce` | Beef Soy Fried Rice |

These recipes connect the Rice branch with the fermented Soybean chain documented under [Soybean & Tofu Foods](/recipes/soybean-tofu-foods/) and [Fermentation & Preservation](/recipes/fermentation-preservation/).

## Rice bowls

The Soy Sauce branch also includes two Rice bowls:

| ID | Display name |
|---|---|
| `rice_bowl_chicken_soy_sauce` | Soy Chicken Rice Bowl |
| `rice_bowl_salmon_soy_sauce` | Soy Salmon Rice Bowl |

The bowl branch is useful for showing how one finished meal can depend on several earlier systems, including [Cooked Rice](/recipes/details/cooked-rice/), prepared protein, and a Soybean sauce prerequisite.

## Recipe Book behavior

Rice dishes use the same [Recipe Book](/recipe-book/overview/) dependency and station loading systems as the rest of the catalog. When a dish depends on [Cooked Rice](/recipes/details/cooked-rice/), a batter, dough, sauce, or another intermediate, that prerequisite can be represented as part of the preparation plan instead of forcing the final recipe to duplicate every earlier step.

## Recipe detail status

The outputs and item IDs listed on this page are part of the current Rice content. Exact quantities, temperatures, processing times, and station modes will be added as those recipes receive dedicated documentation.

## Related pages

- [Rice & Soybean](/ingredients/rice-soybean/)
- [Soybean & Tofu Foods](/recipes/soybean-tofu-foods/)
- [Stir Fries & Seared Foods](/recipes/stir-fries-seared-foods/)
- [Breads & Baked Foods](/recipes/breads-baked-foods/)
- [Recipe Catalog](/recipes/overview/)
