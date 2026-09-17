---
title: Fermentation Crock
description: Timed fermentation station behavior and Recipe Book integration.
---

The Fermentation Crock is A & A Cooking's dedicated timed fermentation station. Unlike direct processing stations, it is intended for recipes that must remain in progress over time before producing their output.

## Processing behavior

The Fermentation Crock:

- tracks fermentation progress persistently
- resumes after save and load
- pauses instead of discarding work when its output is blocked
- uses executable fermentation recipes
- participates in the shared station recipe selection infrastructure

The exact slot count, all recipe durations, and some presentation details are still **Needs verification** and will be added as the Fermentation Crock guide is expanded.

## Recipe Book integration

The Fermentation Crock integrates with:

- **Load Pinned**
- the Recipe Book prerequisite planner
- the connected kitchen storage network
- queued/bulk recipe execution infrastructure

Queued fermentation still processes one valid execution at a time and must satisfy the full fermentation duration for each run.

## Ingredient admission

Recipe only intermediates must be accepted when an executable Fermentation Crock recipe explicitly requires them. This prevents a mismatch where Recipe Book autofill can insert an intermediate but manual insertion rejects the same valid recipe ingredient.

## Output blocking

If a completed result cannot be placed into the output destination, fermentation pauses rather than overwriting or deleting existing output. Processing can resume when the destination becomes available.

## Current product families

Implemented fermentation content includes Apple Vinegar, Fermented Soybeans, Soy Sauce, and brine fermented vegetables. Salt Brine and Soy Sauce Mash are prerequisite intermediates in those preservation chains.

See [Fermentation & Preservation](/recipes/fermentation-preservation/) for the content overview.

## Related pages

- [Recipe Book](/recipe-book/overview/)
- [Kitchen Storage](/storage/overview/)
- [Rice & Soybean](/ingredients/rice-soybean/)
- [Fermentation & Preservation](/recipes/fermentation-preservation/)
- [Jar Sealer](/stations/jar-sealer/)
