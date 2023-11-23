* 文件夹目录注释(使用mddir插件生成)
```javascript
    |-- .browserslistrc //适配哪些浏览器
    |-- .editorconfig //代码风格配置
    |-- .eslintrc.js 
    |-- .gitignore
    |-- babel.config.js
    |-- CHANGELOG.md
    |-- lcc-ui.xmind //一些逻辑梳理
    |-- package.json
    |-- README.md
    |-- yarn-error.log
    |-- yarn.lock
    |-- 如何开发一个组件.md
    |-- build
    |   |-- gulpfile.js //用gulp生成es规范的组件库输出
    |   |-- bin
    |   |   |-- es-entry.js 
    |   |   |-- libs-entry.js
    |   |   |-- version.js
    |   |-- cli
    |   |   |-- run.js //各种命令的分配文件
    |   |-- gulp
    |   |-- webpack
    |       |-- webpack.example.js
    |       |-- webpack.libs.js //webpack打包出umd规范的组件库配置
    |-- dist
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- main.js
    |   |-- main.js.LICENSE.txt
    |-- es //es规范输出文件
    |   |-- index.js
    |   |-- checkbox
    |   |   |-- index.js
    |   |-- input
    |   |   |-- index.js
    |   |-- select
    |       |-- index.js
    |-- lib //umd规范输出文件
    |   |-- lccx-ui.common.js
    |-- packages //组件库都在这个目录里开发
    |   |-- index.js
    |   |-- checkbox
    |   |   |-- index.js
    |   |   |-- index.vue
    |   |-- input
    |   |   |-- index.js
    |   |   |-- index.vue
    |   |-- select
    |       |-- index.js
    |       |-- index.vue
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- images
    |       |-- elmdbh.png
    |       |-- elmdbh2.png
    |-- src
        |-- App.vue
        |-- index.js //umd规范的组件编译入口
        |-- main.js //本地查看的编译入口
        |-- assets
        |   |-- logo.png
        |-- components
        |   |-- HelloWorld.vue
        |-- example
            |-- 01.vue

```
