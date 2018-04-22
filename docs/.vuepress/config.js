module.exports = {
  base: '/vuetest/',//默认页面
  title: 'vuepress-test',//title
  description: '随便写点什么',
  themeConfig: {
    repo: 'octopusccc1',//链接到你的github
    nav: [//导航栏随便来点什么，链接到的文件都是markdown文件
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
     ],
    sidebar: [//侧边栏也随便来点什么，
      ['/', '介绍'],
      ['/getstart/', '起步'],
      ['/api/', 'API文档'],
      ['/example/', '示例']

    ],
  }
}