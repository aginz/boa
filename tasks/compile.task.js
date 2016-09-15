const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')

const config = require('./config')
const outputConfig = {
  outputStyle: 'expanded'
}

module.exports = function(BrowserSyncServer) {
  function CompileTask(done) {
    return gulp
      .src(config.paths.stylesheets)
      .pipe(sourcemaps.init())
        .pipe(sass(outputConfig).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.dist))
      .pipe(BrowserSyncServer.stream())
  }

  CompileTask.description = 'Compile the Stylesheets'

  return CompileTask
}
