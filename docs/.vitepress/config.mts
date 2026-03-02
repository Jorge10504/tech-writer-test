import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'
import spec from './data/openapi.json' with { type: 'json' }

const oasSidebar = useSidebar({
  spec,
  linkPrefix:'/api-reference/operations/'
})

export default defineConfig({
  title: "Transactionify",
  description: "Tech Writing Test",
  base: '/tech-writer-test/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/user-docs/getting-started/overview' },
      { text: 'API Reference', link: '/api-reference/operations/' }
    ],

    sidebar: {
      '/api-reference/': [
        ...oasSidebar.generateSidebarGroups({
          linkPrefix: '/api-reference/operations/'
        })
      ],
      '/user-docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/user-docs/getting-started/overview' },
            { text: 'Authentication', link: '/user-docs/getting-started/authentication' },
            { text: 'Quick Start', link: '/user-docs/getting-started/quick-start' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Data Model', link: '/user-docs/reference/model' },
            { text: 'Pagination', link: '/user-docs/reference/pagination' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Common Errors', link: '/user-docs/support/errors' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jorge10504/tech-writer-test' }
    ]
  }
})