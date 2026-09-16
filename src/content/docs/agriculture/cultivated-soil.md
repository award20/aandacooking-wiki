---
title: Cultivated Soil
description: Soil saturation, hydration targets, flooding, fertility, and crop-support behavior.
---

**Cultivated Soil** is A & A Cooking's expanded farming soil. It stores both a moisture level and a fertility level, allowing crops to respond to drought, normal hydration, oversaturation, flooding, and nutrient depletion.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>Cultivated Soil stores saturation from 0 to 14 and fertility from 0 to 7. Saturation is exposed to crop logic as a normalized 0.0–2.0 value.</p>
</div>

## Soil saturation

The stored saturation level is converted with:

`soil saturation = stored level / 7`

That produces the following useful reference points:

| Stored level | Saturation | Meaning |
|---:|---:|---|
| 0 | 0.0 | Dry |
| 7 | 1.0 | Saturated / normally hydrated |
| ~10–11 | ~1.5 | Oversaturated |
| 14 | 2.0 | Flooded |

Different crops choose their own preferred minimum moisture, maximum ideal moisture, and flood penalty.

## Hydration sources

Cultivated Soil checks water within a **4-block horizontal radius**, as well as rain, water directly above the block, and water directly adjacent on its four horizontal sides.

The current target-level rules are:

| Condition | Target behavior |
|---|---|
| No nearby water and no rain | dries toward level 0 |
| Nearby water or rain | starts from level 7 |
| Rain | adds 2 levels |
| Additional directly adjacent water after the first | adds 2 levels each |
| Water directly above | targets level 14 immediately |

The final target is clamped to the 0–14 range.

On each soil random tick, the stored level moves only **one step** toward that target. Moisture therefore changes gradually rather than instantly.

## Crop moisture response

A crop receives full moisture growth inside its ideal band. Below the crop's minimum requirement, growth falls smoothly toward zero as the soil dries.

Above the crop's maximum ideal moisture, flood stress increases smoothly according to that crop's flood penalty. A crop that tolerates wet soil can therefore behave differently from a crop that is strongly penalized by flooding.

## Fertility

Cultivated Soil also stores fertility from **0 to 7**.

Fertility contributes a growth factor from **0.25× at empty fertility** to **1.00× at full fertility**. Empty soil therefore reduces growth heavily, but does not by itself make the fertility term zero.

Crops can consume one fertility level after a successful growth step. The chance is defined by the crop profile.

Use [Compost](/agriculture/compost-fertility/) to restore fertility.

## Vanilla farmland compatibility

The agriculture calculations can also read vanilla farmland moisture. Vanilla moisture is normalized into a 0.0–1.0 saturation value.

Cultivated Soil is still the system that provides the expanded 0.0–2.0 moisture range and stored fertility property.

## Related pages

- [Agriculture Overview](/agriculture/overview/)
- [Crop Growth & Vigor](/agriculture/crop-growth/)
- [Current Crops](/agriculture/crops/)
- [Compost & Fertility](/agriculture/compost-fertility/)
