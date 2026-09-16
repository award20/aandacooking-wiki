---
title: Eggs & Dairy
description: Egg preparations, cheese, cream, butter, custard, dairy drinks, and related dishes represented in A & A Cooking.
---

Eggs and dairy form several connected preparation chains in A & A Cooking. Some outputs are finished foods, while others are prerequisites used by pasta, baking, sauces, sandwiches, and larger cooked dishes.

This page records egg and dairy outputs confirmed by the retained project content. Exact quantities, station assignments, temperatures, durations, and output counts will be added as their current Recipe Book entries are verified.

## Egg preparation chain

Confirmed egg preparations include:

| Internal ID | Display name | Role |
|---|---|---|
| `egg_cracked` | Cracked Egg | Basic egg preparation |
| `beaten_egg` | Beaten Egg | Mixing and cooking prerequisite |
| `fried_egg` | Fried Egg | Finished direct heat food |
| `egg_scrambled` | Scrambled Egg | Finished egg dish |

The preparation system treats these as distinct states or outputs rather than allowing one generic Egg item to stand in for every recipe requirement.

## Omelettes

The retained catalog includes several omelette variants:

- `egg_omelette_cheese` (Cheese Omelette)
- `egg_omelette_vegetable` (Vegetable Omelette)
- `egg_omelette_herb` (Herb Omelette)
- `egg_omelette_mushroom` (Mushroom Omelette)

These dishes connect the egg chain with cheese, prepared vegetables, herbs, and mushrooms. Their current recipe definitions determine the exact station and preparation requirements.

## Cheese chain

The established cheese line includes:

| Internal ID | Display name | Role |
|---|---|---|
| `milk_cheese_fresh` | Fresh Cheese | Base cheese ingredient |
| `milk_cheese_shredded` | Shredded Cheese | Prepared cheese ingredient |
| `milk_cheese_sauce` | Cheese Sauce | Sauce and dish prerequisite |
| `milk_cheese_pasta` | Cheese Pasta | Finished pasta dish |

Fresh Cheese can be shredded through the ingredient preparation system. The current Cutting Board documentation records Fresh Cheese to Shredded Cheese as a supported preparation path.

Cheese also feeds into other established dishes, including:

- `mushroom_pasta_cheese` (Mushroom Cheese Pasta)
- `bread_sandwich_cheese_raw` (Raw Cheese Sandwich)
- `bread_sandwich_cheese_grilled` (Grilled Cheese Sandwich)
- `potato_baked_cheese_raw` (Raw Cheese Baked Potato)
- `potato_baked_cheese` (Cheese Baked Potato)

The raw and finished variants allow assembly and final heating to remain separate recipe steps.

## Cream and butter

Confirmed dairy intermediates include:

| Internal ID | Display name | Role |
|---|---|---|
| `milk_cream` | Cream | Creamy dishes and baking prerequisite |
| `milk_butter` | Butter | Cooking and baking prerequisite |
| `milk_butter_garlic` | Garlic Butter | Flavored butter |
| `milk_butter_herb` | Herb Butter | Flavored butter |
| `milk_whipped_cream` | Whipped Cream | Sweet dairy preparation |
| `milk_custard` | Custard | Dessert and baking preparation |

Cream and butter are shared prerequisites rather than isolated foods. They connect this page with baked foods, creamy soups, pasta, sauces, and other production chains.

## Dairy drinks

The retained catalog also includes:

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

The exact current recipe definition remains authoritative for station, quantity, and time requirements.

## Documentation status

The item identities and broad preparation chains on this page are confirmed from retained A & A Cooking content history. Exact ingredient counts, temperatures, durations, output counts, and station assignments still need to be checked against the latest Recipe Book definitions.

## Related pages

- [Recipe Catalog](/recipes/overview/)
- [Sauces & Intermediates](/recipes/sauces-intermediates/)
- [Breads & Baked Foods](/recipes/breads-baked-foods/)
- [Pasta & Noodles](/recipes/pasta-noodles/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Skillet](/cooking/skillet/)
