---
title: Cooking Overview
description: How A & A Cooking stations match ingredients, modes, heat, and cookware.
---

A & A Cooking recipes are tied to a station or processing system. A recipe can require an exact item, a washed state, a cut style, a temperature range, a processing mode, a duration, cookware, or a station-specific interaction.

## Recipe matching

Ingredient requirements match the item itself first. A requirement can then check whether the ingredient is washed and whether its cut style is the required style. A whole ingredient is not treated as a sliced or diced ingredient.

The recipe matcher supports two count rules:

| Rule | Behavior |
|---|---|
| Exact count | The input must contain the required total and no remaining items. |
| Batch count | The input must contain at least the required total. Remaining items must still match one of the recipe requirements. |

This means an unrelated extra ingredient can prevent a batch recipe from matching. A valid surplus can be processed as repeated batches when the station supports sequential processing. The station page or recipe page will identify which controls and count behavior apply.

## Station families

| Family | Stations | Current behavior |
|---|---|---|
| Preparation | Oak Kitchen Sink, Oak Cutting Board | Washing, cutting, peeling, shredding, and cracking paths are handled through block interactions. |
| Processing | Blender | Blend, Pulse, and Chop modes. Blend, Pulse, and Chop use 100, 40, and 60 game ticks per cycle respectively. |
| Processing | Mixing Bowl | Mix, Whisk, and Fold modes. These use 8, 12, and 6 actions per cycle respectively. |
| Processing | Mortar and Pestle | Crush and Grind modes. These use 5 and 10 actions per cycle respectively. |
| Fermentation | Fermentation Crock | Matches a fermentation recipe and processes it over a recipe-defined duration. |
| Heated cookware | Saucepan, Stockpot, Skillet, Wok | Uses station-specific ingredient capacity and temperature behavior. Wok interaction includes tossing ingredients. The Stockpot can serve completed dishes with the supported serving containers. |
| Oven | Stovetop/Oven | Provides stovetop and oven surfaces, temperature controls, oven racks, and cookware slots. |
| Planning | Recipe Book | Provides discovery, recipe details, prerequisites, pins, and recipe quantity planning. |

## Heat and temperature

The Stovetop/Oven currently exposes these temperature presets:

| Preset | Temperature |
|---|---:|
| Low | 95 °C |
| Low Med | 120 °C |
| Med | 150 °C |
| Med High | 180 °C |
| High | 230 °C |

Heated recipes can define their own acceptable temperature range. The Stovetop/Oven and heated cookware pages will document the interaction between presets, heat sources, cookware, liquids, and recipe ranges as those rules are verified in-game.

## Freshness and spoilage

Current food-processing and cooking recipes use freshness as part of the shared food pipeline. Spoiled ingredients are rejected when they are no longer valid inputs, and completed food can inherit freshness from the ingredients used to make it instead of automatically becoming completely fresh again.

This matters most for multi-step recipes, where an ingredient can move through preparation, processing, and heating without losing its accumulated food age.

## Recipe pages

Each recipe page should list the station, item quantities, preparation states, temperature, duration, mode, output, and any special control. Central mechanics belong on this page so individual recipes can link to them without repeating the full explanation.

See [Cookware Overview](/cooking/cookware/) for the shared cookware model and [First Steps](/getting-started/first-steps/) for the basic workflow, [Ingredient Preparation](/getting-started/ingredient-preparation/) for preparation paths, and the dedicated [Kitchen Sink](/stations/kitchen-sink/), [Cutting Board](/stations/cutting-board/), [Blender](/stations/blender/), [Mixing Bowl](/stations/mixing-bowl/), [Mortar and Pestle](/stations/mortar-and-pestle/), [Stovetop/Oven](/stations/stovetop-oven/), and [Fermentation Crock](/stations/fermentation-crock/) guides for station-specific behavior. See [Recipe Catalog](/recipes/overview/) for the growing content reference.
