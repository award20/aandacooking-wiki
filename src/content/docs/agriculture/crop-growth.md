---
title: Crop Growth & Vigor
description: Growth probability, climate response, vigor, storm damage, pollination, yield, and quality.
---

A & A Cooking crops use a layered environmental model. Growth depends on the current season, soil, light, climate, weather, pollination, and crop vigor.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>All nine current crops use the same environmental framework with crop specific ranges for temperature, humidity, wind, moisture, seasons, yield, and pollination.</p>
</div>

## Growth probability

The current growth equation is:

`Pg = 0.20 × Sf × Mf × Lf × Ff × Tf × Hf × Wf × Stf × SoTf × Pf × Vf`

where:

- `Sf` = season factor
- `Mf` = soil moisture factor
- `Lf` = light factor
- `Ff` = fertility factor
- `Tf` = temperature factor
- `Hf` = humidity factor
- `Wf` = wind factor
- `Stf` = storm factor
- `SoTf` = soil thermal factor
- `Pf` = pollination factor
- `Vf` = vigor factor

The final chance is clamped from 0 to 1.

## Temperature and humidity

Each crop defines:

- an absolute minimum
- an optimal minimum
- an optimal maximum
- an absolute maximum

The factor is 1 inside the optimal range, falls smoothly outside that range, and reaches 0 at the absolute limits.

See [Current Crops](/agriculture/crops/) for every crop's values.

## Wind and storms

Crops exposed to the sky compare local wind speed against their comfortable and damaging wind thresholds. Wind at or below the comfortable value has no growth penalty. At the damaging value, the wind growth factor reaches the system minimum of **0.15×**.

Storm severity also applies a growth factor:

| Severity | Growth factor |
|---|---:|
| None | 1.00× |
| Rumbling | 0.95× |
| Thunderstorm | 0.75× |
| Severe | 0.40× |
| Extreme | 0.10× |

Crops that are not exposed to the sky ignore wind and storm penalties.

## Storm damage

Storms can directly damage exposed crops during crop updates. Base damage chances before wind stress and growth stage vulnerability are:

| Severity | Base damage chance |
|---|---:|
| Rumbling | 1% |
| Thunderstorm | 5% |
| Severe | 20% |
| Extreme | 45% |

Wind can add up to 25 percentage points before stage vulnerability is applied. Final damage chance is capped at 85%.

Damage reduces vigor. Extreme storms remove 2 vigor; Severe storms have a 25% chance to remove 2 instead of 1. Some later growth stages can also regress by one age step, with higher regression chances in stronger storms.

## Soil temperature

Crop roots use a soil thermal state derived from surface temperature, a slower thermal base, and snow insulation.

| Soil state | Temperature | Growth factor |
|---|---:|---:|
| Frozen | ≤ -0.5 °C | 0.00× |
| Thawing | -0.5 to 0.5 °C | 0.40× |
| Thawed | ≥ 0.5 °C | 1.00× |

Snow can insulate soil toward 0 °C while meltwater can contribute to soil moisture during thaw conditions.

## Vigor target

Environmental factors also produce a target vigor from 0-7. The current weighting is:

| Factor | Weight |
|---|---:|
| Temperature | 20% |
| Moisture | 18% |
| Season | 14% |
| Soil thermal state | 11% |
| Light | 8% |
| Fertility | 8% |
| Humidity | 8% |
| Wind | 7% |
| Storm | 6% |

Actual vigor moves only one level toward the target on each crop update.

Vigor contributes a growth factor from **0.25× at vigor 0** to **1.00× at vigor 7**.

## Healthy, Dying, and Dead

| Condition | Behavior |
|---|---|
| Healthy | Can grow normally |
| Dying | Cannot grow; can recover if vigor rises above 0 |
| Dead | Terminal state |

A Healthy crop whose vigor reaches 0 becomes Dying. A Dying crop that remains at 0 on a later update becomes Dead. Recovery above 0 returns a Dying crop to Healthy.

## Pollination

Pollination is checked during Flowering and Fruit Set. Valid nearby sources include vanilla flower tagged blocks and A & A Cooking crops currently in Flowering stage.

Crop profiles can use no pollination, beneficial pollination, or required pollination. Current crop values are listed on [Current Crops](/agriculture/crops/).

## Harvest yield and quality

Vigor at harvest controls output quantity between the crop profile's minimum and maximum yield. Ingredient quality ranges from **25 to 100** in 5 point steps and is carried into the ingredient state.

## Related pages

- [Agriculture Overview](/agriculture/overview/)
- [Current Crops](/agriculture/crops/)
- [Cultivated Soil](/agriculture/cultivated-soil/)
- [Weather & Climate](/environment/weather-climate/)
- [Weather Reference](/environment/weather-reference/)
