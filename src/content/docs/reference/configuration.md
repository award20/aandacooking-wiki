---
title: Configuration
description: Confirmed A & A Cooking configuration areas for time, seasons, climate, and temperature display.
---

A & A Cooking centralizes environment settings used by the solar clock, daylight, calendar, temperature, and command systems.

<div class="page-summary">
    <p><strong>Status: Core configuration behavior documented, exact file schema still being finalized</strong></p>
    <p>The exact configuration file path, property names, default values, and accepted calendar preset names are not published here yet because those details are still being finalized for player facing documentation.</p>
</div>

## Confirmed configuration areas

| Setting area | Used by | Effect |
|---|---|---|
| Real day length | Solar clock, `/aacooking time` | Controls how quickly 24,000 solar units advance in real time |
| Seasonal daylight | Solar/daylight system | Enables or disables seasonally varying daylight calculations |
| Climate latitude | Seasonal daylight, climate diagnostics | Changes solar declination/daylight behavior and is reported by climate commands |
| Temperature unit | Climate and cooking facing temperature displays | Selects the player facing temperature format used by diagnostics |
| Calendar preset | Game Calendar | Determines the active calendar structure used for dates, season lengths, and year length |

## Day length

The solar clock calculates its rate as:

`solar units per tick = 24000 / (configured day length in seconds × 20)`

This means the configured duration changes **real time day speed** while keeping one complete solar cycle equal to 24,000 solar units.

### Duration syntax

Duration values accept:

- `s`: seconds
- `m`: minutes
- `h`: hours
- `d`: days
- `w`: weeks

Values can contain decimals, and duration tokens can be combined after whitespace is removed. Examples of parser compatible shapes include:

```text
90s
2.5m
1h30m
1d12h
```

The parser rejects empty, malformed, zero, and negative total durations.

## Seasonal daylight

Seasonal daylight is exposed as an enabled/disabled configuration value.

When enabled, the daylight system calculates seasonal values such as:

- solar declination
- daylight length
- sunrise
- sunset

The configured state is shown by both `/aacooking time` and `/aacooking daylight`.

## Climate latitude

The environment system reads a configured **climate latitude** when calculating seasonal daylight and climate behavior.

`/aacooking daylight` displays the configured latitude directly. `/aacooking temperature` also reports the latitude used by the climate calculation at the sampled position.

The player facing config key and validated numeric range are not published here yet, so those details remain **Needs verification**.

## Temperature unit

A shared temperature unit setting is used by environment diagnostics. The selected unit controls how temperatures and signed temperature offsets are formatted for the player.

This matters because A & A Cooking is intended to use one coherent unit preference instead of having climate diagnostics and cooking interfaces disagree about temperature presentation.

The exact selectable unit names remain **Needs verification** until the player facing configuration format is finalized.

## Calendar preset

The newer Game Calendar reports an active **calendar preset**, and the preset determines values such as:

- formatted date behavior
- season lengths
- total days in the year
- resulting day of year and seasonal progress

The complete preset catalog and exact configuration key are not published here yet.

## Applying configuration changes

A & A Cooking loads its configuration during mod initialization. The wiki does not yet promise which options can reload immediately, which require a world or server restart, or which are synchronized to clients.

Until the latest `AACookingConfig.java` is reviewed, treat restart/reload behavior as **Needs verification**.

## Verification commands

The following commands are useful after changing environment settings:

| Command | Useful for checking |
|---|---|
| `/aacooking calendar` | Active calendar preset and current calendar state |
| `/aacooking time` | Configured day length, solar rate, seasonal daylight state |
| `/aacooking daylight` | Latitude, declination, sunrise, sunset, daylight duration |
| `/aacooking temperature` | Temperature unit and full climate calculation |
| `/aacooking weather` | Local atmospheric state and weather temperature contribution |

## Related pages

- [Commands](/reference/commands/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Weather & Climate](/environment/weather-climate/)
