module.exports = {
    title: '首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '前端', // meta 中的描述文字，用于SEO
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ]  //网页icon
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'lastUpdate',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'GIT', link: '/pages/git/GIT.md' }
                ]
            }
        ],
        sidebar: {
            '/pages/git/': [
                {
                    title: 'GIT相关',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['GIT.md', 'GIT']
                    ]
                }
            ],
        }
    }
}