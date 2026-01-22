export default {
  // Default locale (Chinese)
  title: 'Joe Yeong 实验室',
  description: 'Joe Poh Sheng YEONG 实验室 - 空间组学研究',

  // i18n configuration
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Joe Yeong 实验室',
      description: 'Joe Poh Sheng YEONG 实验室 - 空间组学研究'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Joe Yeong Lab',
      description: 'Laboratory of Joe Poh Sheng YEONG - Spatial Omics Research'
    }
  },

  base: '/',

  themeConfig: {
    // Chinese locale configuration (root/default)
    nav: [
      { text: '首页', link: '/' },
      { text: '关于Yang', link: '/about-yang' },
      { text: '创新', link: '/innovation' },
      { text: '团队', link: '/team' },
      { text: '研究', link: '/research' },
      { text: '新闻', link: '/news' },
      { text: '平台', link: '/platforms' },
      { text: '联系', link: '/contact' }
    ],
    sidebar: [
      {
        items: [
          { text: '首页', link: '/' },
          { text: '关于Yang', link: '/about-yang' },
          { text: '创新', link: '/innovation' },
          { text: '团队', link: '/team' },
          { text: '研究', link: '/research' },
          { text: '新闻', link: '/news' },
          { text: '平台', link: '/platforms' },
          { text: '联系', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WuyangFF95/WuyangFF95.github.io' }
    ],

    footer: {
      message: 'Joe Yeong 实验室 - 空间组学研究',
      copyright: '版权所有 © 2025 Joe Poh Sheng YEONG'
    },

    // English locale configuration
    locales: {
      en: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About Yang', link: '/en/about-yang' },
          { text: 'Innovation', link: '/en/innovation' },
          { text: 'Team', link: '/en/team' },
          { text: 'Research', link: '/en/research' },
          { text: 'News', link: '/en/news' },
          { text: 'Platforms', link: '/en/platforms' },
          { text: 'Contact', link: '/en/contact' }
        ],
        sidebar: [
          {
            items: [
              { text: 'Home', link: '/en/' },
              { text: 'About Yang', link: '/en/about-yang' },
              { text: 'Innovation', link: '/en/innovation' },
              { text: 'Team', link: '/en/team' },
              { text: 'Research', link: '/en/research' },
              { text: 'News', link: '/en/news' },
              { text: 'Platforms', link: '/en/platforms' },
              { text: 'Contact', link: '/en/contact' }
            ]
          }
        ],

        footer: {
          message: 'Joe Yeong Laboratory - Spatial Omics Research',
          copyright: 'Copyright © 2025 Joe Poh Sheng YEONG'
        }
      }
    }
  }
}
