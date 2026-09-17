---
title: Jar Sealer
description: Sealing filled food jars with Glass Jar Lids to extend preservation time.
---

The Jar Sealer closes filled jars so their contents receive the Sealed preservation method. It is a direct world interaction station and does not use a separate inventory screen.

## Crafting the station

The Jar Sealer is crafted from:

- 4 Iron Ingots
- 2 Copper Ingots
- 1 Piston

Its item ID is `aandacooking:jar_sealer`.

## Glass Jars and lids

Two supporting items are used by the sealing system:

| Item ID | Item | Crafting result |
|---|---|---|
| `aandacooking:glass_jar` | Glass Jar | 7 Glass Panes produce 4 jars |
| `aandacooking:glass_jar_lid` | Glass Jar Lid | 1 Iron Nugget produces 1 lid |

A filled jar can exist in either an open or sealed state.

## Sealing a jar

To seal food:

1. Hold a filled open jar in your hand.
2. Use the jar on the Jar Sealer.
3. The station looks for a Glass Jar Lid in your inventory.
4. One lid is consumed in Survival.
5. The held jar becomes sealed.

Creative mode does not consume a lid.

If no Glass Jar Lid is available, the jar remains open and the game reports that a lid is required.

The station only acts on a jar that is both filled and currently open. Empty jars and already sealed jars are not changed.

## Opening sealed food

Using a sealed jarred food opens the jar before its normal food interaction can continue. Opening removes the Sealed preservation method from the container state.

Sealing is therefore reversible. A jar is not permanently locked once it has passed through the Jar Sealer.

## Preservation effect

Sealed food uses a spoilage rate multiplier of **0.10×** before storage conditions are applied.

Preservation methods can combine. For example, Sweet Berry Jam is already Sugared and can also be Sealed. The preservation multipliers are multiplied together, so a sealed sugared food receives both effects.

Storage then applies on top of the preservation multiplier. Refrigeration can therefore further slow an already preserved food, while freezing can stop freshness aging entirely.

See [Fermentation & Preservation](/recipes/fermentation-preservation/) for the full preservation table.

## Current jarred food

Sweet Berry Jam is the current cooking recipe that directly consumes a Glass Jar and produces a filled open jarred food. The jar can then be sealed at the Jar Sealer.

The jam recipe uses:

- Sweet Berry Compote
- Powdered Sugar
- 1 Glass Jar

It cooks in a Saucepan for 12 seconds at 90 to 103 °C with no added water.

## Related pages

- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Desserts & Sweet Foods](/recipes/desserts-sweet-foods/)
- [Saucepan](/cooking/saucepan/)
- [Cold Storage](/storage/cold-storage/)
- [Recipe Catalog](/recipes/overview/)
