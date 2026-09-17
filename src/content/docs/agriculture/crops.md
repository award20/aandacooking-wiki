---
title: Current Crops
description: Current Tomato and Onion crop profiles, stages, seasonal multipliers, moisture preferences, yields, and regrowth.
---

A & A Cooking currently includes dedicated crop profiles for **Tomato** and **Onion**. Profiles define semantic growth stages and the environmental preferences used by the shared growth system.

<div class="page-summary">
    <p><strong>Status: Implemented crop profiles</strong></p>
    <p>Tomato and Onion currently have distinct season, soil, light, pollination, fertility consumption, yield, and regrowth settings.</p>
</div>

## Tomato

Tomato progresses through eight semantic stages:

`Germinating → Sprout → Leaf Growth → Budding → Flowering → Fruit Set → Fruit Growth → Ripe`

### Environment profile

| Property | Tomato |
|---|---:|
| Spring multiplier | 0.85× |
| Summer multiplier | 1.00× |
| Autumn multiplier | 0.55× |
| Winter multiplier | 0.10× |
| Minimum preferred saturation | 0.55 |
| Maximum ideal saturation | 1.00 |
| Flood penalty | 0.90 |
| Minimum light | 8 |
| Optimal light | 13 |
| Fertility consumption chance after growth | 45% |
| Base harvest range | 2–5 tomatoes |

Tomato uses **beneficial pollination** in a 5-block horizontal radius, with a maximum configured pollination boost of 25% before diminishing return calculations.

### Regrowth

Tomato is a regrowing crop. After a mature Tomato is harvested, the plant returns to the age corresponding to its **Flowering** stage rather than being removed.

Its vigor and lifecycle condition are retained during that reset.

## Onion

Onion uses five semantic stages:

`Germinating → Sprout → Leaf Growth → Bulb Growth → Ripe`

### Environment profile

| Property | Onion |
|---|---:|
| Spring multiplier | 1.00× |
| Summer multiplier | 0.85× |
| Autumn multiplier | 0.70× |
| Winter multiplier | 0.25× |
| Minimum preferred saturation | 0.40 |
| Maximum ideal saturation | 0.90 |
| Flood penalty | 0.85 |
| Minimum light | 7 |
| Optimal light | 12 |
| Fertility consumption chance after growth | 30% |
| Base harvest range | 1–3 onions |

Onion does **not** use pollination.

### Harvest lifecycle

Onion does not regrow after harvest. A mature harvested plant also drops its seed item and the crop block is removed.

## Crop tint and visible stress

Crop rendering uses vigor and lifecycle condition to communicate stress. Healthy crops interpolate from a stressed brownish tint toward the normal full color texture as vigor improves, while Dying and Dead crops use dedicated darker tints.

## Calendar integration

Crop profile season multipliers work with the current [Calendar & Seasons](/environment/calendar-seasons/) system. Calendar length and date progression are documented there rather than repeated on each crop page.

## Related pages

- [Agriculture Overview](/agriculture/overview/)
- [Crop Growth & Vigor](/agriculture/crop-growth/)
- [Cultivated Soil](/agriculture/cultivated-soil/)
