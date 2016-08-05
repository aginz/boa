const gulp = require('gulp')

const config = require('./config')
const CompileTask = require('./compile.task')

module.exports = function(BrowserSyncServer) {
  function ServerTask() {
    BrowserSyncServer.init({
      server: {
        baseDir: './'
      }
    })

    gulp.watch(config.paths.stylesheets, ['compile'])
    gulp.watch('src/**/__test__/*.html').on('change', BrowserSyncServer.reload)
  }

  ServerTask.description = 'Create a local server'

  return ServerTask
}
