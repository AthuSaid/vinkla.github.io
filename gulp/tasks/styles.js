import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import csswring from 'csswring';
import handleErrors from '../lib/handleErrors';
import config from '../config/styles';

gulp.task('styles:development', () => {
  const processors = [autoprefixer(config.autoprefixer)];

  return gulp.src(config.src)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('styles:production', () => {
  const processors = [
    autoprefixer(config.autoprefixer),
    mqpacker,
    csswring
  ];

  return gulp.src(config.src)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dest));
});
