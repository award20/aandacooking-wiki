---
title: Cold Storage
description: Small Fridge and Freezer inventories, 1x2 multiblocks, freshness rates, and mixed refrigerator layouts.
---

A & A Cooking uses modular **Small Stainless Steel Fridge** and **Small Stainless Steel Freezer** blocks. Each block works independently, while compatible vertical pairs form a combined 1×2 cold storage appliance.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Standalone 18 slot storage, 36 slot vertical pairing, mixed Fridge/Freezer layouts, per half freshness behavior, and connected kitchen access are currently implemented.</p>
</div>

## Standalone blocks

| Block | Capacity | Freshness aging |
|---|---:|---:|
| Small Stainless Steel Fridge | 18 slots | 0.20× ambient |
| Small Stainless Steel Freezer | 18 slots | 0.00× ambient |

Refrigerated food therefore ages at one fifth of the normal ambient rate. Food stored in a Freezer does not lose freshness while it remains in frozen storage.

## Vertical pairing

Any two vertically adjacent cold storage halves with compatible facing can form one 36-slot appliance.

### Large Stainless Steel Fridge

```text
[ Small Fridge ]
[ Small Fridge ]
```

Two Fridge halves open as a **Large Stainless Steel Fridge** with 36 combined slots.

### Large Stainless Steel Freezer

```text
[ Small Freezer ]
[ Small Freezer ]
```

Two Freezer halves open as a **Large Stainless Steel Freezer** with 36 combined slots.

### Freezer on bottom

```text
[ Small Fridge  ]
[ Small Freezer ]
```

This creates a combined Stainless Steel Fridge with its Freezer section on the bottom.

### Freezer on top

```text
[ Small Freezer ]
[ Small Fridge  ]
```

This creates the opposite mixed layout, with the Freezer section on top.

## Per half storage behavior

A combined 36-slot interface does not erase the identity of the two physical blocks. Each half still owns its own 18 inventory slots internally.

That matters for both breaking and freshness:

- Fridge owned slots use the refrigerated aging rate
- Freezer owned slots use the frozen aging rate
- mixed appliances can therefore contain refrigerated and frozen food at the same time

## Placement and facing

When a second cold storage block is placed directly above or below a compatible half, the newly placed block copies the existing half's horizontal facing. This keeps paired doors aligned regardless of whether the pair is Fridge/Fridge, Freezer/Freezer, or mixed.

Pairing is derived from the blocks that are physically present rather than saved as a permanent master/slave relationship.

## Breaking a pair

Breaking one half drops only the contents owned by that half. The remaining 18-slot block immediately returns to being a standalone Small Fridge or Small Freezer.

This avoids duplicating or destroying the surviving half's inventory when a combined appliance is separated.

## Longer vertical stacks

Vertical runs are paired **bottom up**. Four matching Fridge blocks therefore become two separate 36-slot Large Fridges rather than one 72-slot appliance.

The same pairing rule applies to Freezers and compatible mixed runs.

## Connected kitchen access

Standalone and paired cold storage can participate in the [Kitchen Storage](/storage/overview/) network. Recipe availability checks and supported station loading can search their inventories alongside Cabinets, Counters, and the player's inventory.

Exact prepared state matching still applies to items in cold storage.

## Related pages

- [Kitchen Storage](/storage/overview/)
- [Cabinets & Counters](/storage/cabinets-counters/)
- [Recipe Book](/recipe-book/overview/)
