const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')

const paths = {
  css: './src/**/*.css',
  dist: './dist'
}
const processors = [
  cssnext()
]

gulp.task('compile', CompileTask)
gulp.task('watch', ['compile'], WatchTask)
gulp.task('default', ['compile', 'watch'])

function CompileTask() {
  return gulp
    .src(paths.css)
    .pipe(sourcemaps.init())
      .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dest))
}

function WatchTask() {
  return gulp
    .watch(paths.css, ['compile'])
    .on('change', function (event) {
      console.log(`File ${event.path} was ${event.type}`)
    })
}
