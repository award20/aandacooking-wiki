# A & A Cooking Wiki

Documentation for A & A Cooking, a Fabric mod for Minecraft 1.21.10.

The current wiki is aligned to the final private alpha playtest candidate. It covers the mod's cooking, agriculture, storage, preservation, Recipe Book, weather, world discovery, commands, and configuration systems.

The published wiki is available at [aandacooking.haxuslate.com](https://aandacooking.haxuslate.com).

## Complete references

The wiki includes:

- a **Complete Recipe Index** covering all 233 discoverable Recipe Book entries
- a **Complete Content Index** covering registered player facing blocks and items
- an **Equipment & Crafting** reference for current equipment recipes
- exact cookware tier behavior
- exact freshness, spoilage, storage, and preservation rules
- all nine crop profiles and their climate requirements
- the full named weather condition reference and Weather Chart
- the complete `/aacooking` command surface
- exact server/common and Recipe Book client configuration

## Documentation approach

Cross references link to the relevant wiki page whenever a dedicated page exists. If an entry does not have its own page, it remains plain text until a page is added.

Public documentation describes the mod itself and keeps behind the scenes development terminology out of player facing pages.

Normal prose avoids unnecessary joined compounds. Technical IDs, commands, filenames, routes, and numeric ranges keep the punctuation required by their actual values.

## Development

The site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Documentation pages are written in Markdown under `src/content/docs/`.

The project uses Node.js 24.

```text
npm install
npm run dev
```

Create a production build with:

```text
npm run build
```

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and publishes the wiki through GitHub Pages when changes are pushed to `main`.

Maintained by [Haxuslate](https://haxuslate.com/).
