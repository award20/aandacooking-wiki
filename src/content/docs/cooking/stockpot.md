---
title: Stockpot
description: Large-volume soups, stews, freeform dishes, potion-infused foods, and serving in the Iron Stockpot.
---

The **Iron Stockpot** is A & A Cooking's large-volume stovetop vessel. It is used for soups, stews, liquid-heavy recipes, freeform cooking, potion-infused foods, and finished-dish serving.

<div class="page-summary">
    <p><strong>Status: Implemented core system</strong></p>
    <p>The Stockpot has the most developed cookware-specific cooking path in the current system, including canonical recipes, freeform outcomes, potion handling, thermal simulation, visual ingredient motion, and serving behavior.</p>
</div>

## Role

Use the Stockpot when a dish depends on a larger liquid volume or combines several ingredients into a soup, stew, or similar finished food.

The Stockpot supports two broad cooking paths:

- **Canonical recipes**, where the inserted ingredients and liquid satisfy a registered Stockpot recipe
- **Freeform cooking**, where a valid but non-canonical combination can still produce a derived dish

The active recipe is locked once cooking begins so progress remains associated with the recipe that actually started.

## Heat and thermal simulation

The Stockpot receives heat from the [Stovetop/Oven](/stations/stovetop-oven/) and changes temperature through the shared thermal simulation instead of instantly matching the burner target.

Cooking progress depends on the recipe's required temperature conditions. Moving outside those conditions can pause valid progress without forcing the cookware to switch immediately to another possible recipe.

The renderer also reflects active cooking with ingredient motion and heat-dependent presentation such as bubbles.

## Liquids

Stockpot recipes can define a required liquid type and quantity. Current pinned-recipe planning understands Stockpot water requirements in millibuckets and represents available water through Water Buckets.

For recipe planning:

```text
1 Water Bucket = 1000 mB
```

A recipe requiring `2000 mB` of water therefore needs two available Water Buckets when availability is checked from the player inventory and connected kitchen storage.

## Canonical recipes

Canonical Stockpot recipes can require:

- exact ingredient items
- exact ingredient quantities
- preparation state such as washed, diced, sliced, or minced
- a liquid type and amount
- a valid cooking-temperature range
- cooking duration and finished-dish state

These requirements are shared with the [Recipe Book](/recipe-book/overview/) preparation-plan system so the pinned HUD can work backward from a final requirement to raw or intermediate ingredients.

For example, a prepared requirement such as Diced Tomato can be traced through washing and [Cutting Board](/stations/cutting-board/) preparation when the final prepared item is not already available.

## Freeform cooking

The Stockpot can cook valid ingredient combinations that do not match a canonical recipe.

Freeform outcomes derive their food properties from the actual ingredients and can produce generalized dish identities such as:

- Vegetable Stew
- Meat Stew
- Mysterious Stew

This allows experimentation without requiring every possible ingredient combination to have a hand-authored recipe.

## Potions and elixirs

The Stockpot also supports potion-based cooking.

Potion effects can be incorporated into food instead of being duplicated without cost. Potion-only cooking can produce **Elixirs**, while potion plus food ingredients can create infused freeform dishes.

The Stockpot keeps potion effects separate from ordinary canonical matching so a canonical food recipe does not silently match when actual potion effects are present.

Potion liquid can also receive a potion-derived visual tint.

## Finished-dish quality

Stockpot outputs participate in the shared finished-dish quality system. Quality can affect the finished food's nutrition and saturation rather than existing as a cosmetic label only.

Freeform foods derive nutrition from the ingredients that actually went into the pot.

## Serving

Completed Stockpot food can be transferred through the serving system using compatible serving containers.

Serving is a separate stage from cooking:

```text
prepare ingredients
      ↓
load Stockpot
      ↓
cook dish
      ↓
serve finished portions
```

The serving container catalog can expand with new recipes, so individual recipe pages document serving expectations where they matter.

## Visual behavior

The Stockpot renderer supports cookware-specific presentation including:

- visible ingredients
- ingredient motion while cooking
- heat-related bubbling
- lid presentation
- potion-liquid tinting when appropriate

These effects communicate the state of the cookware without replacing the underlying recipe and thermal simulation.

## Recipe Book integration

Stockpot recipes participate in the pinned [Recipe Book](/recipe-book/overview/) workflow.

The preparation plan can expose:

- exact solid ingredients
- their preparation chains
- required water volume
- the Stockpot as the final cooking station

Connected storage can be checked for the exact prepared requirements instead of treating all variants of an ingredient as interchangeable.

## Related pages

- [Cookware Overview](/cooking/cookware/)
- [Stovetop/Oven](/stations/stovetop-oven/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Recipe Book](/recipe-book/overview/)
