---
title: Crates & Cargo
description: Wooden Crates, inventory capacity, village cargo, merchant shipments, and the Spice Box.
---

A & A Cooking adds placeable **Crates** for supplies and village cargo. There are twelve wooden variants, matching the wood families used by the [Kitchen Counter and Cabinet](/storage/cabinets-counters/).

## Crate storage

Each Crate holds **9 inventory slots**. Use a Crate to open its storage screen. Items are dropped when the Crate is broken.

| Wood variants | Block IDs |
|---|---|
| Oak, Spruce, Birch, Jungle | `oak_crate`, `spruce_crate`, `birch_crate`, `jungle_crate` |
| Acacia, Dark Oak, Mangrove, Cherry | `acacia_crate`, `dark_oak_crate`, `mangrove_crate`, `cherry_crate` |
| Pale Oak, Bamboo, Crimson, Warped | `pale_oak_crate`, `bamboo_crate`, `crimson_crate`, `warped_crate` |

All listed IDs use the `aandacooking:` namespace.

## Cargo found in the world

Generated Crates can receive themed cargo. Cargo profiles include village pantry, market, produce, spice, bakery, kitchen, merchant, and shipwreck supplies. Their contents are generated from the associated profile and region when first accessed, then stored as inventory items.

Merchant shipments can include featured products and goods acquired through [Spice Trader](/village/spice-traders/) trades.

## Crafting a Crate

Using Oak as an example, the pattern is:

```text
SSS
P P
SSS
```

`S` is an Oak Slab and `P` is an Oak Plank. The recipe produces **2 Oak Crates**. Other wood variants use matching slabs and planks. See [Equipment & Crafting](/reference/equipment-crafting/) for other recipes.

## Spice Box

The `aandacooking:spice_box` is a consumable supply item. Using one produces **2-4 Salt**, plus **2-4 extra reward selections** drawn from Garlic Powder, Onion Powder, prepared herbs, Kelp Powder, and Savory Seasoning. There is also a **20% chance** of an herb seed. In Survival, the box is consumed.

The Spice Box and the placeable Spice Crate cargo blocks are different kinds of content.
