---
title: Freshness & Spoilage
description: Shelf life, freshness labels, storage conditions, preservation multipliers, inheritance, and spoiled food behavior.
---

A & A Cooking tracks freshness on perishable foods. Freshness decreases as food ages, while cold storage and preservation methods reduce the effective aging rate.

## Base shelf life

| Food type | Base shelf life |
|---|---:|
| Fresh produce | 4 days |
| Fresh herbs | 2 days |
| Raw meat | 2 days |
| Raw fish | 1.5 days |
| Eggs | 5 days |
| Dairy | 3 days |
| Finished cooked dishes | 3 days |

Several preserved intermediates use the produce or cooked dish profile. Foods without a spoilage profile do not age through this system.

## Freshness labels

Item tooltips show the current freshness percentage and one of the following labels:

| Freshness | Label |
|---|---|
| 75-100% | Fresh |
| 50-74% | Good |
| 25-49% | Aging |
| Above 0% and below 25% | Near Spoiling |
| 0% | Spoiled |

The tooltip also shows the base shelf life and estimated ambient time remaining after preservation effects are considered.

## Storage rates

| Storage condition | Aging rate |
|---|---:|
| Ambient | 1.00x |
| Refrigerated | 0.20x |
| Frozen | 0.00x |

Refrigeration therefore slows aging to 20% of the ambient rate. Freezing pauses freshness aging while the food remains in frozen storage.

See [Cold Storage](/storage/cold-storage/) for Fridge and Freezer layouts.

## Preservation rates

Preservation methods multiply the food's aging rate:

| Method | Aging multiplier |
|---|---:|
| Fermented | 0.50x |
| Pickled | 0.25x |
| Salted | 0.50x |
| Dried | 0.20x |
| Smoked | 0.35x |
| Sugared | 0.40x |
| Sealed | 0.10x |

Current foods automatically use the preservation states that apply to them. Fermented foods, pickled vegetables, sugared preserves, and sealed jars are active player facing uses of this framework. Salted, dried, and smoked multipliers are present in the preservation framework for future content.

Multiple preservation methods multiply together. Storage then multiplies with the resulting preservation rate.

For example, a sealed sugared preserve ages at:

`0.40 x 0.10 = 0.04x`

If that same food is refrigerated:

`0.04 x 0.20 = 0.008x`

## Freshness inheritance

Cooking and processing do not automatically reset old ingredients to perfect freshness.

When a perishable recipe output is created, A & A Cooking averages the freshness of the perishable input items, weighted by input count, then converts that freshness into the shelf life of the output food.

This allows a fresh dish made from fresh ingredients to remain fresh while preventing nearly spoiled ingredients from becoming fully fresh simply because they were cooked.

## Spoiled food

A perishable item becomes spoiled when its age reaches its shelf life.

Spoiled food cannot be consumed. Attempting to use a spoiled food item displays the spoiled food message and blocks the eating or drinking action.

Spoiled ingredients are also rejected by cooking paths that require valid food inputs.

## Tooltips

Perishable items can show:

- freshness label and percentage
- base shelf life
- estimated ambient time remaining
- active preservation methods
- preserved aging rate

Fridge and Freezer block items also describe their storage condition in the tooltip.

## Related pages

- [Cold Storage](/storage/cold-storage/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Jar Sealer](/stations/jar-sealer/)
- [Cooking Overview](/cooking/overview/)
