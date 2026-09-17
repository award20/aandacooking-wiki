# A & A Cooking Wiki

Documentation for A & A Cooking, a Fabric mod for Minecraft 1.21.10.

The mod expands cooking and agriculture with ingredient preparation, cookware, dedicated kitchen stations, recipe discovery, storage, farming, fermentation, and related food production systems. A & A Cooking is currently in pre alpha development, so the wiki changes as the implementation changes.

The published wiki is available at [aandacooking.haxuslate.com](https://aandacooking.haxuslate.com).

## Documentation status

Wiki pages use the following status categories:

- **Implemented**: behavior confirmed in the current project source
- **In development**: active work is present, but behavior or presentation may still change
- **Planned**: future content that is not currently available

Planned systems are kept separate from implemented mechanics. Details that cannot be confirmed from the source or gameplay testing are marked for verification.

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
- Development status and planned features

The current core documentation includes the project overview, First Steps and Ingredient Preparation guides, core processing stations, Stovetop/Oven, dedicated Stockpot/Saucepan/Skillet/Wok guides, oven bakeware, connected kitchen storage, Cabinets/Counters, modular Fridge/Freezer layouts, Recipe Book coverage, Cultivated Soil, crop growth/vigor, Tomato and Onion profiles, Compost/fertility, the Game Calendar, solar time/daylight, and local weather/climate diagnostics. The wiki now also includes a central `/aacooking` command reference, a configuration guide for the currently established time/calendar/climate settings, an ingredient reference layer, Rice/Soybean production chain coverage, Recipe Notes and discovery, the implemented Fermentation Crock/preservation foundation, Soups & Stews, Breads & Baked Foods, Pasta & Noodles, Eggs & Dairy, Stir Fries & Seared Foods, Drinks, Herbs & Seasonings, and Sauces & Intermediates catalogs. The retained Batch 22 content snapshot contained 230 Recipe Book entries, so individual recipe documentation will expand by category rather than as one monolithic page.

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

## Source and verification

The current A & A Cooking source is the authority when it conflicts with earlier notes or summaries. The wiki does not present planned features as implemented. Exact release and installation information will be expanded when it has been confirmed for public playtesting.

Maintained by [Haxuslate](https://haxuslate.com).


## Current system guides

Dedicated reference pages are available for the Stockpot, Saucepan, Skillet, Wok, Iron oven bakeware, Fermentation Crock, connected kitchen storage, Cabinets/Counters, modular Fridge/Freezer cold storage, agriculture, Cultivated Soil, crop behavior, the calendar, solar/daylight behavior, weather/climate systems, ingredients, Rice/Soybean production chains, Soups & Stews, Breads & Baked Foods, Pasta & Noodles, Eggs & Dairy, Stir Fries & Seared Foods, Drinks, Herbs & Seasonings, Sauces & Intermediates, Recipe Notes, fermentation/preservation, `/aacooking` commands, and configuration areas in addition to the shared overview pages.
