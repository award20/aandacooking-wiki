---
title: Weather & Climate
description: Local weather fields, temperature, precipitation, wind, snow, lightning, and regional weather behavior.
---

A & A Cooking replaces the Overworld's single global rain state with a local weather field. Atmospheric conditions vary by position and move across the world, while the climate system uses those conditions when calculating ambient air and surface temperatures.

## Local weather

`/aacooking weather` reports:

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

See [Weather Reference](/environment/weather-reference/) for all nine named weather conditions and their values.

## Local precipitation

A & A Cooking keeps vanilla global rain and thunder clear in the Overworld. Instead, the server samples local weather for each player and synchronizes that state to the client.

This allows players in different regions to experience different precipitation and storm conditions at the same time.

## Temperature model

`/aacooking temperature` separates **ambient air temperature** from **surface temperature**.

The climate calculation includes:

- biome base temperature
- seasonal temperature offset
- daily temperature cycle
- altitude
- local weather temperature offset
- solar heating
- block light heating
- cloud cover
- surface exposure

The command also reports latitude, elevation and sea level in blocks, year progress, day progress, light levels, and the current snow surface state.

The display unit follows [Configuration](/reference/configuration/).

## Snow surfaces

Snow accumulation uses both local precipitation and temperature.

The named surface states are:

| State | Surface temperature |
|---|---:|
| Frozen | -0.5 °C or colder |
| Marginal | Between -0.5 °C and 0.5 °C |
| Melting | 0.5 °C or warmer |

Snow can accumulate when local weather is precipitating, ambient air is 0 °C or colder, the surface is cold enough, and strong block light is not preventing accumulation.

Snow layers can melt when surface temperature rises above freezing or strong block light heats the area.

## Thunder and lightning

Storm severity is tracked separately from ordinary precipitation.

The current severity ladder is:

1. None
2. Rumbling
3. Thunderstorm
4. Severe
5. Extreme

Rumbling conditions can produce distant thunder without direct lightning. Thunderstorm, Severe, and Extreme conditions can generate lightning strikes. More severe conditions increase strike frequency and the chance of stronger strike profiles.

## Weather Chart

The **[Weather Chart](/environment/weather-chart/)** (`aandacooking:weather_chart`) is a dynamic map style item that provides a regional weather overview.

It samples pressure, precipitation, and storm energy across the map area and draws pressure boundaries as isobars. See [Weather Reference](/environment/weather-reference/) for the chart behavior and condition values.

## Weather control and searching

Operators can use:

- `/aacooking weather set <condition>`
- `/aacooking weather clear`
- `/aacooking weather tp <condition>`

See [Commands](/reference/commands/) for permission requirements and search behavior.

## Agriculture integration

Crop growth uses local temperature, humidity, wind, and storm conditions in addition to season, soil, fertility, and light.

See [Current Crops](/agriculture/crops/) for the complete crop environment profiles.

## Related pages

- [Weather Reference](/environment/weather-reference/)
- [Commands](/reference/commands/)
- [Configuration](/reference/configuration/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Agriculture Overview](/agriculture/overview/)
