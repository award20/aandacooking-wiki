---
title: Mixing Bowl
description: Mixing Bowl slots, manual processing modes, recipe matching, and freshness handling.
---

The **Mixing Bowl** is a manual processing station for recipes that combine ingredients without direct heat. It is used for preparations that need mixing, whisking, or folding before they move into another cooking step.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>The six-input layout, manual processing modes, persistent progress, recipe-driven outputs, and shared freshness handling are part of the current development line.</p>
</div>

## Inventory layout

The Mixing Bowl provides:

| Slot type | Count |
|---|---:|
| Ingredient inputs | 6 |
| Reserved output | 1 |

The output slot is reserved for the completed recipe result. Ingredients remain in the bowl while the recipe is being worked.

## Processing modes

The current station supports three manual modes:

| Mode | Required actions |
|---|---:|
| Mix | 8 |
| Whisk | 12 |
| Fold | 6 |

These values are **player actions**, not game ticks. A compatible recipe only progresses through the mode required by that recipe.

## Progress and recipe changes

The bowl keeps its contents and active processing progress between interactions. Progress is tied to the current recipe state rather than being a permanent value for the block.

Changing the selected mode or changing the inputs resets the active progress when the previous recipe state is no longer valid. This prevents progress from one recipe or mode being carried into another.

## Recipe matching

Mixing Bowl recipes use the shared processing recipe system. Requirements can check exact ingredients, quantities, and ingredient preparation states.

The station therefore distinguishes between inputs such as a whole ingredient and a specifically prepared version when the recipe requires that distinction.

When a recipe completes, its required ingredients are consumed and the result is moved into the reserved output slot when that slot can accept it.

## Freshness and spoilage

The current processing pipeline rejects spoiled ingredients when a recipe requires food that must still be usable. Produced food inherits freshness through the shared recipe-output freshness rules rather than always starting at an unrelated fixed age.

This allows multi-step preparations to carry food age forward through the recipe chain.

## Visual ingredients

Ingredients placed into the Mixing Bowl are represented visually in the station. Their presentation shifts as the bowl is worked so the station reads as an active preparation surface instead of only an inventory screen.

Exact animation timing and every recipe-specific presentation remain subject to pre-alpha polish.

## Recipe Book integration

The Mixing Bowl participates in the Recipe Book station-selection and preparation workflow. A pinned recipe can identify the Mixing Bowl as its required station and expose the exact input requirements needed for the selected recipe quantity.

Recipe quantities are counted as recipe executions. When bulk preparation is used, the station consumes one execution's requirements at a time while valid ingredients and output space remain available.

## Related pages

- [Cooking Overview](/cooking/overview/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Recipe Book](/recipe-book/overview/)
- [Mortar and Pestle](/stations/mortar-and-pestle/)
