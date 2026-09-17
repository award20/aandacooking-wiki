---
title: Calendar & Seasons
description: The A & A Cooking game calendar, weekdays, seasons, year progress, and calendar diagnostics.
---

A & A Cooking's newer environment system includes a dedicated **Game Calendar** instead of treating seasons as only a raw world day counter. The calendar exposes dates, weekdays, seasons, day of year progress, and a selected calendar preset.

<div class="page-summary">
    <p><strong>Status: Implemented environment system</strong></p>
    <p>The Game Calendar uses Spring, Summer, Autumn, and Winter and provides both compact season information and full calendar diagnostics.</p>
</div>

## Calendar information

The current calendar tracks and reports:

- formatted date
- weekday
- current season
- day within the season
- day of the year
- total days in the year
- world day
- active calendar preset

The exact season and year lengths depend on the active preset. The wiki therefore does not hardcode the earlier temporary 30-day per season value as the current calendar rule.

## Seasons

The four seasons are:

1. Spring
2. Summer
3. Autumn
4. Winter

Agriculture crop profiles use these seasons as growth multipliers. Other environment systems can also use year progress for seasonal effects.

## Commands

### `/aacooking season`

Reports:

- current season
- current day within the season
- total days in that season
- world day

### `/aacooking calendar`

Reports the fuller calendar state, including:

- date
- weekday
- season
- season day
- day of year
- world day
- preset name

These commands use the Overworld calendar as the shared reference.

## Agriculture connection

Crop growth reads the current season and applies each crop's configured season multiplier. Tomato, for example, favors Summer, while Onion currently favors Spring.

Season is only one growth factor. Soil moisture, fertility, light, pollination, and vigor still participate independently.

## Related pages

- [Commands](/reference/commands/)
- [Configuration](/reference/configuration/)
- [Agriculture Overview](/agriculture/overview/)
- [Current Crops](/agriculture/crops/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Weather & Climate](/environment/weather-climate/)
