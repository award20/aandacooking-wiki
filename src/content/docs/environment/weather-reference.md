---
title: Weather Reference
description: Weather conditions, Weather Chart behavior, precipitation thresholds, snow surfaces, and thunderstorm severity.
---

A & A Cooking generates local weather from pressure, humidity, cloud cover, precipitation, storm energy, wind, and temperature offsets. The current private alpha playtest build exposes nine named weather conditions for commands and testing.

## Named weather conditions

| Command name | Display name | Pressure | Humidity | Clouds | Precipitation | Storm energy | Wind | Temperature offset |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| `dry` | Dry | 1022 hPa | 38% | 18% | 0% | 0% | 3 m/s | +0.5 °C |
| `drizzle` | Drizzle | 1014 hPa | 70% | 68% | 12% | 5% | 5 m/s | -0.5 °C |
| `light` | Light | 1008 hPa | 78% | 78% | 32% | 12% | 7 m/s | -1.5 °C |
| `moderate` | Moderate | 1004 hPa | 82% | 84% | 60% | 25% | 8 m/s | -2.5 °C |
| `heavy` | Heavy | 1003 hPa | 88% | 92% | 85% | 40% | 9 m/s | -4.0 °C |
| `rumbling` | Rumbling | 1004 hPa | 85% | 86% | 62% | 55% | 8 m/s | -3.0 °C |
| `thunderstorm` | Thunderstorm | 1001 hPa | 90% | 94% | 82% | 72% | 9 m/s | -4.5 °C |
| `severe` | Severe Thunderstorm | 998 hPa | 94% | 98% | 88% | 88% | 11 m/s | -6.0 °C |
| `extreme` | Extreme Thunderstorm | 996 hPa | 99% | 100% | 98% | 99% | 16 m/s | -8.0 °C |

These names are accepted by `/aacooking weather set <condition>` and `/aacooking weather tp <condition>`.

## Precipitation states

| State | Threshold |
|---|---|
| Dry | Below 5% precipitation intensity |
| Drizzle | 5% or higher |
| Light | 20% or higher |
| Moderate | 45% or higher |
| Heavy | 75% or higher |
| Thunderstorm | Storm energy reaches 65% or higher |

## Thunderstorm severity

Storms progress through **None**, **Rumbling**, **Thunderstorm**, **Severe**, and **Extreme** severity. Rumbling storms can produce distant thunder without lightning strikes. Thunderstorm, Severe, and Extreme conditions can generate regional lightning.

Lightning behavior becomes more frequent and more likely to use stronger strike profiles as severity increases. The weather system evaluates lightning in 256 block regions around players.

## Weather Chart

The **[Weather Chart](/environment/weather-chart/)** (`aandacooking:weather_chart`) is a dynamic map style item that visualizes the regional weather field in the Overworld.

When first carried, it initializes a map centered on the player at map scale 4. The chart samples a 16 by 16 weather grid across the map and redraws its overview once per second.

The chart uses weather colors for precipitation and pressure, then draws pressure band boundaries as isobars. Strong storm energy is shown distinctly from ordinary precipitation.

## Snow accumulation and melting

Snow surfaces use the calculated ambient air and surface temperatures rather than only vanilla biome weather.

| Surface state | Temperature |
|---|---:|
| Frozen | -0.5 °C or colder |
| Marginal | Between -0.5 °C and 0.5 °C |
| Melting | 0.5 °C or warmer |

For snow to accumulate, local weather must be precipitating, ambient air must be 0 °C or colder, and strong block light must not prevent sticking. Colder surfaces accumulate more reliably.

Existing snow layers can melt when the surface is above freezing or when strong nearby block light is present. The controller updates exposed columns around players once per second.

## Local rendering

A & A Cooking keeps vanilla global rain and thunder disabled in the Overworld and synchronizes the local weather field to players. Client rendering then uses that local state for precipitation, clouds, and related weather visuals.

## Related pages

- [Weather & Climate](/environment/weather-climate/)
- [Commands](/reference/commands/)
- [Configuration](/reference/configuration/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
