# A & A Cooking Wiki

Documentation for A & A Cooking, a Fabric mod for Minecraft 1.21.10.

The mod expands cooking and agriculture with ingredient preparation, cookware, dedicated kitchen stations, recipe discovery, storage, farming, fermentation, and related food production systems. A & A Cooking is currently in pre-alpha development, so the wiki changes as the implementation changes.

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
- Fermentation and other preservation-related systems
- Commands, configuration, and technical information
- Development status and planned features

The initial release contains the project overview, documentation status, and planned development pages. Detailed station, recipe, ingredient, agriculture, command, and configuration pages will be added as their behavior is verified.

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
