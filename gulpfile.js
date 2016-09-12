const gulp = require('gulp')
const BrowserSyncServer = require('browser-sync').create()

const CompileTask = require('./tasks/compile.task')
const ServerTask = require('./tasks/server.task')

gulp.task('compile', CompileTask(BrowserSyncServer))
gulp.task('server', ['compile'], ServerTask(BrowserSyncServer))
