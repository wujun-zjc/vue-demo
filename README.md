# vue-demo

    > A Vue.js project

# Build Setup

    ``` bash
    # install dependencies
    npm install

    # serve with hot reload at localhost:8080
    npm run dev

    # build for production with minification
    npm run build

    # build for production and view the bundle analyzer report
    npm run build --report

    # run unit tests
    npm run unit

    # run e2e tests
    npm run e2e

    # run all tests
    npm test
    ```

    For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 规范 (https://cn.vuejs.org/v2/style-guide/)

# vue-project

    ├── README.md            
    ├── package.json                npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── index.html                  网页模板
    ├── .babelrc                    babel配置文件
    ├── .postcssrc.js               postcss配置文件,css自动补全前缀
    ├── .editorconfig               eslint配置文件,检测js语法规范性
    ├── .eslintrc.js                eslint依赖的模块配置,检测js语法规范性
    ├── build                       webpack配置文件，dev模式下的配置文件和build的配置文件
    │  └── build-server.js          运行本地构建服务器，可以访问构建后的页面
    │  └── build.js                 生产环境构建脚本
    │  └── dev-client.js            开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
    │  └── dev-server.js            运行本地开发服务器
    │  └── utils.js                 构建相关工具方法
    │  └── webpack.base.conf.js     wabpack基础配置
    │  └── webpack.dev.conf.js      wabpack开发环境配置
    │  └── webpack.prod.conf.js     wabpack生产环境配置
    ├── config                      打包配置项目录
    │  └── dev.env.js               开发环境变量
    │  └── index.js                 项目配置文件
    │  └── prod.env.js              生产环境变量
    │  └── test.env.js              测试环境变量
    ├── src
    |   └── api                     文件夹,数据请求接口封装
    │   └── assets                  静态文件资源,图片、字体图标等，这里的资源会经过loader加载器处理
    │      └── images
    │        └── logo.png
    │   └── components              公共组件目录，复用率较高的组件可以放在这里
    │      └── title.vue
    │   └── mixins                  组件初始化选项象的混入，目录用于存放复用率较高的组件初始化选项
    │   └── router                  vue-router配置项
    │      └── index.js
    │   └── store                   vuex配置项
    │        └── index.js           store项目入口
    │        └── getters.js         store数据状态派生值
    │        └── modules            状态管理模块目录
    │   └── views                   项目中用到的组件视图,按一定的路由视图或功能视图进行自定义
    │        └──view1.vue           页面级组件，放在 views 目录里面，有子组件时，可以建立子目录
    │          └──component1.vue    功能组件，公用的放在 components 目录，否则放在 views 子目录
    │   └── App.vue                 项目组件入口
    |   └── main.js                 项目的入口文件，wenpack已这个项目为入口进行模块依赖打包
    |   └── permission.js           可选，路由权限控制
    ├── static                      静态资源存放目录，这里的资源不会做任何处理
    ├── dist                        打包后的目标文件，用于部署到服务器上
    ├── mock                        mock数据目录
    │  └── hello.js
    └── test                        测试文件目录（unit&e2e）
    └── unit                      单元测试
        └── index.js                入口脚本
        └── karma.conf.js           karma配置文件
        └── specs                   单测case目录
        └── Hello.spec.js


# package.json

    {
        "name": "vue-demo",                            项目名称
        "version": "1.0.0",                            项目版本
        "description": "A Vue.js project",             项目描述
        "author": "wujun <770757820@qq.com>",          项目作者
        "private": true,                               项目私有
        "scripts": {                                   node命令
        },
        "dependencies": {                              生产依赖     (打包到项目代码中,运行依赖)
        },
        "devDependencies": {                           开发依赖     (不打包,仅便于开发)
        },
        "engines": {                                   对node版本的以及npm版本的要求
            "node": ">= 4.0.0",
            "npm": ">= 3.0.0"
        },
        "browserslist": [                              浏览器要求，vue项目不支持ie8，因为ie8是es3，尚没有Object.defineProperty属性
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
        ]
    }

# build config 

    详情见  (https://www.cnblogs.com/tjyoung/p/7652930.html)

# router

    路由配置项,设置路由视图，vue-router2.2后可以动态设置路由通过router.addRoutes()方法，可以实现权限管理
    {
        path:'',
        name:'',/** 如果不能定位到具体视图不要设定name值 */
        component:Layout, /** 或者() => import('@/views/Layout') */
        meta:{},/** 自定义的信息，用于个性化的处理 */
        children:[/** 子路由 */
            {
                path:'/view',
                name:'view',
                component:View,
                meta:{}
            }
        ]
    }
    路由组件，路由元信息meta配置路由权限
    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            // this route requires auth, check if logged in
            // if not, redirect to login page.
            if (!auth.loggedIn()) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                })
            } else {
                next()
            }
        } else {
            next() // 确保一定要调用 next() 这个方法是确保路由视图能够正确显示的控制
        }
    })

# 组件定义时选项顺序规范

    {
        name:'',
        props:{},
        components:{},
        data(){},
        computed:{},
        watch:{},
        beforeCreate(){},
        created(){},
        beforeMount(){},
        mounted(){},
        beforeDestroy(){},
        destroyed(){},
        methods:{}
    }

