---
title: Agriculture Overview
description: How cultivated soil, crop profiles, vigor, pollination, seasons, fertility, and harvest quality work together.
---

A & A Cooking's agriculture system treats crop growth as the result of several environmental factors rather than a single farmland-moisture check. Crops respond to **season**, **soil saturation**, **soil fertility**, **light**, **pollination**, and their current **vigor**.

<div class="page-summary">
    <p><strong>Status: Implemented core system</strong></p>
    <p>The reviewed agriculture source includes Cultivated Soil, crop-specific growth profiles, vigor and lifecycle states, pollination bonuses, fertility consumption, harvest yield/quality, and current Tomato and Onion crops.</p>
</div>

## Agriculture loop

A basic farming loop is:

1. prepare or place suitable farmland
2. plant an A & A Cooking crop
3. maintain appropriate moisture, fertility, light, and seasonal conditions
4. allow the crop's vigor to respond to those conditions
5. provide pollination sources when the crop benefits from them
6. harvest a mature crop, with yield and quality influenced by vigor

[Cultivated Soil](/agriculture/cultivated-soil/) provides the mod's expanded moisture and fertility model, while vanilla farmland can still provide a normalized moisture value to compatible crop logic.

## Growth factors

The current crop-growth probability combines seven terms:

`growth = base × season × moisture × light × fertility × pollination × vigor`

The base random-tick growth chance is **0.20** before those factors are applied.

This means a crop can still grow slowly under imperfect conditions, but severe problems such as inadequate light or a required pollination source can reduce growth to zero.

## Crop vigor

Crop vigor is stored on a **0–7** scale. It moves toward an environmental target one level at a time instead of snapping immediately to the new value.

The vigor target weights the environment as follows:

| Factor | Weight |
|---|---:|
| Soil moisture | 35% |
| Season | 30% |
| Light | 20% |
| Soil fertility | 15% |

Vigor affects both growth speed and final harvest results. See [Crop Growth & Vigor](/agriculture/crop-growth/) for the lifecycle details.

## Seasons

Each crop profile can assign a different growth multiplier to Spring, Summer, Autumn, and Winter. The newer environment system also has a full calendar with named dates, weekdays, day-of-year information, and selectable presets.

See [Calendar & Seasons](/environment/calendar-seasons/) for the current environment-facing behavior.

## Pollination

Pollination checks occur during flowering and fruit-set stages. Nearby vanilla flowers and nearby A & A Cooking crops that are themselves flowering can count as sources.

Crop profiles can make pollination:

- unnecessary
- optional
- beneficial
- required

The current Tomato profile uses **beneficial pollination** within a 5-block horizontal radius. Onion does not use pollination.

## Harvest quality

A mature crop's vigor affects both harvest quantity and ingredient quality. Current quality calculation ranges from **25 to 100** in 5-point steps.

Harvested produce starts unwashed and keeps that calculated quality when it enters the ingredient-preparation system.

## Current crop profiles

The reviewed agriculture source defines dedicated profiles for:

- Tomato
- Onion

Their season preferences, moisture ranges, yields, pollination rules, and regrowth behavior are documented on [Current Crops](/agriculture/crops/).

## Related pages

- [Cultivated Soil](/agriculture/cultivated-soil/)
- [Crop Growth & Vigor](/agriculture/crop-growth/)
- [Current Crops](/agriculture/crops/)
- [Compost & Fertility](/agriculture/compost-fertility/)
- [Calendar & Seasons](/environment/calendar-seasons/)
