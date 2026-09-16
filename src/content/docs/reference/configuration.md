---
title: Configuration
description: Confirmed A & A Cooking configuration areas for time, seasons, climate, and temperature display.
---

A & A Cooking centralizes environment-facing settings through `AACookingConfig`. The retained source confirms the configuration areas below and shows them being consumed by the solar clock, daylight, calendar, temperature, and command systems.

<div class="page-summary">
    <p><strong>Status: Configuration behavior confirmed, exact file schema still needs a current source check</strong></p>
    <p>The settings themselves are established in the retained source. The exact current config-file path, property names, default values, and accepted calendar-preset names are not frozen here because the current <code>AACookingConfig.java</code> file is not present in the available source snapshot.</p>
</div>

## Confirmed configuration areas

| Setting area | Used by | Effect |
|---|---|---|
| Real day length | Solar clock, `/aacooking time` | Controls how quickly 24,000 solar units advance in real time |
| Seasonal daylight | Solar/daylight system | Enables or disables seasonally varying daylight calculations |
| Climate latitude | Seasonal daylight, climate diagnostics | Changes solar declination/daylight behavior and is reported by climate commands |
| Temperature unit | Climate and cooking-facing temperature displays | Selects the player-facing temperature format used by diagnostics |
| Calendar preset | Game Calendar | Determines the active calendar structure used for dates, season lengths, and year length |

## Day length

The solar clock calculates its rate as:

`solar units per tick = 24000 / (configured day length in seconds × 20)`

This means the configured duration changes **real-time day speed** while keeping one complete solar cycle equal to 24,000 solar units.

### Duration syntax

The retained duration parser accepts:

- `s` — seconds
- `m` — minutes
- `h` — hours
- `d` — days
- `w` — weeks

Values can contain decimals, and duration tokens can be combined after whitespace is removed. Examples of parser-compatible shapes include:

```text
90s
2.5m
1h30m
1d12h
```

The parser rejects empty, malformed, zero, and negative-total durations.

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

The retained source does not establish the current user-facing config key or validated numeric range, so those details remain **Needs verification** until the current configuration class is available.

## Temperature unit

A shared temperature-unit setting is used by environment diagnostics. The selected unit controls how temperatures and signed temperature offsets are formatted for the player.

This matters because A & A Cooking is intended to use one coherent unit preference instead of having climate diagnostics and cooking interfaces disagree about temperature presentation.

The exact selectable unit names in the current config schema remain **Needs verification** from the latest `TemperatureUnit` and configuration source.

## Calendar preset

The newer Game Calendar reports an active **calendar preset**, and the preset determines values such as:

- formatted date behavior
- season lengths
- total days in the year
- resulting day-of-year and seasonal progress

Because the retained command source only exposes the selected preset's display name, this wiki does not yet list the complete preset catalog or exact configuration key.

## Applying configuration changes

The retained source confirms that A & A Cooking loads its configuration during mod initialization. It does **not** provide enough current-source evidence in this wiki snapshot to promise which options hot-reload, which require a world/server restart, or which are synchronized to clients.

Until the latest `AACookingConfig.java` is reviewed, treat restart/reload behavior as **Needs verification**.

## Verification commands

The following commands are useful after changing environment settings:

| Command | Useful for checking |
|---|---|
| `/aacooking calendar` | Active calendar preset and current calendar state |
| `/aacooking time` | Configured day length, solar rate, seasonal-daylight state |
| `/aacooking daylight` | Latitude, declination, sunrise, sunset, daylight duration |
| `/aacooking temperature` | Temperature unit and full climate calculation |
| `/aacooking weather` | Local atmospheric state and weather temperature contribution |

## Related pages

- [Commands](/reference/commands/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Weather & Climate](/environment/weather-climate/)
