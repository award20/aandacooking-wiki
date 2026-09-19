---
title: Fermentation Crock
description: Four slot timed fermentation, output handling, freshness, connected storage, and Recipe Book integration.
---

The **Fermentation Crock** is A & A Cooking's timed fermentation station.

## Inventory

The Crock has:

- **4 input slots**
- **1 output slot**
- maximum **1 item per input slot**

The input restriction makes each fermentation execution explicit rather than allowing one input slot to hold an entire stack.

## Processing behavior

Fermentation progress:

- persists through save and load
- pauses when the output slot cannot accept the result
- resumes when the output becomes available
- preserves input freshness through the shared output inheritance system
- can continue through queued recipe executions when the required ingredients are available

## Current fermentation recipes

| Product | Inputs | Time |
|---|---|---:|
| Apple Vinegar | 2 Apple Juice, 1 Sugar | 5 minutes |
| Fermented Soybeans | 2 Roasted Soybean, 1 Salt | 6 minutes 40 seconds |
| Soy Sauce | 1 Soy Sauce Mash | 10 minutes |
| Pickled Carrots | 2 washed Carrots, 1 Salt Brine, 1 Glass Jar | 5 minutes |
| Pickled Beetroot | 2 washed Beetroot, 1 Salt Brine, 1 Glass Jar | 5 minutes |
| Pickled Onion | 2 washed Sliced Onion, 1 Salt Brine, 1 Glass Jar | 5 minutes |

See [Fermentation & Preservation](/recipes/fermentation-preservation/) for preservation multipliers and downstream recipe uses.

## Recipe Book integration

The Fermentation Crock supports:

- **Load Pinned**
- [Recipe Book](/recipe-book/overview/) prerequisite planning
- connected [Kitchen Storage](/storage/overview/)
- bulk recipe quantity processing

Manual ingredient admission and Recipe Book loading use the executable Fermentation Crock recipe set, so valid recipe intermediates are accepted consistently.

## Related pages

- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Recipe Book](/recipe-book/overview/)
- [Kitchen Storage](/storage/overview/)
- [Freshness & Spoilage](/storage/freshness-spoilage/)
- [Jar Sealer](/stations/jar-sealer/)
