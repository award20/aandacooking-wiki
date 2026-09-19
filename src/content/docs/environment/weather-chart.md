---
title: Weather Chart
description: The Weather Chart map item and its regional pressure, precipitation, and storm overview.
---

The **Weather Chart** (`aandacooking:weather_chart`) is a map based weather tool for the Overworld. It provides a regional visual overview of the same local weather field used by precipitation, storms, wind, and temperature calculations.

## Initialization

When carried by a player in the Overworld, the Weather Chart initializes as a filled map centered on the player at **map scale 4**.

The chart uses the normal 128 by 128 map area while sampling the weather field as a **16 by 16 regional grid**.

## Updates

The chart refreshes its weather overview every **20 game ticks**, or once per second at normal tick rate.

Its rendering represents regional values including:

- precipitation
- atmospheric pressure
- storm intensity
- pressure bands and boundaries

Pressure contour bands use **4 hPa** intervals.

## Dimension behavior

Weather Chart initialization and weather rendering are restricted to the **Overworld**, matching the mod's local weather system.

## Related pages

- [Weather & Climate](/environment/weather-climate/)
- [Weather Reference](/environment/weather-reference/)
- [Commands](/reference/commands/)
- [Complete Content Index](/reference/content-index/)
