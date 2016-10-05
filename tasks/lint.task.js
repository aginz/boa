const gulp = require('gulp')
const cssLint = require('gulp-sass-lint')

const config = require('./config')
const cssLintConfig = {
  options: {
    formatter: 'stylish'
  }
}

module.exports = function () {
  function LintTask(done) {
    return gulp
      .src(config.paths.stylesheets)
      .pipe(cssLint(cssLintConfig))
      .pipe(cssLint.format())
      .pipe(cssLint.failOnError())

  }

  LintTask.description = 'Run Lint tools'

  return LintTask
}
