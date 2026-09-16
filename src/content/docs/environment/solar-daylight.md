---
title: Solar Time & Daylight
description: Configurable day length, solar time progression, seasonal daylight, latitude, sunrise, and sunset.
---

A & A Cooking manages an exact **solar clock** for the Overworld and can vary daylight length seasonally. This separates real-time day duration from the normal assumption that one Minecraft day always advances at the vanilla rate.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>The solar clock supports configurable real day length, fractional solar-time progression, external time changes, the daylight-cycle gamerule, and seasonal daylight diagnostics.</p>
</div>

## Configurable day length

The solar-time rate is calculated from the configured real day length:

`solar units per tick = 24000 / (day length in seconds × 20)`

The system therefore still uses **24,000 solar units per full day**, but changes how quickly those units advance.

The exact fractional solar position is tracked internally so long custom day lengths do not lose sub-tick progress.

## Daylight-cycle gamerule

When `doDaylightCycle` is disabled, A & A Cooking does not advance the managed solar clock.

The clock also watches for external time changes and resynchronizes rather than blindly overwriting commands or other systems that move world time.

## `/aacooking time`

The time command reports:

- current solar clock time
- exact solar position out of 24,000
- configured real day length
- solar units advanced per tick
- whether seasonal daylight is enabled

## Seasonal daylight

The newer daylight system calculates seasonal sunrise and sunset from climate information rather than forcing identical daylight length every day of the year.

The diagnostics expose:

- configured climate latitude
- solar declination
- daylight length
- sunrise time
- sunset time

## `/aacooking daylight`

Use `/aacooking daylight` to inspect those values at the current point in the calendar year.

This is especially useful when tuning agriculture, weather, surface heating, and later greenhouse behavior because daylight is a shared environmental input rather than only a visual effect.

## Related pages

- [Calendar & Seasons](/environment/calendar-seasons/)
- [Weather & Climate](/environment/weather-climate/)
- [Agriculture Overview](/agriculture/overview/)
