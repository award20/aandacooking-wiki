---
title: Configuration
description: Server and client configuration files, keys, defaults, accepted values, and validation rules for A & A Cooking.
---

A & A Cooking uses a server/common configuration file for time, calendar, and climate behavior plus a separate client configuration file for Recipe Book sound.

## Main configuration file

The main file is:

`config/aandacooking.json`

When the file does not exist, A & A Cooking creates it with the defaults below.

```json
{
  "time": {
    "dayLength": "20m",
    "seasonalDaylight": true
  },
  "calendar": {
    "preset": "GAMEPLAY",
    "startingYear": 1,
    "startingMonth": "MARCH",
    "startingDay": 1,
    "customDaysPerMonth": 10
  },
  "climate": {
    "temperatureUnit": "F",
    "latitude": 35.0
  }
}
```

## Time settings

### `time.dayLength`

Default: `20m`

Controls the real time length of one full 24,000 unit Minecraft solar day.

Accepted duration units are:

- `s` for seconds
- `m` for minutes
- `h` for hours
- `d` for days
- `w` for weeks

Decimals and combined values are accepted. Examples include `30m`, `1.5h`, and `1h30m`.

The duration must be greater than zero.

### `time.seasonalDaylight`

Default: `true`

When enabled, sunrise and sunset shift with the calendar season and configured latitude.

## Calendar settings

### `calendar.preset`

Default: `GAMEPLAY`

Accepted values:

- `GAMEPLAY`
- `REALISTIC`
- `CUSTOM`

`GAMEPLAY` uses 10 days per month, for a 120 day year.

`REALISTIC` uses real month lengths and Gregorian leap year rules.

`CUSTOM` uses the value from `customDaysPerMonth` for every month.

### `calendar.startingYear`

Default: `1`

Must be at least `1`.

### `calendar.startingMonth`

Default: `MARCH`

Accepted values are the twelve English month names written as their enum names, such as `JANUARY`, `MARCH`, or `DECEMBER`.

### `calendar.startingDay`

Default: `1`

The value must be valid for the selected starting month, year, and calendar preset.

### `calendar.customDaysPerMonth`

Default: `10`

Used by the `CUSTOM` preset. Accepted range: `1-365`.

## Climate settings

### `climate.temperatureUnit`

Default: `F`

Accepted values:

- `F` or `FAHRENHEIT`
- `C` or `CELSIUS`

The normalized configuration value is written as `F` or `C`.

### `climate.latitude`

Default: `35.0`

Accepted range: `-90.0` to `90.0` degrees.

Latitude affects seasonal daylight and the climate temperature model.

## Invalid configuration

If the configuration cannot be parsed or fails validation, A & A Cooking logs the error and falls back to default configuration values for that launch.

Older or incomplete files are normalized when possible. Missing `time`, `calendar`, or `climate` sections and several missing values are restored automatically and written back to disk.

## Applying changes

The main configuration is loaded during mod initialization. The current playtest build does not expose a command that reloads `aandacooking.json` while the game is running, so restart the game or server after editing it.

## Client configuration

The Recipe Book client setting is stored separately at:

`config/aandacooking-client.json`

Default:

```json
{
  "recipeBookSounds": true
}
```

The speaker button on the [Recipe Book](/recipe-book/overview/) toggles this setting and writes it immediately.

## Verification commands

| Command | Useful for checking |
|---|---|
| `/aacooking calendar` | Active calendar preset and current date |
| `/aacooking time` | Day length, solar rate, and seasonal daylight |
| `/aacooking daylight` | Latitude, declination, sunrise, sunset, and daylight duration |
| `/aacooking temperature` | Temperature unit and climate calculation |
| `/aacooking weather` | Local atmospheric state |

## Related pages

- [Commands](/reference/commands/)
- [Calendar & Seasons](/environment/calendar-seasons/)
- [Solar Time & Daylight](/environment/solar-daylight/)
- [Weather & Climate](/environment/weather-climate/)
- [Recipe Book](/recipe-book/overview/)
