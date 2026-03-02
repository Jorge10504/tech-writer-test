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
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'API Reference', link: '/api-reference/operations/' }
    ],

    sidebar: {
      '/api-reference/': [
        ...oasSidebar.generateSidebarGroups({
          linkPrefix: '/api-reference/operations/'
        })
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jorge10504/tech-writer-test' }
    ]
  }
})