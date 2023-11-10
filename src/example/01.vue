<template>
  <div>
    测试使用lccx-ui组件库-01
    <Checkbox/>
  </div>
</template>

<script>
// const LCCXUI = require('lccx-ui') // 全部引入
// const { Checkbox } = require('lccx-ui') // 单组件引入（会打包整个库）

// import Checkbox from 'lccx-ui/packages/checkbox/index' // 单组件引入（这个可以实现打包的时候是按需打包的，不会把整个组件库所有的内容都打包进来）

/**
 * babel.config.js
 * plugins: [
    [
      'import', // 处理让包可以按需加载
      {
        libraryName: 'lccx-ui', // 包名
        libraryDirectory: 'es' // 目录
      },
      'lccx-ui'
    ]
  ]
 */
import { Checkbox } from 'lccx-ui' // 如果要实现按需加载需要安装  yarn add babel-plugin-import -D ，且在babel的配置文件里加上配置

// const LCCXUI = require('../../lib/lccx-ui.common')
// console.log(Checkbox, 'Checkbox')
export default {
  components: { Checkbox: Checkbox }
}
</script>

<style>

</style>
