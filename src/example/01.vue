<template>
  <div>
    测试使用lccx-ui组件库-01
    <Checkbox/>
  </div>
</template>

<script>
// const LCCXUI = require('lccx-ui') //全部引入
// const { Checkbox } = require('lccx-ui') // 单组件引入
// import { Checkbox } from 'lccx-ui'
import Checkbox from 'lccx-ui/packages/checkbox/index' // 单组件引入
// const LCCXUI = require('../../lib/lccx-ui.common')
console.log(Checkbox, 'Checkbox')
export default {
  components: { Checkbox: Checkbox }
}
</script>

<style>

</style>
