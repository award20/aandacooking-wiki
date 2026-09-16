import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://aandacooking.haxuslate.com',
    trailingSlash: 'always',
    integrations: [
        starlight({
            title: 'A & A Cooking',
            description: 'Documentation for A & A Cooking, a Fabric cooking and agriculture mod for Minecraft.',
            favicon: '/favicon.svg',
            customCss: ['./src/styles/custom.css'],
            components: {
                ThemeProvider: './src/components/ThemeProvider.astro',
                ThemeSelect: './src/components/ThemeSelect.astro'
            },
            social: [
                { icon: 'github', label: 'Wiki repository', href: 'https://github.com/award20/aandacooking-wiki' }
            ],
            sidebar: [
                { label: 'Wiki Home', slug: '' },
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'About A & A Cooking', slug: 'getting-started/about' },
                        { label: 'First Steps', slug: 'getting-started/first-steps' },
                        { label: 'Ingredient Preparation', slug: 'getting-started/ingredient-preparation' }
                    ]
                },
                {
                    label: 'Cooking',
                    items: [
                        { label: 'Cooking Overview', slug: 'cooking/overview' },
                        { label: 'Cookware Overview', slug: 'cooking/cookware' },
                        { label: 'Stockpot', slug: 'cooking/stockpot' },
                        { label: 'Saucepan', slug: 'cooking/saucepan' },
                        { label: 'Skillet', slug: 'cooking/skillet' },
                        { label: 'Wok', slug: 'cooking/wok' },
                        { label: 'Oven Bakeware', slug: 'cooking/oven-bakeware' }
                    ]
                },
                {
                    label: 'Stations',
                    items: [
                        { label: 'Kitchen Sink', slug: 'stations/kitchen-sink' },
                        { label: 'Cutting Board', slug: 'stations/cutting-board' },
                        { label: 'Blender', slug: 'stations/blender' },
                        { label: 'Mixing Bowl', slug: 'stations/mixing-bowl' },
                        { label: 'Mortar and Pestle', slug: 'stations/mortar-and-pestle' },
                        { label: 'Stovetop/Oven', slug: 'stations/stovetop-oven' }
                    ]
                },
                {
                    label: 'Kitchen Storage',
                    items: [
                        { label: 'Storage Overview', slug: 'storage/overview' },
                        { label: 'Cabinets & Counters', slug: 'storage/cabinets-counters' },
                        { label: 'Cold Storage', slug: 'storage/cold-storage' }
                    ]
                },
                {
                    label: 'Agriculture',
                    items: [
                        { label: 'Agriculture Overview', slug: 'agriculture/overview' },
                        { label: 'Cultivated Soil', slug: 'agriculture/cultivated-soil' },
                        { label: 'Crop Growth & Vigor', slug: 'agriculture/crop-growth' },
                        { label: 'Current Crops', slug: 'agriculture/crops' },
                        { label: 'Compost & Fertility', slug: 'agriculture/compost-fertility' }
                    ]
                },
                {
                    label: 'Environment',
                    items: [
                        { label: 'Calendar & Seasons', slug: 'environment/calendar-seasons' },
                        { label: 'Solar Time & Daylight', slug: 'environment/solar-daylight' },
                        { label: 'Weather & Climate', slug: 'environment/weather-climate' }
                    ]
                },
                {
                    label: 'Recipe Book',
                    items: [{ label: 'Overview', slug: 'recipe-book/overview' }]
                },
                {
                    label: 'Commands & Configuration',
                    items: [
                        { label: 'Commands', slug: 'reference/commands' },
                        { label: 'Configuration', slug: 'reference/configuration' }
                    ]
                },
                {
                    label: 'Reference & Support',
                    items: [{ label: 'Documentation Status', slug: 'reference/documentation-status' }]
                },
                {
                    label: 'Development & Roadmap',
                    items: [{ label: 'Planned Features', slug: 'development/planned-features' }]
                },
                { label: 'Haxuslate Website', link: 'https://haxuslate.com/' }
            ],
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
            pagination: false,
            lastUpdated: false
        })
    ]
});
