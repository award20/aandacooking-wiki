---
title: Cabinets & Counters
description: Kitchen Cabinet and Counter capacities, wood variants, connected storage behavior, and station access.
---

**Kitchen Cabinets** and **Kitchen Counters** provide the main ambient ingredient storage for a connected A & A Cooking kitchen. Alpha.2 includes twelve material variants of each block.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>All twelve Cabinet and Counter variants share the same inventories, storage screens, freshness behavior, and connected kitchen network support.</p>
</div>

## Capacity

| Block family | Capacity |
|---|---:|
| Kitchen Counter | 18 slots |
| Kitchen Cabinet | 27 slots |

All variants store normal item stacks and expose their contents to the kitchen storage network when connected.

## Material variants

Counters and Cabinets are available in:

- Oak
- Spruce
- Birch
- Jungle
- Acacia
- Dark Oak
- Mangrove
- Cherry
- Pale Oak
- Bamboo
- Crimson
- Warped

See [Wood Kitchen Variants](/reference/wood-kitchen-variants/) for every block ID and the matching crafting layouts.

## Ambient storage

Cabinets and Counters use the normal **ambient** freshness rate. They do not provide refrigeration or freezing by themselves.

For food that needs longer term preservation, use [Cold Storage](/storage/cold-storage/).

## Network connectivity

Counters and Cabinets can connect to one another and to other kitchen compatible blocks. Different material variants can be mixed freely in the same network.

The network can traverse functional blocks such as the [Kitchen Sink](/stations/kitchen-sink/) instead of stopping whenever storage furniture is separated by a station.

A simple connected run can look like:

`Cabinet → Counter → Sink → Counter → Fridge`

The network treats the connected inventories as ingredient sources while keeping each physical block's inventory separate.

## Countertop stations

Countertop processing stations can enter the kitchen network through the Counter beneath them. This allows supported stations to source ingredients without requiring every station to contain a separate copy of the player's pantry.

## Stovetop cookware

[Skillet](/cooking/skillet/), [Wok](/cooking/wok/), and [Saucepan](/cooking/saucepan/) recipe loading can reach kitchen storage through the [Stovetop/Oven](/stations/stovetop-oven/) and adjacent compatible kitchen furniture.

See the individual cookware guides for station behavior:

- [Skillet](/cooking/skillet/)
- [Wok](/cooking/wok/)
- [Saucepan](/cooking/saucepan/)

## Recipe Book integration

The pinned [Recipe Book](/recipe-book/overview/) system can count exact matching items stored in Cabinets and Counters. Supported station loading can then remove only the missing requirements for the explicitly selected recipe.

The operation is atomic at the recipe storage layer: if the complete missing requirement set cannot be supplied, the kitchen is not supposed to lose a partial set of ingredients.

## Related pages

- [Wood Kitchen Variants](/reference/wood-kitchen-variants/)
- [Kitchen Storage](/storage/overview/)
- [Cold Storage](/storage/cold-storage/)
- [Kitchen Sink](/stations/kitchen-sink/)
- [Recipe Book](/recipe-book/overview/)
