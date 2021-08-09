// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem', // 使用这个插件
      options: {
        typeName: 'BlogPost', // 他会去抓取本地文件数据，然后去生成到 GraphQL这个数据层中，这个数据的类型是BlogPost
        path: './content/blog/**/*.md', // 他去抓取哪些文件，就是从哪抓这些 Markdown文件
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100 // 查询限制默认是100条
        // contentTypes: ['article', 'user'], // 你要查询的数据类型
        contentTypes: ['post', 'tag'], // 这里目前就想查个文章 会去抓取接口下对应的post数据。
        // typeName: 'Strapi' // 然后默认生成的集合名称叫 typeName + contentTypes 所以对于post的内容类型的名字叫Strapipost，tag就是strapiTag
        singleTypes: ['general'] // 没有单个节点 先注释掉
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // 有些数据可能是受保护的 不希望被别人拿到，要通过登录的方式，在这里就需要提供信息了。
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }

      }
    }
  ],
  templates: {
    // 这个名字一定要写集合的名字，集合的名字叫什么不是我们自己创建的，是由gridsome source-strapi帮我们生成的集合
    // 上面，默认有个属性叫 typeName 默认为 Strapi。
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue' // 通常把模板组件放在templates下
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
