const gulp = require('gulp')
const path = require('path')
const config = require('./config/')
const isEnv = process.env.NODE_ENV == 'production'

/**
 * 编译代码
 */
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
gulp.task('build', function (callback) {
    console.log('## 代码编译开始')
    webpack(webpackConfig, function (err, state) {
        console.log('## 代码编译完成')
        callback(err)
    })
})

/**
 * 自动部署到服务器
 */
const ftp = require('gulp-sftp')
gulp.task('upload', ['build'], function (callback) {
    console.log('## 正在部署到服务器上')
    var deploy = isEnv ? config.deployDist : config.deployTest
    gulp.src('.' + config.publicPath + '**')
        .pipe(ftp(Object.assign(deploy, {callback})))
})

/**
 * 清除生产目录文件
 */
const del = require('del')
gulp.task('clean', ['upload'], function (callback) {
    console.log('## 已经成功部署到服务器上')
    console.log('## 清除原来编译的代码')
    del(['.' + config.publicPath], callback)
})

/**
 * 构建测试包
 */
gulp.task('buildTest', ['build'])

/**
 * 构建生产包
 */
gulp.task('buildDist', ['build'])

/**
 * 部署到测试服务器上
 */
gulp.task('deployTest', ['build', 'upload', 'clean'])

/**
 * 部署到生产服务器上
 */
gulp.task('deployDist', ['build', 'upload', 'clean'])
