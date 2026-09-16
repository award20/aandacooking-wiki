---
title: Stir Fries & Seared Foods
description: Stir fries, seasoned wok dishes, seared meats, seafood, and other direct heat foods represented in A & A Cooking.
---

Stir fries and seared foods are the main direct heat recipe families in A & A Cooking. They make use of the Skillet and Wok systems, prepared ingredients, temperature ranges, and, for applicable Wok recipes, manual tossing.

This page records confirmed outputs from the retained project content. Exact quantities, temperatures, cooking durations, and toss requirements will be added when each current Recipe Book definition is verified.

## Basic vegetable dishes

Confirmed early direct heat foods include:

- `sauteed_tomatoes` (Sauteed Tomatoes)
- `vegetable_stir_fry` (Vegetable Stir Fry)
- `mushroom_stir_fry` (Mushroom Stir Fry)

These recipes demonstrate the difference between smaller Skillet style foods and larger Wok focused stir fries. The current recipe definition determines which station is required for each output.

## Seared meats and seafood

The retained catalog includes a broad seared protein line:

| Internal ID | Display name |
|---|---|
| `beef_steak_seared` | Seared Beef Steak |
| `salmon_seared` | Seared Salmon |
| `porkchop_seared` | Seared Porkchop |
| `rabbit_seared` | Seared Rabbit |
| `mutton_seared` | Seared Mutton |

The content line also includes `chicken_seared_herb` (Herb Seared Chicken), which connects direct heat cooking with the herb and seasoning systems.

## Seasoned stir fries

Seasoned variants expand the Wok family beyond the basic Vegetable and Mushroom Stir Fries:

- `vegetable_stir_fry_seasoned` (Seasoned Vegetable Stir Fry)
- `mushroom_stir_fry_seasoned` (Seasoned Mushroom Stir Fry)
- `chicken_stir_fry_seasoned` (Seasoned Chicken Stir Fry)
- `beef_stir_fry_seasoned` (Seasoned Beef Stir Fry)
- `porkchop_stir_fry_seasoned` (Seasoned Porkchop Stir Fry)
- `salmon_stir_fry_seasoned` (Seasoned Salmon Stir Fry)
- `rabbit_stir_fry_seasoned` (Seasoned Rabbit Stir Fry)
- `mutton_stir_fry_seasoned` (Seasoned Mutton Stir Fry)

These foods are intended to use the broader seasoning and ingredient preparation systems rather than being simple renamed copies of the unseasoned dishes.

## Soybean and preserved variants

The Rice and Soybean content adds more direct heat dishes, including:

- `soybean_stir_fry_mushroom` (Mushroom Soybean Stir Fry)
- `soybean_stir_fry_chicken` (Chicken Soybean Stir Fry)
- `soybean_tofu_stir_fry_pickled` (Pickled Tofu Stir Fry)

Soy Sauce and preserved ingredient recipes also feed into several glazed, fried Rice, noodle, and rice bowl dishes. See [Rice & Soybean](/ingredients/rice-soybean/) and [Fermentation & Preservation](/recipes/fermentation-preservation/) for those prerequisite chains.

## Wok heat and tossing

The Wok has its own heat zone and toss systems. Applicable recipes can care about:

- ingredient temperature
- the active heat zone
- manual toss actions
- toss count or streak behavior
- recipe progress while the correct conditions are maintained

The [Wok](/cooking/wok/) page documents those shared mechanics. This catalog page does not assign an exact toss count or temperature to a food until its current recipe definition has been checked.

## Skillet cooking

The Skillet provides fast response direct heat cooking with four ingredient slots. It is used by applicable seared, sauteed, egg, and other pan cooked foods.

See [Skillet](/cooking/skillet/) for its thermal behavior and ingredient cooking state system.

## Preparation dependencies

Direct heat foods frequently depend on earlier preparation steps:

- produce may need washing and a specific cut
- meats or seafood may need the correct raw ingredient state
- herbs, seasonings, sauces, and oils can be prerequisites
- Soy Sauce or pickled ingredients can introduce fermentation dependencies
- noodle and Rice variants can require already cooked starches

This is why the Recipe Book exposes prerequisite chains instead of treating each finished dish as one flat recipe.

## Documentation status

The output identities and broad recipe families on this page are confirmed from retained A & A Cooking content history. Exact ingredients, quantities, heat targets, durations, toss requirements, and station assignments still need to be verified against the latest detailed recipe entries.

## Related pages

- [Recipe Catalog](/recipes/overview/)
- [Skillet](/cooking/skillet/)
- [Wok](/cooking/wok/)
- [Pasta & Noodles](/recipes/pasta-noodles/)
- [Rice & Soybean](/ingredients/rice-soybean/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Eggs & Dairy](/recipes/eggs-dairy/)
