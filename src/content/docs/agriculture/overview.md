---
title: Agriculture Overview
description: Cultivated Soil, nine crop profiles, climate response, vigor, pollination, harvest quality, and Compost.
---

A & A Cooking agriculture extends farming with crop specific seasons, moisture, climate ranges, wind tolerance, soil temperature, vigor, pollination, fertility, yield, and quality.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>The current playtest build includes nine A & A Cooking crop profiles: Tomato, Onion, Basil, Rosemary, Thyme, Parsley, Mint, Rice, and Soybean.</p>
</div>

## Current crops

- Tomato
- Onion
- Basil
- Rosemary
- Thyme
- Parsley
- Mint
- Rice
- Soybean

See [Current Crops](/agriculture/crops/) for every season multiplier, soil range, light requirement, temperature range, humidity range, wind threshold, pollination rule, fertility consumption chance, yield, stage list, and regrowth rule.

## Environmental inputs

Crop growth uses:

- season
- soil saturation
- light
- soil fertility
- ambient temperature
- relative humidity
- wind speed
- storm severity
- soil thermal state
- pollination
- crop vigor

The full calculation is documented on [Crop Growth & Vigor](/agriculture/crop-growth/).

## Cultivated Soil

[Cultivated Soil](/agriculture/cultivated-soil/) stores saturation from 0-14, exposed to crop logic as 0.0-2.0, plus fertility from 0-7. Rain, nearby water, weather driven evaporation, snow, and thaw conditions affect the soil system.

## Seasons and climate

The [Game Calendar](/environment/calendar-seasons/) determines the current season. Each crop has its own seasonal multipliers rather than using one universal growing season.

Local [weather and climate](/environment/weather-climate/) provide temperature, humidity, wind, storms, snow, and surface conditions. Exposed crops can be slowed or physically damaged by strong storms.

## Pollination

Some crops benefit from nearby flowers or flowering crops. Others do not require pollination. Pollination bonuses use crop specific search radii and benefit values.

## Harvest quality

Harvest vigor affects both quantity and ingredient quality. Harvested A & A Cooking produce begins unwashed and keeps its calculated quality through the ingredient preparation system.

## Fertility and Compost

Successful growth can consume soil fertility based on the crop profile. [Compost](/agriculture/compost-fertility/) restores Cultivated Soil fertility by 2 levels, up to the maximum of 7.

## Related pages

- [Current Crops](/agriculture/crops/)
- [Crop Growth & Vigor](/agriculture/crop-growth/)
- [Cultivated Soil](/agriculture/cultivated-soil/)
- [Compost & Fertility](/agriculture/compost-fertility/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Weather & Climate](/environment/weather-climate/)
