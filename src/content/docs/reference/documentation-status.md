---
title: Documentation Status
description: How this wiki records source coverage, feature status, and information that still needs verification.
---

This wiki currently describes a pre-alpha development snapshot. It will be updated against a named playtest build when that build is available.

## Version Coverage

| Field | Current basis |
|---|---|
| Minecraft target | 1.21.10 |
| Mod loader | Fabric |
| Development stage | Pre-alpha |
| Source snapshot | A & A Cooking source archive reviewed on September 16, 2026 |
| Exact packaged mod version | Not established from this source-only archive |

The first playtest build is currently expected to use a version such as `0.2.0-alpha.1`. This is a development target, not a released version or a promised release date.

## Feature Status

| Label | Meaning |
|---|---|
| Implemented | Present in the source or build covered by the page |
| In Development | Partially implemented or actively being changed, with remaining work identified |
| Planned | Future work that is not available in the documented version |

An implemented feature can still be part of a pre-alpha mod. The status does not mean it has passed every gameplay test.

## Verification

Source review and the current development record establish what the project defines. Gameplay testing checks how that behavior works in the game. The current core station pass includes the Kitchen Sink, Cutting Board, Blender, Mixing Bowl, Mortar and Pestle, and Stovetop/Oven. Individual cookware coverage now includes the Stockpot, Saucepan, Skillet, and Wok. Oven bakeware and connected kitchen storage are also documented, including Cabinets, Counters, modular Fridge/Freezer layouts, and the current refrigerated/frozen freshness behavior. Individual recipes and presentation details continue to be verified as the playable build changes.

Exact recipes, quantities, controls, commands, and configuration options will be verified as their pages are written. Information that cannot be confirmed will be marked **Needs verification**.

The supplied archive contains the `src` directory, but does not include the Gradle build configuration or a packaged release. Complete build instructions, release downloads, and exact installation requirements remain to be verified.

## Corrections

When reporting a documentation discrepancy, include the wiki page, the mod build you are using, and what you observed. A screenshot or the relevant log message can help establish whether the issue is in the documentation or the mod.
