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
                    items: [{ label: 'About A & A Cooking', slug: 'getting-started/about' }]
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
