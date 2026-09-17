---
title: Compost & Fertility
description: Crafting Compost, restoring Cultivated Soil fertility, fertility growth effects, and compostable ingredients.
---

**Compost** restores fertility to [Cultivated Soil](/agriculture/cultivated-soil/). Fertility is separate from moisture: a field can be perfectly hydrated while still losing growth performance because its nutrient level has been depleted.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Compost is craftable, applies directly to [Cultivated Soil](/agriculture/cultivated-soil/), and raises the stored fertility level by 2 up to the maximum of 7.</p>
</div>

## Crafting Compost

The current shapeless recipe is:

- 1 Bone Meal
- 1 Dirt

This produces **2 Compost**.

## Applying Compost

Use Compost on [Cultivated Soil](/agriculture/cultivated-soil/) to increase fertility by **2 levels**.

Fertility is clamped at the maximum level of **7**, so a Compost item will not be consumed when the soil is already full.

Players in Creative mode do not consume the Compost item when applying it.

## Fertility and growth

Fertility contributes a growth multiplier from:

- **0.25×** at fertility 0
- **1.00×** at fertility 7

The factor scales linearly between those values.

Fertility also contributes **15%** of the crop's environmental target-vigor calculation.

## Fertility consumption

After a successful crop growth step, the crop may consume one fertility level. This chance belongs to the crop profile.

Current values include:

| Crop | Fertility-consumption chance |
|---|---:|
| Tomato | 45% |
| Onion | 30% |

## Composting compatibility

Several A & A Cooking ingredients can also be used with Minecraft's composter:

| Item | Composting chance |
|---|---:|
| Tomato | 65% |
| Onion | 65% |
| Orange | 65% |
| Garlic | 50% |
| Tomato Seeds | 30% |
| Onion Seeds | 30% |

These composter chances are separate from the direct-use Compost item described above.

## Related pages

- [Cultivated Soil](/agriculture/cultivated-soil/)
- [Crop Growth & Vigor](/agriculture/crop-growth/)
- [Current Crops](/agriculture/crops/)
