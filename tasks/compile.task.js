const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')

const config = require('./config')
const processors = [
  cssnext()
]

module.exports = function(BrowserSyncServer) {
  function CompileTask(done) {
    return gulp
      .src(config.paths.stylesheets)
      .pipe(sourcemaps.init())
        .pipe(postcss(processors))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.dist))
      .pipe(BrowserSyncServer.stream())
  }

  CompileTask.description = 'Compile the Stylesheets'

  return CompileTask
}
