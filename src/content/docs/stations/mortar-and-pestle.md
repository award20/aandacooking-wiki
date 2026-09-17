---
title: Mortar and Pestle
description: Mortar and Pestle slots, Crush and Grind modes, manual processing, and freshness handling.
---

The **Mortar and Pestle** is a manual processing station for crushing and grinding ingredients into recipe-specific preparations. It is suited to smaller ingredient sets than the Mixing Bowl and is used for preparations such as ground, crushed, or powdered components.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>The three input layout, Crush and Grind modes, persistent progress, visible ingredients, recipe driven outputs, and shared freshness handling are currently implemented.</p>
</div>

## Inventory layout

The Mortar and Pestle provides:

| Slot type | Count |
|---|---:|
| Ingredient inputs | 3 |
| Reserved output | 1 |

The output slot is used for the completed recipe result.

## Processing modes

The current station supports two manual processing modes:

| Mode | Required pestle actions |
|---|---:|
| Crush | 5 |
| Grind | 10 |

The action count is interaction-based rather than time-based. Recipes are matched against their required mode, so a Grind recipe does not complete from Crush actions and vice versa.

## Progress behavior

The station preserves its current contents and processing progress while the active recipe remains valid.

Changing the selected mode or changing the inputs resets the active progress when the previous recipe state no longer matches. This keeps partial work tied to the ingredients and processing method that created it.

## Recipe matching

Mortar and Pestle recipes use the shared processing recipe matcher. A requirement can distinguish exact items, quantities, and preparation states.

When the required number of actions is reached, the station consumes the recipe inputs and moves the result to the reserved output slot when space is available.

## Freshness and spoilage

Spoiled food ingredients are rejected by the shared processing rules when they are no longer valid recipe inputs. Food outputs inherit freshness from their ingredients through the current recipe-output freshness system.

This is especially important for preparations that later become ingredients in another recipe, because food age can continue through the processing chain.

## Presentation

The Mortar and Pestle uses a bright, vanilla-style station interface and represents its held ingredients visually. The presentation is intended to make manual pestle work visible rather than reducing the station to an invisible progress counter.

Individual recipe visuals and final animation polish may still change during pre-alpha development.

## Recipe Book integration

Pinned recipes can identify the Mortar and Pestle as a required processing station and display the exact ingredient requirements for the selected recipe quantity.

Bulk quantities represent recipe executions. Each completed execution consumes only the requirements for that execution while valid inputs and output capacity remain available.

## Related pages

- [Cooking Overview](/cooking/overview/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Recipe Book](/recipe-book/overview/)
- [Mixing Bowl](/stations/mixing-bowl/)
