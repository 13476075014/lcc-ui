module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', { modules: false }] // modules: false 让babel不要把es转成commonjs
  ],
  plugins: [
    [
      'import', // 处理让包可以按需加载
      {
        libraryName: 'lccx-ui', // 包名
        libraryDirectory: 'es' // 目录
      },
      'lccx-ui'
    ]
  ]
}
