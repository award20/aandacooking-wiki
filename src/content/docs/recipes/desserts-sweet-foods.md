---
title: Desserts & Sweet Foods
description: Cookies, fruit desserts, sweet breads, jam, and other sweet foods in A & A Cooking.
---

A & A Cooking uses the same preparation and prerequisite systems for desserts as it does for savory cooking. Sweet foods can depend on doughs, batters, fruit preparations, dairy ingredients, powders, and finished components from other stations.

## Cookies

The cookie branch includes separate dough and finished food stages:

| Item ID | Display name | Role |
|---|---|---|
| `sugar_cookie_dough` | Sugar Cookie Dough | Cookie intermediate |
| `sugar_cookie` | Sugar Cookie | Finished cookie |
| `chocolate_cookie_dough` | Chocolate Cookie Dough | Cookie intermediate |
| `chocolate_cookie` | Chocolate Cookie | Finished cookie |

Chocolate recipes can also depend on `cocoa_powder`, which is documented with other powders and intermediates.

## Apple desserts

Apples support several sweet preparation paths:

| Item ID | Display name | Role |
|---|---|---|
| `apple_baked` | Baked Apple | Finished baked fruit |
| `apple_puree` | Apple Puree | Fruit intermediate |
| `applesauce` | Applesauce | Prepared fruit food |
| `apple_crumble_mixture` | Apple Crumble Mixture | Dessert intermediate |
| `apple_crumble` | Apple Crumble | Finished dessert |

Apple Puree and Applesauce can also act as prerequisites for other recipes, so they are shared with the [Sauces & Intermediates](/recipes/sauces-intermediates/) reference.

## Sweet breads

Pumpkin Bread uses a batter stage before baking:

| Item ID | Display name | Role |
|---|---|---|
| `pumpkin_bread_batter` | Pumpkin Bread Batter | Baking intermediate |
| `pumpkin_bread` | Pumpkin Bread | Finished sweet bread |

The broader bread and oven systems are documented on [Breads & Baked Foods](/recipes/breads-baked-foods/).

## Sweet Berry foods

Sweet Berries are used across several sweet recipe branches. The current catalog includes:

- `sweet_berry_compote` (Sweet Berry Compote)
- `sweet_berry_jam` (Sweet Berry Jam)
- `sweet_berry_sauce` (Sweet Berry Sauce)
- `bread_toast_sweet_berry` (Sweet Berry Toast)
- `sweet_berry_juice` (Sweet Berry Juice)
- `sweet_berry_smoothie` (Sweet Berry Smoothie)

Sweet Berry Jam is cooked in a [Saucepan](/cooking/saucepan/) from Sweet Berry Compote, Powdered Sugar, and a Glass Jar. It is produced as a filled open jar and uses the Sugared preservation method. The jar can then be sealed at the [Jar Sealer](/stations/jar-sealer/) for an additional preservation effect.

The drinks are covered on the [Drinks](/recipes/drinks/) page.

## Dairy and dessert components

Some sweet foods also use dairy preparations such as:

- `milk_whipped_cream` (Whipped Cream)
- `milk_custard` (Custard)
- `milk_cream` (Cream)
- `milk_butter` (Butter)

See [Eggs & Dairy](/recipes/eggs-dairy/) for the wider dairy chain.

## Recipe details

Exact quantities, processing times, oven temperatures, and output counts are documented only when they are stable enough to publish. This page focuses on the established dessert families and how their preparation chains connect.

## Related pages

- [Recipe Catalog](/recipes/overview/)
- [Breads & Baked Foods](/recipes/breads-baked-foods/)
- [Sauces & Intermediates](/recipes/sauces-intermediates/)
- [Eggs & Dairy](/recipes/eggs-dairy/)
- [Drinks](/recipes/drinks/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Jar Sealer](/stations/jar-sealer/)
- [Oven Bakeware](/cooking/oven-bakeware/)
