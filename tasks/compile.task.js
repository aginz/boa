const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const atImport = require("postcss-import")

const config = require('./config')
const processors = [
  atImport(),
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
