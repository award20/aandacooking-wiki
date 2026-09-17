---
title: Commands

description: A reference for A & A Cooking diagnostic and weather control commands.
---

A & A Cooking provides `/aacooking` commands for inspecting the calendar, solar clock, daylight, temperature, and local weather systems. Most diagnostic commands are available without operator level checks in the current command implementation, while weather changing and weather teleport commands require permission level 2.

<div class="page-summary">
    <p><strong>Status: Implemented development commands</strong></p>
    <p>The command reference includes the Game Calendar, climate diagnostics, local weather overrides, and weather searching.</p>
</div>

## Command overview

| Command | Purpose | Permission |
|---|---|---|
| `/aacooking season` | Show the current season and season day progress | Normal command access |
| `/aacooking calendar` | Show the full Game Calendar state | Normal command access |
| `/aacooking time` | Inspect solar time and the configured day rate | Normal command access |
| `/aacooking daylight` | Inspect seasonal sunrise, sunset, and daylight length | Normal command access |
| `/aacooking temperature` | Inspect ambient and surface temperature calculations at the command position | Normal command access |
| `/aacooking weather` | Inspect the local weather field at the command position | Normal command access |
| `/aacooking weather set <condition>` | Force a weather condition for the current local region | Permission level 2 |
| `/aacooking weather clear` | Remove the weather override from the current local region | Permission level 2 |
| `/aacooking weather tp <condition>` | Search for and teleport to the nearest naturally matching weather region | Permission level 2 |

## Season

`/aacooking season`

Reports:

- current season
- current day within the season
- total days in the current season
- world day

The newer command implementation reads this information from the shared **Game Calendar** rather than the earlier fixed season counter.

## Calendar

`/aacooking calendar`

Reports:

- formatted date
- weekday
- season
- season day and total days in that season
- day of year and total days in the year
- world day
- active calendar preset

See [Calendar & Seasons](/environment/calendar-seasons/) for how this information connects to agriculture and environmental simulation.

## Solar time

`/aacooking time`

Reports:

- current solar clock time
- solar position out of 24,000
- configured real day length
- solar units advanced per tick
- whether seasonal daylight is enabled

The command uses the Overworld solar clock as its reference.

## Daylight

`/aacooking daylight`

Reports:

- whether seasonal daylight is enabled
- configured climate latitude
- solar declination
- daylight length
- sunrise
- sunset

This is useful for checking the seasonal light calculations used by the environment system.

## Temperature

`/aacooking temperature`

The temperature diagnostic samples the command position and separates **ambient air** from **surface temperature**.

It reports:

- configured display unit
- ambient air temperature
- surface temperature
- snow surface state
- biome base temperature
- seasonal temperature offset
- daily air offset
- surface daily contribution
- altitude offset
- weather air offset
- surface weather contribution
- solar heating
- block light heating
- solar exposure
- block light level
- whether the sky is visible
- cloud cover
- biome temperature value
- latitude
- elevation in blocks
- sea level in blocks
- year progress
- day progress
- sampled position

See [Weather & Climate](/environment/weather-climate/) for the environmental model behind these values.

## Weather report

`/aacooking weather`

Reports the effective local weather sample at the command position:

- pressure in hPa
- relative humidity
- cloud cover
- precipitation intensity and precipitation state
- storm energy
- wind speed in m/s
- wind direction
- weather temperature offset
- weather travel rate in blocks per second
- sampled position

## Set local weather

`/aacooking weather set <condition>`

Forces the selected weather condition in the local weather region containing the command position.

Current command behavior:

- requires permission level 2
- only works in the Overworld
- uses command suggestions from the current `WeatherCondition` registry
- reports the selected condition, region size, and region center after applying the override

The exact condition catalog is not published here yet because weather conditions are still expanding.

## Clear local weather

`/aacooking weather clear`

Removes the local override for the region containing the command position.

The command returns an error when that region has no active override.

## Find natural weather

`/aacooking weather tp <condition>`

Searches outward from the player for naturally generated weather matching the requested condition and teleports the player to the nearest valid match found by the search.

Current behavior:

- requires permission level 2
- only works in the Overworld
- must be executed by a player
- checks outward in 256-block steps
- searches up to 16,384 blocks away
- checks the atmospheric weather field and verifies the resolved surface position before accepting a target

This is primarily a development/testing tool for reaching a naturally generated weather state without forcing that weather locally.

## Related pages

- [Configuration](/reference/configuration/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Weather & Climate](/environment/weather-climate/)
