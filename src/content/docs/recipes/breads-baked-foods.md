---
title: Breads & Baked Foods
description: Bread, toast, pancakes, cookies, focaccia, baked produce, and other oven foods represented in A & A Cooking.
---

A & A Cooking separates baking into preparation stages instead of treating every baked food as a single crafting recipe. Flour, doughs, batters, toppings, and other intermediates can be prepared before the final food reaches the oven.

This page records baked foods and baking intermediates confirmed by the retained project content. Exact quantities, oven temperatures, bake times, and bakeware requirements will be added as their latest Recipe Book entries are verified.

## Bread and dough chain

The established wheat bread chain includes:

| Internal ID | Display name | Role |
|---|---|---|
| `wheat_flour` | Wheat Flour | Dry intermediate |
| `wheat_bread_dough` | Bread Dough | Bread intermediate |
| `wheat_bread` | Wheat Bread | Finished bread |

This structure allows the Recipe Book to treat Bread Dough as a real prerequisite rather than collapsing flour preparation, dough mixing, and baking into one step.

## Pancakes and cookies

Confirmed batter and dough based foods include:

| Internal ID | Display name | Role |
|---|---|---|
| `wheat_pancake_batter` | Pancake Batter | Pancake intermediate |
| `wheat_pancake` | Wheat Pancake | Finished food |
| `sugar_cookie_dough` | Sugar Cookie Dough | Cookie intermediate |
| `chocolate_cookie_dough` | Chocolate Cookie Dough | Cookie intermediate |
| `pumpkin_bread_batter` | Pumpkin Bread Batter | Pumpkin Bread intermediate |

The current catalog also contains the finished foods associated with these preparation chains. Their exact station actions and batch sizes will be documented from the current Recipe Book definitions rather than inferred from the item names alone.

## Toast and prepared bread

The retained content includes several prepared bread variants:

- `bread_toast_garlic` (Garlic Toast)
- `bread_toast_butter` (Butter Toast)
- `bread_toast_sweet_berry` (Sweet Berry Toast)
- `bread_garlic_herb` (Herb Garlic Bread)
- `tomato_bruschetta` (Tomato Bruschetta)

These foods show how an already baked bread can become a prerequisite for another recipe instead of always being treated as the final step in a chain.

## Focaccia

The herb content line includes:

| Internal ID | Display name | Role |
|---|---|---|
| `wheat_focaccia_dough` | Focaccia Dough | Dough intermediate |
| `wheat_focaccia_herb` | Herb Focaccia | Finished baked food |

Focaccia is a useful example of the wider herb system feeding directly into baking rather than existing only as seasonings for stovetop recipes.

## Other baked and roasted foods

The retained food catalog also includes oven focused dishes such as:

- `apple_baked` (Baked Apple)
- `carrot_roasted` (Roasted Carrot)
- `beetroot_roasted` (Roasted Beetroot)
- `cod_baked` (Baked Cod)
- `salmon_baked` (Baked Salmon)
- `chicken_roasted` (Roasted Chicken)
- `potato_baked_cheese_raw` (Raw Cheese Baked Potato)
- `potato_baked_cheese` (Cheese Baked Potato)

These dishes use the same larger cooking framework as other recipes, so the current recipe definition can specify required preparation, cookware, temperature, and cooking time.

## Oven bakeware

A baked recipe can require a specific rack arrangement or piece of cookware. The Stovetop/Oven supports three oven racks, while the current bakeware system includes the Iron Baking Sheet and Iron Baking Dish.

See [Oven Bakeware](/cooking/oven-bakeware/) for the shared rack and bakeware behavior. Individual recipes will list a specific requirement only after that requirement has been checked against the current recipe definition.

## Preparation dependencies

Baking commonly depends on other parts of the kitchen:

- [Mixing Bowl](/stations/mixing-bowl/) for applicable doughs, batters, and mixtures
- [Sauces & Intermediates](/recipes/sauces-intermediates/) for flour, butter, cream, egg preparations, purees, doughs, and batters
- [Ingredient Preparation](/getting-started/ingredient-preparation/) when produce needs washing or cutting before assembly
- [Recipe Book](/recipe-book/overview/) for prerequisite planning and pinned recipe loading

The exact recipe remains authoritative. This page does not assign an unverified station or bakeware requirement just because an item appears to be baked.

## Documentation status

The item identities and broad food chains on this page come from retained A & A Cooking content history. Exact quantities, temperatures, cooking times, output counts, and bakeware requirements remain to be verified recipe by recipe against the latest definitions.

## Related pages

- [Recipe Catalog](/recipes/overview/)
- [Sauces & Intermediates](/recipes/sauces-intermediates/)
- [Oven Bakeware](/cooking/oven-bakeware/)
- [Stovetop/Oven](/stations/stovetop-oven/)
- [Pasta & Noodles](/recipes/pasta-noodles/)
