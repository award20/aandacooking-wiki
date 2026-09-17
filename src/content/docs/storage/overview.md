---
title: Kitchen Storage
description: Connected kitchen storage, ingredient lookup, recipe loading, and the roles of counters, cabinets, fridges, and freezers.
---

Kitchen storage in A & A Cooking is more than a collection of inventories. Compatible kitchen furniture can form a **connected storage network** that [Recipe Book](/recipe-book/overview/) planning and supported stations can search for exact ingredients.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Cabinets, Counters, Fridges, Freezers, connected ingredient lookup, exact state matching, and selected recipe ingredient loading are currently implemented.</p>
</div>

## Storage blocks

| Storage | Capacity | Storage condition |
|---|---:|---|
| [Oak Kitchen Counter](/storage/cabinets-counters/) | 18 slots | Ambient |
| [Oak Kitchen Cabinet](/storage/cabinets-counters/) | 27 slots | Ambient |
| Small Stainless Steel Fridge | 18 slots | Refrigerated |
| Small Stainless Steel Freezer | 18 slots | Frozen |
| Paired cold storage | 36 slots | Determined by the physical half owning each slot |

Two vertically paired cold storage blocks open as one 36-slot appliance. See [Cold Storage](/storage/cold-storage/) for the supported layouts.

## Connected kitchen network

Compatible kitchen blocks can bridge storage to one another. A connected layout can include furniture and functional stations instead of requiring all inventories to touch directly.

For example:

`Cabinet → Counter → Sink → Fridge`

can participate in the same kitchen network.

The [Stovetop/Oven](/stations/stovetop-oven/) can also bridge nearby kitchen furniture, allowing stovetop cookware to reach ingredient storage through the appliance and adjacent counters or cabinets.

## What the network matches

Recipe storage access uses the actual item stack state. It can distinguish prepared forms such as:

- washed vs. unwashed
- whole vs. sliced
- sliced vs. diced
- minced vs. other preparation states
- other recipe relevant item components

This prevents a raw or incorrectly prepared ingredient from silently satisfying an exact recipe requirement.

## Pinned recipe loading

Supported stations can use the currently pinned [Recipe Book](/recipe-book/overview/) entry to calculate what is still missing from the station and pull only those requirements from connected storage.

The loading process is designed around several rules:

- preserve ingredients already inserted into the station
- pull only missing requirements
- match exact preparation state
- avoid consuming unrelated ingredients
- use the explicitly pinned recipe rather than guessing
- fail without partially consuming the kitchen's ingredients when the full requirement cannot be supplied

Oven loading can also source required [bakeware](/cooking/oven-bakeware/).

## Freshness and storage conditions

Food freshness continues to age while stored at ambient temperature. The current storage multipliers are:

| Condition | Aging rate |
|---|---:|
| Ambient storage | 1.00× |
| Refrigerator | 0.20× |
| Freezer | 0.00× |

A refrigerator therefore slows normal freshness loss to one fifth of the ambient rate, while freezer storage stops freshness aging while the food remains frozen.

Mixed fridge/freezer appliances keep the storage condition of the physical half that owns each slot rather than applying one temperature to the entire 36-slot combined interface.

## Related pages

- [Cabinets & Counters](/storage/cabinets-counters/)
- [Cold Storage](/storage/cold-storage/)
- [Recipe Book](/recipe-book/overview/)
- [Stovetop/Oven](/stations/stovetop-oven/)
