---
title: Blender
description: Blender processing modes, recipe matching, stacked inputs, and Recipe Book integration.
---

The **Blender** is a dedicated processing station for recipes that transform ingredients without using stovetop or oven heat.

<div class="page-summary">
    <p><strong>Status: Implemented, with pre-alpha behavior still subject to playtesting</strong></p>
    <p>The station, its processing modes, [Recipe Book](/recipe-book/overview/) integration, and stacked or surplus ingredient processing are currently implemented.</p>
</div>

## Processing modes

The current Blender recipe system supports three modes:

| Mode | Processing time |
|---|---:|
| Blend | 100 game ticks |
| Pulse | 40 game ticks |
| Chop | 60 game ticks |

A recipe is matched against both its ingredient requirements and its required processing mode. Changing the mode can therefore change which recipe is valid for the same set of inputs.

## Recipe matching

Blender recipes use the shared processing-station recipe matcher. Ingredient requirements can check the exact item, quantity, and preparation state required by the recipe.

The current batch-count behavior allows **surplus copies of ingredients already required by the recipe** while still rejecting unrelated extra ingredients.

For example, if a recipe requires three of the same seed per execution, a larger compatible stack can remain in the station without making the recipe invalid.

## Stacked ingredient processing

When a compatible input stack contains enough ingredients for multiple executions, the Blender processes the recipe sequentially rather than treating the entire stack as one oversized recipe.

For a recipe requiring three seeds per execution:

| Starting input | Complete executions | Remainder |
|---|---:|---:|
| 63 seeds | 21 | 0 |
| 64 seeds | 21 | 1 seed |
| 2 seeds | 0 | 2 seeds |

Each execution consumes only one recipe's requirements. Repeated processing continues while another valid execution can be made and the output can be accepted.

This keeps stacked manual processing compatible with the same execution model used by [Recipe Book](/recipe-book/overview/) bulk quantities.

## Unrelated extra ingredients

Surplus quantity is only accepted for ingredients that belong to the matched recipe. An unrelated extra ingredient or incompatible ingredient state is not treated as harmless overflow.

This preserves exact recipe identity while allowing normal Minecraft stacks to be used naturally.

## Recipe Book integration

The Blender is part of the [Recipe Book](/recipe-book/overview/) preparation-plan and station-selection systems. A pinned Blender recipe can expose its exact ingredient requirements through the pinned HUD, and the selected recipe can be used by the station loading/autofill workflow.

[Recipe Book](/recipe-book/overview/) quantities represent **recipe executions**, not the raw number of output items. When a bulk quantity is active, the queue stops after the requested number of executions even if additional compatible ingredients remain available.

## Verification notes

The wiki documents the Blender processing model and stacked ingredient behavior. Exact screen layout, animation timing, sound presentation, and individual Blender recipes will be expanded as those parts of the station receive dedicated documentation.

## Related pages

- [Cooking Overview](/cooking/overview/)
- [Recipe Book](/recipe-book/overview/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
