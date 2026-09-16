---
title: Fermentation Crock
description: Time-based fermentation station behavior and Recipe Book integration.
---

The Fermentation Crock is A & A Cooking's dedicated time-based fermentation station. Unlike direct processing stations, it is intended for recipes that must remain in progress over time before producing their output.

## Processing behavior

The retained implementation confirms that the Crock:

- tracks fermentation progress persistently
- resumes after save/load
- pauses instead of discarding work when its output is blocked
- uses executable fermentation recipes
- participates in the shared station recipe-selection infrastructure

The exact slot count, all current recipe durations, and presentation details are **Needs verification** until the complete current Crock source/UI is available to the wiki project.

## Recipe Book integration

The Fermentation Crock integrates with:

- **Load Pinned**
- the Recipe Book prerequisite planner
- the connected kitchen storage network
- queued/bulk recipe execution infrastructure

Queued fermentation still processes one valid execution at a time and must satisfy the full fermentation duration for each run.

## Ingredient admission

Recipe-only intermediates must be accepted when an executable Fermentation Crock recipe explicitly requires them. This prevents a mismatch where Recipe Book autofill can insert an intermediate but manual insertion rejects the same valid recipe ingredient.

## Output blocking

If a completed result cannot be placed into the output destination, fermentation pauses rather than overwriting or deleting existing output. Processing can resume when the destination becomes available.

## Current product families

Implemented fermentation/preservation content includes Apple Vinegar, Fermented Soybeans, Salt Brine, Soy Sauce Mash, Soy Sauce, brine-fermented vegetables, and related preserved ingredients.

See [Fermentation & Preservation](/recipes/fermentation-preservation/) for the content overview.

## Related pages

- [Recipe Book](/recipe-book/overview/)
- [Kitchen Storage](/storage/overview/)
- [Rice & Soybean](/ingredients/rice-soybean/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
