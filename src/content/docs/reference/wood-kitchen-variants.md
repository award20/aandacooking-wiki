---
title: Wood Kitchen Variants
description: Material variants, block IDs, crafting layouts, and shared behavior for Counters, Cabinets, Kitchen Sinks, and Cutting Boards.
---

A & A Cooking alpha.2 expands the wooden kitchen set so the main furniture and preparation blocks can match a much wider range of builds.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Kitchen Counters, Kitchen Cabinets, Kitchen Sinks, and Cutting Boards are available in all twelve material sets listed below.</p>
</div>

## Supported material sets

The same four kitchen blocks are available in:

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

The material changes the block appearance and the matching planks or slabs used to craft it. The functional behavior of a block family is shared across all variants.

## Kitchen Counters

All Kitchen Counters provide **18 inventory slots**, use ambient food storage, and participate in the connected [Kitchen Storage](/storage/overview/) network.

The shaped recipe is:

```text
S S S
P   P
P P P
```

`S` is the matching slab and `P` is the matching planks.

| Variant | Block ID |
|---|---|
| Oak Kitchen Counter | `aandacooking:oak_kitchen_counter` |
| Spruce Kitchen Counter | `aandacooking:spruce_kitchen_counter` |
| Birch Kitchen Counter | `aandacooking:birch_kitchen_counter` |
| Jungle Kitchen Counter | `aandacooking:jungle_kitchen_counter` |
| Acacia Kitchen Counter | `aandacooking:acacia_kitchen_counter` |
| Dark Oak Kitchen Counter | `aandacooking:dark_oak_kitchen_counter` |
| Mangrove Kitchen Counter | `aandacooking:mangrove_kitchen_counter` |
| Cherry Kitchen Counter | `aandacooking:cherry_kitchen_counter` |
| Pale Oak Kitchen Counter | `aandacooking:pale_oak_kitchen_counter` |
| Bamboo Kitchen Counter | `aandacooking:bamboo_kitchen_counter` |
| Crimson Kitchen Counter | `aandacooking:crimson_kitchen_counter` |
| Warped Kitchen Counter | `aandacooking:warped_kitchen_counter` |

See [Cabinets & Counters](/storage/cabinets-counters/) for storage behavior and network integration.

## Kitchen Cabinets

All Kitchen Cabinets provide **27 inventory slots**, use ambient food storage, and participate in the connected [Kitchen Storage](/storage/overview/) network.

The shaped recipe is:

```text
S S S
P C P
P P P
```

`S` is the matching slab, `P` is the matching planks, and `C` is a Chest.

| Variant | Block ID |
|---|---|
| Oak Kitchen Cabinet | `aandacooking:oak_kitchen_cabinet` |
| Spruce Kitchen Cabinet | `aandacooking:spruce_kitchen_cabinet` |
| Birch Kitchen Cabinet | `aandacooking:birch_kitchen_cabinet` |
| Jungle Kitchen Cabinet | `aandacooking:jungle_kitchen_cabinet` |
| Acacia Kitchen Cabinet | `aandacooking:acacia_kitchen_cabinet` |
| Dark Oak Kitchen Cabinet | `aandacooking:dark_oak_kitchen_cabinet` |
| Mangrove Kitchen Cabinet | `aandacooking:mangrove_kitchen_cabinet` |
| Cherry Kitchen Cabinet | `aandacooking:cherry_kitchen_cabinet` |
| Pale Oak Kitchen Cabinet | `aandacooking:pale_oak_kitchen_cabinet` |
| Bamboo Kitchen Cabinet | `aandacooking:bamboo_kitchen_cabinet` |
| Crimson Kitchen Cabinet | `aandacooking:crimson_kitchen_cabinet` |
| Warped Kitchen Cabinet | `aandacooking:warped_kitchen_cabinet` |

See [Cabinets & Counters](/storage/cabinets-counters/) for storage behavior and network integration.

## Kitchen Sinks

Every Kitchen Sink supports the same ingredient washing, bucket exchange, and kitchen network bridge behavior.

The shaped recipe is:

```text
S S S
P C P
P P P
```

`S` is the matching slab, `P` is the matching planks, and `C` is a Cauldron.

| Variant | Block ID |
|---|---|
| Oak Kitchen Sink | `aandacooking:oak_kitchen_sink` |
| Spruce Kitchen Sink | `aandacooking:spruce_kitchen_sink` |
| Birch Kitchen Sink | `aandacooking:birch_kitchen_sink` |
| Jungle Kitchen Sink | `aandacooking:jungle_kitchen_sink` |
| Acacia Kitchen Sink | `aandacooking:acacia_kitchen_sink` |
| Dark Oak Kitchen Sink | `aandacooking:dark_oak_kitchen_sink` |
| Mangrove Kitchen Sink | `aandacooking:mangrove_kitchen_sink` |
| Cherry Kitchen Sink | `aandacooking:cherry_kitchen_sink` |
| Pale Oak Kitchen Sink | `aandacooking:pale_oak_kitchen_sink` |
| Bamboo Kitchen Sink | `aandacooking:bamboo_kitchen_sink` |
| Crimson Kitchen Sink | `aandacooking:crimson_kitchen_sink` |
| Warped Kitchen Sink | `aandacooking:warped_kitchen_sink` |

See [Kitchen Sink](/stations/kitchen-sink/) for the full station guide.

## Cutting Boards

Every Cutting Board holds one ingredient and supports the same registered cutting, peeling, shredding, cracking, and other preparation paths.

The shaped recipe uses three matching slabs across one row:

```text
S S S
```

| Variant | Block ID |
|---|---|
| Oak Cutting Board | `aandacooking:oak_cutting_board` |
| Spruce Cutting Board | `aandacooking:spruce_cutting_board` |
| Birch Cutting Board | `aandacooking:birch_cutting_board` |
| Jungle Cutting Board | `aandacooking:jungle_cutting_board` |
| Acacia Cutting Board | `aandacooking:acacia_cutting_board` |
| Dark Oak Cutting Board | `aandacooking:dark_oak_cutting_board` |
| Mangrove Cutting Board | `aandacooking:mangrove_cutting_board` |
| Cherry Cutting Board | `aandacooking:cherry_cutting_board` |
| Pale Oak Cutting Board | `aandacooking:pale_oak_cutting_board` |
| Bamboo Cutting Board | `aandacooking:bamboo_cutting_board` |
| Crimson Cutting Board | `aandacooking:crimson_cutting_board` |
| Warped Cutting Board | `aandacooking:warped_cutting_board` |

See [Cutting Board](/stations/cutting-board/) for preparation behavior and knife interactions.

## Mixing variants in one kitchen

The different appearances are cosmetic within each block family. A Spruce Cabinet can participate in the same kitchen network as an Oak Counter, a Warped Sink, a Cherry Counter, or any other compatible kitchen block.

This means a kitchen does not need to use one material throughout to keep connected storage and Recipe Book integration working.

## Related pages

- [Cabinets & Counters](/storage/cabinets-counters/)
- [Kitchen Sink](/stations/kitchen-sink/)
- [Cutting Board](/stations/cutting-board/)
- [Kitchen Storage](/storage/overview/)
- [Equipment & Crafting](/reference/equipment-crafting/)
- [Complete Content Index](/reference/content-index/)
