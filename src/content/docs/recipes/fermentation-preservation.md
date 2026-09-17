---
title: Fermentation & Preservation
description: Fermentation, pickling, sugaring, sealed jars, and freshness preservation in A & A Cooking.
---

A & A Cooking includes several preservation methods that slow food freshness loss. Preservation is separate from cold storage, but the two systems can combine.

## Preservation rates

Each preservation method applies a spoilage rate multiplier. Lower values mean slower freshness aging.

| Method | Spoilage rate | Current player use |
|---|---:|---|
| Fermented | 0.50× | Apple Vinegar, Fermented Soybeans, Soy Sauce |
| Pickled | 0.25× | Pickled Carrots, Pickled Beetroot, Pickled Onion |
| Sugared | 0.40× | Sweet Berry Jam |
| Sealed | 0.10× | Filled jars sealed with the [Jar Sealer](/stations/jar-sealer/) |

The preservation framework also defines values for Salted, Dried, and Smoked food. Those methods are not yet documented as complete player systems.

## Combining preservation with storage

Preservation and storage multipliers are multiplied together.

For example:

- ambient storage uses a 1.00× storage rate
- refrigeration uses a 0.20× storage rate
- freezing uses a 0.00× storage rate

A sealed food at room temperature therefore ages at 0.10× its normal rate. A sealed food in a refrigerator ages at 0.02× its normal rate. Frozen food does not age while it remains frozen because the storage rate is 0.00×.

Multiple preservation methods can also combine. A sealed Sweet Berry Jam keeps its Sugared preservation and gains Sealed preservation.

## Fermentation Crock

The [Fermentation Crock](/stations/fermentation-crock/) handles recipes that require timed fermentation.

Fermentation progress:

- persists through save and load
- pauses when the output cannot be accepted
- integrates with Load Pinned
- participates in [Recipe Book](/recipe-book/overview/) prerequisite planning
- can access the connected kitchen storage network

Each fermentation execution must complete its full processing time.

## Fermented foods

Current fermented products include:

| Recipe ID | Product | Fermentation time |
|---|---|---:|
| `apple_vinegar` | Apple Vinegar | 5 minutes |
| `soybean_fermented` | Fermented Soybeans | 6 minutes 40 seconds |
| `soybean_sauce` | Soy Sauce | 10 minutes |

Soy Sauce also depends on Soy Sauce Mash, which is prepared in the [Mixing Bowl](/stations/mixing-bowl/) before fermentation.

## Pickled vegetables

Current brine fermentation includes:

| Recipe ID | Product | Fermentation time |
|---|---|---:|
| `carrot_pickled` | Pickled Carrots | 5 minutes |
| `beetroot_pickled` | Pickled Beetroot | 5 minutes |
| `onion_pickled` | Pickled Onion | 5 minutes |

These foods use Salt Brine as part of their preservation chain.

## Salt Brine

`aandacooking:salt_brine` is prepared in a [Saucepan](/cooking/saucepan/) for 6 seconds at 75 to 95 °C.

Salt itself is a pantry ingredient obtained through structure loot. Drawing water from the [Kitchen Sink](/stations/kitchen-sink/) does not create salt.

## Sugared preserves

Sweet Berry Jam uses the Sugared preservation method. It is cooked in a [Saucepan](/cooking/saucepan/) from Sweet Berry Compote, Powdered Sugar, and a Glass Jar.

The result is a filled open jar. It can then be sealed at the [Jar Sealer](/stations/jar-sealer/) for an additional preservation effect.

## Jar sealing

The [Jar Sealer](/stations/jar-sealer/) adds the Sealed preservation method to filled jars.

The sealing flow is:

1. prepare a filled open jarred food
2. hold it while using the [Jar Sealer](/stations/jar-sealer/)
3. provide one Glass Jar Lid from the player inventory
4. the jar becomes sealed

Using a sealed jar opens it again and removes the Sealed state. The food's other preservation methods remain in place.

See [Jar Sealer](/stations/jar-sealer/) for crafting and interaction details.

## Preservation dependencies

Preserved products can become prerequisites for later meals. Examples include:

- Soy Sauce and Sweet Soy Glaze feeding glazed proteins, fried Rice, noodles, and bowls
- Pickled vegetables feeding Rice bowls and tofu dishes
- Apple Vinegar feeding Herb Apple Vinaigrette
- Sweet Berry Jam feeding sweet foods such as Sweet Berry Toast

The [Recipe Book](/recipe-book/overview/) can expose these prerequisite chains when a required preserved ingredient is missing.

## Related pages

- [Fermentation Crock](/stations/fermentation-crock/)
- [Jar Sealer](/stations/jar-sealer/)
- [Cold Storage](/storage/cold-storage/)
- [Rice & Soybean](/ingredients/rice-soybean/)
- [Soybean & Tofu Foods](/recipes/soybean-tofu-foods/)
- [Desserts & Sweet Foods](/recipes/desserts-sweet-foods/)
- [Recipe Catalog](/recipes/overview/)
