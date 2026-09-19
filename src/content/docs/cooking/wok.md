---
title: Wok
description: Tiered Wok cooking for high heat cooking and toss based recipes.
---

The **Wok** family is A & A Cooking's high heat stovetop cookware. Unlike cookware that mainly asks the player to maintain temperature, the Wok adds an active **toss** technique that recipes can require during cooking.

## Material tiers

This cookware is available in **Iron, Stainless Steel, Diamond Coated, and Netherite**. Recipes and capacity stay within the same cookware family; higher tiers change heating and cooling response. See [Cookware Tiers](/cooking/cookware-tiers/).

<div class="page-summary">
    <p><strong>Status: Implemented core system</strong></p>
    <p>The Wok currently supports six ingredient slots, explicit heat zones, manual tossing, toss counts, toss streaks, visible toss animation, shared heated recipe execution, and [Recipe Book](/recipe-book/overview/) integration.</p>
</div>

## Capacity

The current Wok has **6 ingredient slots**.

It is designed for high heat recipes where both temperature and active handling matter.

## Heat zones

The Wok divides its current temperature into named technique zones:

| Heat zone | Temperature |
|---|---:|
| Cool | below 120 °C |
| Low | 120-159.9 °C |
| Stir Fry | 160-219.9 °C |
| Searing | 220-259.9 °C |
| Extreme | 260 °C and above |

These zones let recipes express intended technique directly instead of relying only on a broad numeric temperature check.

The [Stovetop/Oven](/stations/stovetop-oven/) presets line up intentionally with the important Wok ranges:

- **Med High: 190 °C** falls inside the Stir Fry zone
- **High: 225 °C** falls inside the Searing zone

## Manual tossing

The Wok provides a manual toss action. Tossing is part of the recipe state rather than only a visual animation.

The Wok tracks:

- total toss count
- toss streak
- the current heat zone

A Wok recipe can require a minimum toss count or toss streak in addition to ingredients, temperature, and cooking time.

## Toss streak

The toss streak represents repeated active handling during the valid cooking window. This allows a recipe to distinguish between a player who tossed once at the beginning and a player who maintained the intended stir fry technique while the dish was cooking.

The exact toss requirement belongs to each Wok recipe.

## Recipe execution

Wok recipes use the shared heat based station framework and can define:

- exact ingredient requirements
- exact preparation states
- temperature range
- required heat zone
- cooking time
- target doneness
- toss count
- toss streak

A recipe locks only after its technique requirements become valid. After the recipe starts, temporarily falling outside those conditions pauses progress instead of switching the Wok to another possible match.

## Visual behavior

The Wok renderer includes visible ingredients and a toss animation so the manual technique has a direct in world presentation.

The visual state follows the underlying cookware state; the animation is not a substitute for the actual toss count and streak tracked by the recipe system.

## Connected kitchen storage

The Wok can reach connected kitchen storage through the Stovetop and adjacent kitchen furniture.

Pinned recipe loading can preserve ingredients already present and request only the missing exact requirements from the connected network. Ingredient preparation state remains significant during this matching.

## Recipe catalog

Exact Wok recipe ingredients, toss requirements, temperature windows, and cooking times are listed in the [Complete Recipe Index](/recipes/complete-index/).

## Related pages

- [Cookware Overview](/cooking/cookware/)
- [Stovetop/Oven](/stations/stovetop-oven/)
- [Skillet](/cooking/skillet/)
- [Recipe Book](/recipe-book/overview/)
