---
title: Weather & Climate
description: Local weather fields, temperature diagnostics, precipitation, wind, snow surfaces, and weather commands.
---

A & A Cooking includes a local weather and climate system that goes beyond Minecraft's single global rain state. The current environment line tracks atmospheric values by position and feeds weather effects into air and surface temperature calculations.

<div class="page-summary">
    <p><strong>Status: Implemented and actively developing</strong></p>
    <p>The current source/command snapshot exposes local pressure, humidity, clouds, precipitation, storm energy, wind, weather temperature offsets, ambient/surface climate calculations, local weather overrides, weather searching, and snow-surface state.</p>
</div>

## Local weather sample

`/aacooking weather` reports the local atmospheric sample at the command position, including:

- pressure in hPa
- relative humidity
- cloud cover
- precipitation intensity and precipitation state
- storm energy
- wind speed in m/s
- wind direction
- weather temperature offset
- weather-system travel rate in blocks per second
- position

Weather therefore varies spatially instead of being represented only by one world-wide rain boolean.

## Temperature model

`/aacooking temperature` separates **ambient air temperature** from **surface temperature**.

The diagnostic output includes contributions from:

- biome base temperature
- seasonal offset
- daily air offset
- altitude offset
- weather air offset
- surface daily heating/cooling
- surface weather contribution
- solar heating
- block-light heating
- solar exposure
- cloud cover

It also reports block light, whether the sky is visible, latitude, elevation and sea level in blocks, year progress, day progress, and the current snow-surface state.

The player-facing unit comes from the shared A & A Cooking temperature-unit configuration so climate and cooking diagnostics can use the same unit preference.

## Precipitation and snow

The environment startup record confirms dedicated local precipitation and snow-surface controllers. Surface temperature is also converted into a named snow-surface state for diagnostics.

Exact snow accumulation/sticking/melting thresholds are still changing and are therefore not frozen into this page yet.

## Weather overrides

Operators can force a weather condition for the local weather region:

`/aacooking weather set <condition>`

This command requires permission level 2 and is restricted to the Overworld.

Remove the override for the current region with:

`/aacooking weather clear`

The normal `/aacooking weather` report samples the effective local weather, including overrides.

## Finding natural weather

Operators can search for and teleport to the nearest naturally matching weather condition:

`/aacooking weather tp <condition>`

The current search:

- is Overworld-only
- must be run by a player
- checks outward in 256-block steps
- searches up to 16,384 blocks from the player
- verifies the weather both atmospherically and at the resolved surface position

This is primarily a development/testing command for reaching a target weather state without changing the natural field everywhere.

## Weather condition names

The accepted condition names come from the current `WeatherCondition` registry and are offered by command suggestions. Because that list is still part of active weather development, this page does not freeze a condition catalog until the registry itself is reviewed alongside the next source snapshot.

## Related pages

- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Agriculture Overview](/agriculture/overview/)
