---
title: Calendar & Seasons
description: Game Calendar presets, dates, weekdays, seasons, and agriculture integration.
---

A & A Cooking uses a persistent **Game Calendar** for seasons and long term environmental progression. The calendar is based on Overworld world time and the configured calendar preset.

## Calendar presets

| Preset | Behavior |
|---|---|
| `GAMEPLAY` | 10 days per month, 120 days per year |
| `REALISTIC` | Real month lengths with Gregorian leap year rules |
| `CUSTOM` | Every month uses `customDaysPerMonth` from configuration |

The default preset is `GAMEPLAY`, beginning on **March 1, Year 1**.

See [Configuration](/reference/configuration/) for all calendar keys and accepted values.

## Calendar information

The calendar tracks:

- year
- month and day
- weekday
- season
- day within the season
- day of year
- total days in the year
- world day
- active preset

## Seasons

The four seasons are:

1. Spring
2. Summer
3. Autumn
4. Winter

Season boundaries follow the active calendar instead of a fixed 30 day season rule.

## Commands

`/aacooking season` reports the season, season day, season length, and world day.

`/aacooking calendar` reports the full date, weekday, season, season progress, day of year, world day, and preset.

See [Commands](/reference/commands/) for the complete command reference.

## Agriculture connection

Every current crop profile has a multiplier for all four seasons. Season is only one part of crop growth; moisture, fertility, light, temperature, humidity, wind, storms, soil temperature, pollination, and vigor also contribute.

See [Current Crops](/agriculture/crops/) and [Crop Growth & Vigor](/agriculture/crop-growth/).

## Related pages

- [Configuration](/reference/configuration/)
- [Commands](/reference/commands/)
- [Agriculture Overview](/agriculture/overview/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Weather & Climate](/environment/weather-climate/)
