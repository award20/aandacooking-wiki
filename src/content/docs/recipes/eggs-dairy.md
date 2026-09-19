---
title: Eggs & Dairy
description: Egg preparations, cheese, cream, butter, custard, dairy drinks, and related dishes represented in A & A Cooking.
---

Eggs and dairy form several connected preparation chains in A & A Cooking. Some outputs are finished foods, while others are prerequisites used by pasta, baking, sauces, sandwiches, and larger cooked dishes.

This page records the current egg and dairy food families. Exact inputs, quantities, station requirements, processing times, and heat details are listed in the [Complete Recipe Index](/recipes/complete-index/).

## Egg preparation chain

Confirmed egg preparations include:

| Item ID | Display name | Role |
|---|---|---|
| `egg_cracked` | Cracked Egg | Basic egg preparation |
| `egg_beaten` | [Beaten Egg](/recipes/details/beaten-egg/) | Mixing and cooking prerequisite |
| `fried_egg` | Fried Egg | Finished direct heat food |
| `egg_scrambled` | Scrambled Egg | Finished egg dish |

The preparation system treats these as distinct states or outputs rather than allowing one generic Egg item to stand in for every recipe requirement.

## Omelettes

The catalog includes several omelette variants:

- `egg_omelette_cheese` (Cheese Omelette)
- `egg_omelette_vegetable` (Vegetable Omelette)
- `egg_omelette_herb` (Herb Omelette)
- `egg_omelette_mushroom` (Mushroom Omelette)

These dishes connect the egg chain with cheese, prepared vegetables, herbs, and mushrooms. Individual recipe pages provide the exact station and preparation requirements.

## Cheese chain

The established cheese line includes:

| Item ID | Display name | Role |
|---|---|---|
| `milk_cheese_fresh` | [Fresh Cheese](/recipes/details/fresh-cheese/) | Base cheese ingredient |
| `milk_cheese_shredded` | [Shredded Cheese](/recipes/details/shredded-cheese/) | Prepared cheese ingredient |
| `milk_cheese_sauce` | [Cheese Sauce](/recipes/details/cheese-sauce/) | Sauce and dish prerequisite |
| `milk_cheese_pasta` | Cheese Pasta | Finished pasta dish |

[Fresh Cheese](/recipes/details/fresh-cheese/) can be shredded through the ingredient preparation system. The current [Cutting Board](/stations/cutting-board/) documentation records [Fresh Cheese](/recipes/details/fresh-cheese/) to [Shredded Cheese](/recipes/details/shredded-cheese/) as a supported preparation path.

Cheese also feeds into other established dishes, including:

- `mushroom_pasta_cheese` (Mushroom Cheese Pasta)
- `bread_sandwich_cheese_raw` (Raw Cheese Sandwich)
- `bread_sandwich_cheese_grilled` (Grilled Cheese Sandwich)
- `potato_baked_cheese_raw` (Raw Cheese Baked Potato)
- `potato_baked_cheese` (Cheese Baked Potato)

The raw and finished variants allow assembly and final heating to remain separate recipe steps.

## Cream and Butter

Confirmed dairy intermediates include:

| Item ID | Display name | Role |
|---|---|---|
| `milk_cream` | [Cream](/recipes/details/cream/) | Creamy dishes and baking prerequisite |
| `milk_butter` | [Butter](/recipes/details/butter/) | Cooking and baking prerequisite |
| `milk_butter_garlic` | Garlic Butter | Flavored butter |
| `milk_butter_herb` | Herb Butter | Flavored butter |
| `milk_whipped_cream` | Whipped Cream | Sweet dairy preparation |
| `milk_custard` | Custard | Dessert and baking preparation |

[Cream](/recipes/details/cream/) and [Butter](/recipes/details/butter/) are shared prerequisites rather than isolated foods. They connect this page with baked foods, creamy soups, pasta, sauces, and other production chains.

## Dairy drinks

The catalog also includes:

- `milk_hot_chocolate` (Hot Chocolate)
- `milk_hot_chocolate_mint` (Mint Hot Chocolate)

Mint Hot Chocolate connects the dairy line with the herb system. Other drink families are documented separately as the beverage catalog expands.

## Preparation dependencies

Egg and dairy recipes can depend on several established systems:

- [Ingredient Preparation](/getting-started/ingredient-preparation/) for cracked eggs, shredded cheese, and other required states
- [Mixing Bowl](/stations/mixing-bowl/) for applicable beaten, whipped, mixed, or folded preparations
- [Skillet](/cooking/skillet/) for applicable direct heat egg dishes
- [Stovetop/Oven](/stations/stovetop-oven/) for heated cookware and baked cheese dishes
- [Sauces & Intermediates](/recipes/sauces-intermediates/) for shared dairy prerequisites

Individual recipe pages provide the exact station, quantity, and time requirements.

## Documentation coverage

Exact ingredient counts, temperatures, durations, output counts, and station assignments are listed in the [Complete Recipe Index](/recipes/complete-index/).

## Related pages

- [Recipe Catalog](/recipes/overview/)
- [Sauces & Intermediates](/recipes/sauces-intermediates/)
- [Breads & Baked Foods](/recipes/breads-baked-foods/)
- [Pasta & Noodles](/recipes/pasta-noodles/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Skillet](/cooking/skillet/)
