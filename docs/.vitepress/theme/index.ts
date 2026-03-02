import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import { theme as openApiTheme, useOpenapi } from 'vitepress-openapi/client'
import spec from '../data/openapi.json' with { type: 'json' }

import 'vitepress-openapi/dist/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app, router, siteData }) {
    useOpenapi({ spec })            // <- IMPORTANT
    openApiTheme.enhanceApp({ app, router, siteData })
  }
} satisfies Theme