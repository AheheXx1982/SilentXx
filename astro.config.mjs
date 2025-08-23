import react from '@astrojs/react';
import { siteConfig } from './src/constants/site-config';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import umami from '@yeskunall/astro-umami';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './src/constants/i18n';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site,
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: SUPPORTED_LANGUAGES,
    routing: {
      prefixDefaultLocale: false, // 默认语言无前缀
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    // Enable GitHub Flavored Markdown
    gfm: true,
    // Configure rehype plugins for automatic heading IDs and anchor links
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor-link'],
          },
        },
      ],
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [
    react(),
    icon({
      include: {
        gg: ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
        ri: ['*'],
      },
    }),
    umami({
      id: '8c54da69-94b0-417e-ad3b-0b737dc28937',
      endpointUrl: 'https://stats.cosine.ren',
      hostUrl: 'https://stats.cosine.ren',
    }),
  ],
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [svgr(), tailwindcss()],
  },
  trailingSlash: 'never',
});
