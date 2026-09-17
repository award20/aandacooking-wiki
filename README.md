# A & A Cooking Wiki

Documentation for A & A Cooking, a Fabric mod for Minecraft 1.21.10.

The mod expands cooking and agriculture with ingredient preparation, cookware, dedicated kitchen stations, recipe discovery, storage, farming, fermentation, and related food production systems. A & A Cooking is currently in pre alpha development, so the wiki changes as the implementation changes.

The published wiki is available at [aandacooking.haxuslate.com](https://aandacooking.haxuslate.com).

## Documentation coverage

Wiki pages use the following status categories:

- **Implemented**: available in the currently documented version of the mod
- **In development**: active work is present, but behavior or presentation may still change
- **Planned**: future content that is not currently available

Planned systems are kept separate from implemented mechanics. Details that are still changing or not yet fully documented are marked for verification.

## Wiki contents

The documentation is organized around:

- Getting started and basic cooking workflow
- Cooking stations, cookware, and processing
- Recipe Book progression and recipe discovery
- Ingredients, recipes, and preparation states
- Agriculture, seasons, soil, and crop behavior
- Kitchen storage and food production systems
- Fermentation and other preservation systems
- Commands, configuration, and technical information
- Documentation coverage and planned features

The current documentation includes the project overview, First Steps and Ingredient Preparation guides, core processing stations, Stovetop/Oven, dedicated Stockpot/Saucepan/Skillet/Wok guides, oven bakeware, connected kitchen storage, Cabinets/Counters, modular Fridge/Freezer layouts, Recipe Book coverage, Cultivated Soil, crop growth/vigor, Tomato and Onion profiles, Compost/fertility, the Game Calendar, solar time/daylight, and local weather/climate diagnostics. The wiki also includes a central `/aacooking` command reference, configuration guidance, an ingredient reference layer, Rice/Soybean production chain coverage, Recipe Notes and discovery, the Fermentation Crock and preservation foundation, plus category based recipe references for soups, baked foods, desserts, pasta, Rice dishes, Soybean foods, vegetables, eggs, dairy, stir fries, drinks, herbs, sauces, and intermediates.

## Development

The site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Documentation pages are written in Markdown under `src/content/docs/`.

The project uses Node.js 24. Install dependencies and start a local preview with:

```text
npm install
npm run dev
```

Create a production build with:

```text
npm run build
```

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and publishes the wiki through GitHub Pages when changes are pushed to the `main` branch. The repository's Pages settings and custom domain configuration determine the public deployment.

## Documentation approach

The wiki is updated alongside A & A Cooking and keeps planned features separate from implemented mechanics. Exact release and installation information will be added when public playtest builds are available.

Maintained by [Haxuslate](https://haxuslate.com).


## Current system guides

Dedicated reference pages are available for the Stockpot, Saucepan, Skillet, Wok, Iron oven bakeware, Fermentation Crock, connected kitchen storage, Cabinets/Counters, modular Fridge/Freezer cold storage, agriculture, Cultivated Soil, crop behavior, the calendar, solar/daylight behavior, weather/climate systems, ingredients, Rice/Soybean production chains, Soups & Stews, Breads & Baked Foods, Desserts & Sweet Foods, Pasta & Noodles, Rice Dishes & Bowls, Soybean & Tofu Foods, Potato & Vegetable Dishes, Eggs & Dairy, Stir Fries & Seared Foods, Drinks, Herbs & Seasonings, Sauces & Intermediates, Recipe Notes, fermentation/preservation, `/aacooking` commands, and configuration areas in addition to the shared overview pages.
