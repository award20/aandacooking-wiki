---
title: Potion Infusion & Elixirs
description: Stockpot potion cooking, Elixir production, potion effect retention, and potion infused foods.
---

The [Stockpot](/cooking/stockpot/) can incorporate potion effects into consumable food or produce an **Elixir** when potion contents are cooked without solid ingredients.

## Elixir cooking

An Elixir can cook when the Stockpot contains:

- potion contents
- water
- no solid food ingredients

The dedicated Elixir process uses:

| Property | Value |
|---|---:|
| Cooking time | 8 seconds |
| Temperature | 55-75 °C |
| Potion retention | 75% |
| Liquid per serving | 250 mB |

Serving count is based on the Stockpot's liquid amount, with one serving for each 250 mB or partial 250 mB portion.

## Potion effect distribution

Potion effects are distributed across the produced servings rather than copied at full strength to every output.

For timed effects, the system combines effect duration and potency, applies the retention rate, and divides the result across servings. For instant effects, total potency is similarly retained and divided between servings.

The highest input amplifier for an effect type is used as the starting output amplifier. Instant effects can increase that amplifier when the divided potency would otherwise exceed the normal strength range.

## Potion infused food

Potion effects can also be carried into compatible Stockpot food. Potion effects are stored on the finished consumable and applied when that item is eaten or drunk.

Freeform Stockpot food uses a lower **60% potion retention** than the dedicated Elixir process.

Canonical recipe matching does not silently ignore potion contents. Potion handling remains separate so a normal recipe is not treated as though the potion were absent.

## Related pages

- [Stockpot](/cooking/stockpot/)
- [Cookware Overview](/cooking/cookware/)
- [Cooking Overview](/cooking/overview/)
- [Complete Content Index](/reference/content-index/)
