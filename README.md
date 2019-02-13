* solved
  * babel-loader version 8+ expected babel version 7+
  * antd style not be imported by Webpack
    > Install npm package `babel-plugin-import` and add config `["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]` in `.babelrc`
  * import autobind-decorator, expected use IE11+ browser
  * upload file response status code 405 Method Not Allowed
    > Because I use route.get instead of route.post
  * webpack-dev-server config proxy don't support post/put request


* unsolved
  * autobind-decorator error > `Reflect.ownKeys called on non-object`
  
  
* knowledge
  * fetch(url, options) return Promise
    > options equal null, it's a get request, options is a config, options.method = 'post', then it's a post requst. options has body(a stringify object) and headers and so on
  * babel
    > * babel-polyfill 提供完整的ES6运行环境(eg: Array.reduce)，在代码的入口全局引入。如Webpack的entry: ['babel/polyfill', 'app.js']。不过对于ES语法(eg: arrow function, esModule)不支持，后续需引入plugins去转换。
      * babel-runtime 需要安装`@babel/runtime`和`@babel/plugin-transform-runtime`
      * babel-register 入口全局引入，动态修改require函数，并解析文件内容
