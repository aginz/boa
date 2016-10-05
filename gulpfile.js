const gulp = require('gulp')
const BrowserSyncServer = require('browser-sync').create()

const CompileTask = require('./tasks/compile.task')
const ServerTask = require('./tasks/server.task')
const LintTask = require('./tasks/lint.task')

gulp.task('compile', CompileTask(BrowserSyncServer))
gulp.task('server', ['compile'], ServerTask(BrowserSyncServer))
gulp.task('lint', LintTask())
