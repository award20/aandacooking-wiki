---
title: Saucepan
description: Small-volume stovetop cooking, liquids, evaporation, and reduction in the Iron Saucepan.
---

The **Iron Saucepan** is a smaller stovetop vessel focused on liquid cooking, reductions, and recipes that do not need the Stockpot's larger-volume workflow.

<div class="page-summary">
    <p><strong>Status: Implemented core system</strong></p>
    <p>The Saucepan currently supports three solid ingredient slots, up to 1500 mB of water, medium thermal response, evaporation, persistent reduction tracking, shared heated-recipe execution, and pinned-recipe integration.</p>
</div>

## Capacity

The current Saucepan provides:

| Capacity | Amount |
|---|---:|
| Solid ingredients | 3 slots |
| Water | 1500 mB |

Water can be loaded through Water Bucket handling. The liquid state is tracked independently from the three solid ingredient slots.

## Heat behavior

The Saucepan uses a **medium thermal response**. It follows the [Stovetop/Oven](/stations/stovetop-oven/) burner target through the shared cookware thermal simulation instead of changing temperature instantly.

Saucepan recipes can define a valid temperature range. A heat-based recipe locks only after its technique conditions are valid; once started, leaving those conditions pauses progress rather than immediately selecting a different recipe.

## Evaporation

Water begins evaporating once the Saucepan is heated above approximately **90 °C**.

The development model is intentionally temperature-sensitive. Reference values from the current system are approximately:

| Temperature | Evaporation rate |
|---|---:|
| 95 °C | 15 mB/s |
| 100 °C | 30 mB/s |

The exact rate is simulated rather than treated as a single fixed timer.

## Reduction

The Saucepan tracks a persistent **reduction fraction** as liquid evaporates. Recipes can use both remaining-water bounds and reduction bounds as real technique requirements.

A Saucepan recipe can therefore care about more than whether the correct ingredients are present. It can require that the contents have actually reduced far enough before valid completion.

This is intended for systems such as:

- sauces
- glazes
- syrups
- concentrated broths
- other liquid reductions

## Recipe requirements

The shared Saucepan recipe framework supports:

- exact ingredient requirements
- prepared-state matching
- temperature range
- cooking duration
- water range
- reduction range
- optional consumption of remaining liquid
- finished-dish quality propagation

Extra ingredients are rejected when they do not belong to the matched recipe.

## Water and the Recipe Book

Saucepan recipes expose minimum and maximum water requirements to the shared preparation-plan system.

When a pinned recipe needs water, the current availability pass converts Water Buckets into available millibuckets:

```text
1 Water Bucket = 1000 mB
```

This lets the pinned HUD show whether the selected recipe has enough liquid available before loading or cooking.

## Connected kitchen storage

The Saucepan can participate in the kitchen-storage network through its Stovetop connection and adjacent kitchen furniture.

The recipe-storage layer can account for ingredients already inserted into the Saucepan and determine only the remaining requirements for the explicitly selected recipe.

## Recipe catalog

The Saucepan framework is designed for a growing reduction and small-volume recipe catalog. Because the content phase is still expanding quickly, individual recipe pages will be the authoritative place for exact ingredient, water, reduction, and temperature requirements.

## Related pages

- [Cookware Overview](/cooking/cookware/)
- [Stovetop/Oven](/stations/stovetop-oven/)
- [Stockpot](/cooking/stockpot/)
- [Recipe Book](/recipe-book/overview/)
