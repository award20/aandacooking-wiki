---
title: Commands
description: Complete A & A Cooking command reference for calendar, climate, Recipe Book administration, and local weather.
---

A & A Cooking provides `/aacooking` commands for diagnostics, playtest administration, Recipe Book testing, and local weather control.

## Command overview

| Command | Purpose | Permission |
|---|---|---|
| `/aacooking season` | Show the current season and season progress | Normal command access |
| `/aacooking calendar` | Show the full Game Calendar state | Normal command access |
| `/aacooking time` | Inspect solar time and configured day rate | Normal command access |
| `/aacooking daylight` | Inspect seasonal sunrise, sunset, and daylight length | Normal command access |
| `/aacooking temperature` | Inspect ambient and surface temperature calculations | Normal command access |
| `/aacooking weather` | Inspect the local weather field | Normal command access |
| `/aacooking recipebook tier <tier>` | Set the targeted Recipe Book tier and matching appearance | Permission level 2 |
| `/aacooking recipebook discover <recipe>` | Discover one recipe in the targeted Recipe Book | Permission level 2 |
| `/aacooking recipebook discover_all` | Discover every Recipe Book entry | Permission level 2 |
| `/aacooking recipebook reset` | Reset the targeted Recipe Book to empty Iron progress | Permission level 2 |
| `/aacooking weather set <condition>` | Force a local weather condition | Permission level 2 |
| `/aacooking weather clear` | Remove the current local weather override | Permission level 2 |
| `/aacooking weather tp <condition>` | Find and teleport to naturally matching weather | Permission level 2 |

## Season

`/aacooking season`

Reports:

- current season
- current day within the season
- total days in the current season
- world day

## Calendar

`/aacooking calendar`

Reports:

- formatted date
- weekday
- season
- season day and season length
- day of year and year length
- world day
- active calendar preset

See [Calendar & Seasons](/environment/calendar-seasons/).

## Solar time

`/aacooking time`

Reports:

- current solar clock time
- solar position out of 24,000
- configured real day length
- solar units advanced per tick
- whether seasonal daylight is enabled

## Daylight

`/aacooking daylight`

Reports:

- seasonal daylight state
- configured latitude
- solar declination
- daylight duration
- sunrise
- sunset

## Temperature

`/aacooking temperature`

Reports the current ambient and surface climate calculation, including:

- display temperature unit
- ambient air temperature
- surface temperature
- snow surface state
- biome base temperature
- seasonal offset
- daily air offset
- surface daily contribution
- altitude offset
- weather air offset
- surface weather contribution
- solar heating
- block light heating
- solar exposure
- block light
- sky visibility
- cloud cover
- biome temperature value
- latitude
- elevation in blocks
- sea level in blocks
- year progress
- day progress
- sampled position

## Recipe Book commands

Recipe Book administration commands act on the **Recipe Book block the player is looking at within 8 blocks**. They must be run by a player.

### Set tier

`/aacooking recipebook tier <tier>`

Accepted tiers:

- `iron`
- `stainless_steel`
- `diamond_coated`
- `netherite`
- `culinary_compendium`

Setting the tier also switches the book to the matching default appearance.

### Discover one recipe

`/aacooking recipebook discover <recipe>`

The recipe argument accepts the Recipe Book recipe ID. Command suggestions expose registered recipe IDs.

Examples:

`/aacooking recipebook discover tomato_soup`

`/aacooking recipebook discover aandacooking:tomato_soup`

### Discover all

`/aacooking recipebook discover_all`

Adds all **233** current Recipe Book entries to the targeted book and advances it to the tier earned by full completion.

### Reset

`/aacooking recipebook reset`

Clears discovered recipes and restores the Recipe Book to empty Iron progress.

## Weather report

`/aacooking weather`

Reports:

- pressure in hPa
- relative humidity
- cloud cover
- precipitation intensity and state
- storm energy
- wind speed in m/s
- wind direction
- weather temperature offset
- weather travel rate in blocks per second
- sampled position

## Set local weather

`/aacooking weather set <condition>`

Accepted condition names:

- `dry`
- `drizzle`
- `light`
- `moderate`
- `heavy`
- `rumbling`
- `thunderstorm`
- `severe`
- `extreme`

The command is restricted to the Overworld and requires permission level 2.

See [Weather Reference](/environment/weather-reference/) for the values represented by each condition.

## Clear local weather

`/aacooking weather clear`

Removes the weather override from the current local region. The command reports an error if that region has no override.

## Find natural weather

`/aacooking weather tp <condition>`

Searches outward from the player for naturally generated weather matching the requested condition and teleports the player to the nearest valid match.

The search:

- is Overworld only
- must be run by a player
- checks outward in 256 block steps
- searches up to 16,384 blocks away
- verifies the atmospheric field and resolved surface position before accepting a target

## Related pages

- [Configuration](/reference/configuration/)
- [Recipe Book](/recipe-book/overview/)
- [Complete Recipe Index](/recipes/complete-index/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Weather & Climate](/environment/weather-climate/)
- [Weather Reference](/environment/weather-reference/)
