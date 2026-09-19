---
title: Cultivated Soil
description: Soil saturation, precipitation, evaporation, snowmelt, soil temperature, fertility, and crop support.
---

**Cultivated Soil** stores both saturation and fertility, allowing crops to respond to drought, normal hydration, flooding, nutrient depletion, rain, evaporation, freezing, and snowmelt.

## Stored values

| Property | Stored range | Crop facing range |
|---|---:|---:|
| Saturation | 0-14 | 0.0-2.0 |
| Fertility | 0-7 | 0-7 |

Saturation is calculated as `stored saturation / 7`, so level 7 is 1.0 and level 14 is 2.0.

## Hydration targets

Cultivated Soil checks water within a **4 block horizontal radius** plus the block above and four directly adjacent horizontal blocks.

- nearby water establishes a target of at least level 7
- water directly above targets level 14
- each directly adjacent water source after the first adds 2 target levels
- liquid precipitation contributes a target based on local precipitation intensity
- snowmelt can raise the target above normal saturation

Liquid precipitation hydrates soil only when the sky is visible, precipitation is active, and ambient temperature is above 0 °C.

## Precipitation

Precipitation intensity is converted to a hydration target from roughly level 2 at very light precipitation up to level 12 at full intensity. The soil uses whichever target is stronger between precipitation and nearby water, then applies adjacent water boosts.

## Snowmelt

Snow above the soil insulates the soil temperature. When the surface reaches at least **0.5 °C**, melting snow can contribute a hydration target between levels 8 and 11 depending on snow depth.

## Frozen soil

If soil temperature is **-0.5 °C or colder**, the soil is Frozen and its random hydration update stops for that tick.

Soil thermal state also affects crop growth directly:

- Frozen: 0.00×
- Thawing: 0.40×
- Thawed: 1.00×

See [Crop Growth & Vigor](/agriculture/crop-growth/).

## Evaporation and drying

When current saturation is above its target, drying is probabilistic rather than a fixed one level timer. Evaporation responds to:

- surface temperature
- relative humidity
- wind speed
- solar exposure
- cloud cover
- oversaturation

High evaporation potential can remove **2 saturation levels** in one drying update. Oversaturated soil receives an additional drainage bonus.

## Crop moisture response

Each crop has its own minimum saturation, maximum ideal saturation, and flood penalty. Full growth is available inside the crop's preferred moisture band. Growth falls smoothly below the minimum and can be penalized above the ideal maximum.

See [Current Crops](/agriculture/crops/) for all nine crop moisture profiles.

## Fertility

Fertility ranges from 0-7. Its crop growth multiplier ranges from **0.25× at fertility 0** to **1.00× at fertility 7**.

Successful crop growth can consume one fertility level according to the crop profile. [Compost](/agriculture/compost-fertility/) restores 2 fertility levels up to the maximum of 7.

## Vanilla farmland

The crop environment system can also read vanilla farmland moisture, normalized to a 0.0-1.0 saturation range. Cultivated Soil provides the expanded 0.0-2.0 range plus stored fertility and the full weather driven soil model.

## Related pages

- [Agriculture Overview](/agriculture/overview/)
- [Current Crops](/agriculture/crops/)
- [Crop Growth & Vigor](/agriculture/crop-growth/)
- [Compost & Fertility](/agriculture/compost-fertility/)
- [Weather & Climate](/environment/weather-climate/)
