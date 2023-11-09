const gulp = require('gulp')
const rimraf = require('rimraf') // 用途上类似指令输入 rm -rf 删除某些文件或者文件夹
const path = require('path')
const babelConfig = require(path.resolve(__dirname, '../babel.config.js'))
const babel = require('gulp-babel')
const gulpVue = require('gulp-vue-file')
// const stripCode = require('gulp-strip-code') // 用于删除代码段,从生产生成中删除仅在开发和测试环境中需要的代码，或者删除自定义的国际化信息。 这个插件使用开始和结束注释来标识要剥离的代码段。
const esDir = path.join(process.cwd(), 'es')

function compile () {
  rimraf.sync(esDir) // 清空对应的需要输出的文件里面原来旧的内容

  // 把组件文件里的静态文件不处理直接copy到目标输出目录
  // gulp.src:创建一个流，用于从文件系统读取 Vinyl 对象。
  // gulp.dest:创建一个用于将 Vinyl 对象写入到文件系统的流。
  gulp
    .src(['packages/**/*.@(png|svg)'])
    .pipe(gulp.dest(esDir))
  // ================================ JS 混淆================================
  const source = [
    'packages/**/*.js',
    'packages/**/*.vue',
    'packages/index.js',
    '!packages/*/__tests__/*'
  ]

  // Strip content if needed
  return gulp.src(source)
    .pipe(gulpVue())
    .pipe(babel(babelConfig))
    .pipe(gulp.dest(esDir))
}

const startTime = new Date()
gulp.task('compile-with-es', done => {
  console.log('start compile at ', startTime)
  console.log('[Parallel] Compile to es...')
  compile().on('finish', done)
})

/**
 * 语法参考：https://www.w3cschool.cn/qtaitm/qtaitm-5ckv3ca4.html
 * gulp.series：将任务函数和/或组合操作组合成更大的操作，这些操作将按顺序依次执行。（同步，有顺序要求的任务可以考虑使用）
 * gulp.parallel：将任务函数和/或组合操作组合成更大的操作，这些操作将并行同时执行。(同时执行多个任务没有顺序要求的可以考虑使用)
 */
gulp.task(
  'compile',
  // 'compile-with-es', 'compile-with-lib' 这两个任务同时进行
  // 'compile-finalize' 这个任务在执行完上面两个后才处理
  gulp.series('compile-with-es', done => {
    console.log('end compile at ', new Date())
    console.log('compile time ', (new Date() - startTime) / 1000, 's')
    done()
  })
)
