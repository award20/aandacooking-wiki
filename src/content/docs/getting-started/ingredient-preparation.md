---
title: Ingredient Preparation
description: Washing and preparing ingredients with the sink and cutting board.
---

Some recipes require an ingredient to be washed or to use a specific preparation state. The current ingredient state stores quality, a washed flag, and a cut style. **Whole** is the default cut style, not a cutting action.

Ingredient profiles decide whether an item can be washed and which cut styles it supports. A recipe can also require an exact item and an exact cut style, so a prepared item is not automatically interchangeable with its unprepared form.

## Washing

Hold an ingredient and use it on an **Oak [Kitchen Sink](/stations/kitchen-sink/)**. See the dedicated [Kitchen Sink](/stations/kitchen-sink/) guide for the full station behavior. If the item has a washable profile and is not already washed, the held stack receives its washed state without consuming the item.

The sink also exchanges a bucket for a water bucket and a water bucket for a bucket. Items that do not have a washable profile pass through to the normal block action.

## Using the cutting board

The Oak [Cutting Board](/stations/cutting-board/) holds one item at a time. See the dedicated [Cutting Board](/stations/cutting-board/) guide for the full interaction flow.

1. Wash the ingredient first when its profile requires washing.
2. Use the washed ingredient on an empty board. One item is placed on the board and one item is removed from the held stack, except in Creative mode.
3. With the ingredient on the board, sneak-use a kitchen knife to cycle through the cut styles registered for that ingredient.
4. Use the kitchen knife normally to advance the selected preparation. Each knife use advances one required action and damages the knife by one point.
5. When the required actions are complete, the board replaces the input with the prepared item.

Use an empty hand to retrieve the held item. Sneaking with an empty hand also retrieves it. If the ingredient has a registered peeling preparation, normal empty-hand use peels it instead of retrieving it.

## Registered preparation paths

The following preparation paths are currently available. The values in the last column are required interactions, not game ticks.

| Input | Input ID | Preparation | Output | Output ID | Required interactions |
|---|---|---|---|---|---:|
| Tomato | `aandacooking:tomato` | Slice | Sliced Tomato | `aandacooking:tomato_sliced` | 2 knife uses |
| Tomato | `aandacooking:tomato` | Dice | Diced Tomato | `aandacooking:tomato_diced` | 4 knife uses |
| Sliced Tomato | `aandacooking:tomato_sliced` | Dice | Diced Tomato | `aandacooking:tomato_diced` | 2 knife uses |
| Onion | `aandacooking:onion` | Slice | Sliced Onion | `aandacooking:onion_sliced` | 2 knife uses |
| Onion | `aandacooking:onion` | Dice | Diced Onion | `aandacooking:onion_diced` | 4 knife uses |
| Onion | `aandacooking:onion` | Mince | Minced Onion | `aandacooking:onion_minced` | 6 knife uses |
| Onion | `aandacooking:onion` | Julienne | Julienned Onion | `aandacooking:onion_julienned` | 4 knife uses |
| Sliced Onion | `aandacooking:onion_sliced` | Dice | Diced Onion | `aandacooking:onion_diced` | 2 knife uses |
| Sliced Onion | `aandacooking:onion_sliced` | Mince | Minced Onion | `aandacooking:onion_minced` | 4 knife uses |
| Sliced Onion | `aandacooking:onion_sliced` | Julienne | Julienned Onion | `aandacooking:onion_julienned` | 2 knife uses |
| Diced Onion | `aandacooking:onion_diced` | Mince | Minced Onion | `aandacooking:onion_minced` | 2 knife uses |
| Garlic | `aandacooking:garlic` | Peel | Peeled Garlic | `aandacooking:garlic_peeled` | 1 empty-hand use |
| Peeled Garlic | `aandacooking:garlic_peeled` | Slice | Sliced Garlic | `aandacooking:garlic_sliced` | 2 knife uses |
| Peeled Garlic | `aandacooking:garlic_peeled` | Mince | Minced Garlic | `aandacooking:garlic_minced` | 4 knife uses |
| Sliced Garlic | `aandacooking:garlic_sliced` | Mince | Minced Garlic | `aandacooking:garlic_minced` | 2 knife uses |
| A & A Cooking Egg | `aandacooking:egg` | Crack | Cracked Egg | `aandacooking:egg_cracked` | 1 cutting-board-edge use |
| Fresh Cheese | `aandacooking:milk_cheese_fresh` | Shred | Shredded Cheese | `aandacooking:milk_cheese_shredded` | 4 knife uses |

Additional preparation actions can be used by other stations, but only the paths listed above are [Cutting Board](/stations/cutting-board/) preparations. Processing recipes such as grinding or mixing are documented with their station rather than treated as [Cutting Board](/stations/cutting-board/) actions.

## Preparation and recipe matching

When a recipe requires a prepared ingredient, it can check both the item and its ingredient state. For example, a recipe can require a washed item with the `DICED` cut style. See [Cooking Overview](/cooking/overview/) for the matching rules used by cooking and processing stations.