# postcssrc.js

    module.exports = {
        "plugins": {
            "postcss-import": {},                   // 解决@import引入路径问题
            "postcss-url": {},                      // 用来处理文件，比如图片文件、字体文件等引用路径的处理
            "postcss-aspect-ratio-mini": {},
            "postcss-write-svg": {
                utf8: false
            },
            "postcss-cssnext": {},                  // 可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理
            "postcss-px-to-viewport": {
                viewportWidth: 750,         // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
                viewportHeight: 1334,       // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
                unitPrecision: 3,       // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
                viewportUnit: 'vw',         // 指定需要转换成的视窗单位，建议使用vw 
                selectorBlackList: ['.ignore', '.hairlines'],       // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
                minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
                mediaQuery: false       // 允许在媒体查询中转换`px`
            },
            "cssnano": {                            //压缩和清理CSS代码,集成了一些其他的PostCSS插件
                preset: "advanced",
                autoprefixer: false,
                "postcss-zindex": false
            }
        }
    }

    特别声明：由于cssnext和cssnano都具有autoprefixer(自动处理浏览器前缀),事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。对于其他的插件使用，稍后会简单的介绍。著作权归作者所有。
    详情见 (https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

# babelrc

    {
        // 此项指明，转码的规则
        "presets": [
            // env项是借助插件babel-preset-env，下面这个配置说的是babel对es6,es7,es8进行转码，并且设置amd,commonjs这样的模块化文件，不进行转码
            ["env", { "modules": false }],
            // 下面这个是不同阶段出现的es语法，包含不同的转码插件
            "stage-2"
        ],
        // 下面这个选项是引用插件来处理代码的转换，transform-runtime用来处理全局函数和优化babel编译
        "plugins": ["transform-runtime",
                    //需要npm install babel-plugin-component -D//官网：http://element-cn.eleme.io/#/zh-CN/component/quickstart
                    ["component", [{
                        "libraryName": "element-ui",           //按需引用element-ui插件
                        //"styleLibraryName": "theme-default"   //按需引用element-ui主题
                    }]],
        // 下面指的是在生成的文件中，不产生注释
        "comments": false,
        // 下面这段是在特定的环境中所执行的转码规则，当环境变量是下面的test就会覆盖上面的设置
        "env": {
            // test 是提前设置的环境变量，如果没有设置BABEL_ENV则使用NODE_ENV，如果都没有设置默认就是development
            "test": {
                "presets": ["env", "stage-2"],
                // instanbul是一个用来测试转码后代码的工具
                "plugins": ["istanbul"]
            }
        }
    }

# 前后端分离

    项目基于 spa 方式实现前后端分离，服务器通过 nginx 区分前端页面和后端接口请求，分发到不同服务。前端物理上只有一个入口页面, 路由由前端控制（基于vue-router），根据不同的 url 加载相应数据和组件进行渲染。

# 接口 mock

    前后端分离后，开发前需要和后端同学定义好接口信息（请求地址，参数，返回信息等），前端通过 mock 的方式，即可开始编码，无需等待后端接口 ready。 项目的本地开发服务器是基于 express 搭建的，通过 express 的中间件机制，我们已经在 dev-server 中添加了接口 mock 功能。 开发时，接口的 mock 数据统一放在 mock 目录下，每个文件内如下：

# 单元测试

    可以为每个组件编写单元测试，放在 test/unit/specs 目录下面, 单元测试用例的目录结构建议和测试的文件保持一致（相对于src），每个测试用例文件名以 .spec.js结尾。 执行 npm run unit 时会遍历所有的 spec.js 文件，产出测试报告在 test/unit/coverage 目录。

# 联调方式

    前后端分离后，由于服务端和前端的开发环境处于2台不同的机器上，前端的异步请求需要代理到后端机器中。 联调的时候，只需通过 proxy 参数运行 dev 脚本即可，所有 mock 目录下定义的接口将会转发到 proxy 参数指定的机器：


# 自定义组件
    page-header     page-sider      form-switch



# UI 框架

# vux

    1.npm install vux --save
    2.npm install vux-loader --save-dev
    3.npm install less less-loader --save-dev
    4.在 build/webpack.base.conf.js 中, 
        (module.exports) 改成 (const webpackConfig) , 
        webpackConfig.resolve.extensions 加上 'less' , 
        最后加上 
            const vuxLoader = require('vux-loader')

            module.exports = vuxLoader.merge(webpackConfig, {
                options: {},
                plugins: [{
                    name: 'vux-ui'
                }]
            })

# element-ui (http://element-cn.eleme.io/#/zh-CN/component/carousel)
# mint-ui (http://mint-ui.github.io/docs/#/zh-cn2/toast)

    1.npm i element-ui -S       npm i mint-ui -S
    2.npm install babel-plugin-component -D
    3.在 babelrc 中 "plugins" 加上:
        [
            "component",
            <!-- [ --> 
                {
                    "libraryName": "mint-ui",
                    "style": true
                },
                <!-- {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-chalk"
                }
            ] -->
        ]

# muse-ui (https://muse-ui.org/#/zh-CN/button)

    1.npm i muse-ui -S
    2.npm i babel-plugin-import less less-loader -D
    3.在 babelrc 中 "plugins" 加上:
        ["import", {
            "libraryName": "muse-ui",
            "libraryDirectory": "lib",
            "camel2DashComponentName": false
        }]



# TODO

    vux         swiper(垂直方向文字滚动)    tabbar(横向scroll)    swipeout		msg		Previewer		Marquee
    mint-ui     cell swipe  
    element-ui  rate
