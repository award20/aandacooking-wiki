---
title: Crop Growth & Vigor
description: Environmental growth probability, vigor, lifecycle condition, pollination, yield, and quality.
---

A & A Cooking crops use a layered growth model. Environmental conditions first determine crop vigor, then vigor participates in the probability that a crop advances to its next growth age.

<div class="page-summary">
    <p><strong>Status: Implemented core system</strong></p>
    <p>Growth uses season, moisture, light, fertility, pollination, and vigor. Vigor is stored from 0 to 7 and can push a crop through Healthy, Dying, and Dead conditions.</p>
</div>

## Growth probability

The current growth equation is:

`Pg = 0.20 × Sf × Mf × Lf × Ff × Pf × Vf`

where:

- `Sf` is the season factor
- `Mf` is the soil moisture factor
- `Lf` is the light factor
- `Ff` is the fertility factor
- `Pf` is the pollination factor
- `Vf` is the vigor factor

The final value is clamped between 0 and 1.

## Light

Each crop profile defines a minimum and optimal light level.

- below minimum light, the light growth factor is 0
- at or above optimal light, the factor is 1
- between the two, growth follows a smooth curve rather than a hard step

Current profiles use normal Minecraft light levels from 0 to 15.

## Vigor target

Environmental conditions also produce a target vigor:

`target vigor = 0.30 season + 0.35 moisture + 0.20 light + 0.15 fertility`

That normalized target is converted to the crop's 0–7 vigor level.

The actual vigor level moves only one step toward the target during each crop random tick. A temporary bad condition therefore stresses a crop progressively instead of instantly destroying it.

## Vigor growth factor

Vigor itself contributes another growth multiplier. The current range is:

- vigor 0 → **0.25×**
- vigor 7 → **1.00×**

Intermediate levels interpolate between those values.

## Healthy, Dying, and Dead

Crops store a separate lifecycle condition:

| Condition | Behavior |
|---|---|
| Healthy | Can grow normally |
| Dying | Cannot grow while in this condition; can recover if vigor rises above 0 |
| Dead | Terminal state; no further growth |

A Healthy crop whose next vigor reaches 0 becomes Dying. A Dying crop that remains at 0 on a later update becomes Dead. If vigor recovers above 0 first, the crop returns to Healthy.

## Semantic growth stages

Crop profiles map normal crop age into named stages such as:

- Germinating
- Sprout
- Leaf Growth
- Budding
- Flowering
- Fruit Set
- Fruit Growth
- Bulb Growth
- Ripe

The complete stage enum also supports future crop families such as roots, tubers, heads, grain filling, dormancy, overripeness, and dying stages.

## Pollination

Pollination is checked during **Flowering** and **Fruit Set**.

Nearby sources include:

- blocks in Minecraft's flower tag
- nearby A & A Cooking crops currently in their Flowering stage

The scan uses the crop profile's horizontal radius and a vertical range of ±2 blocks.

For beneficial pollination, the bonus uses diminishing returns as more sources are found. For required pollination, no valid source can reduce the pollination factor to zero.

## Harvest yield and quality

Vigor at harvest controls output.

Yield scales between the crop profile's minimum and maximum yield. Ingredient quality scales from **25 to 100**, rounded to **5-point steps**.

This harvested quality becomes part of the ingredient's state and remains relevant through washing, preparation, and cooking.

## Related pages

- [Agriculture Overview](/agriculture/overview/)
- [Current Crops](/agriculture/crops/)
- [Cultivated Soil](/agriculture/cultivated-soil/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
