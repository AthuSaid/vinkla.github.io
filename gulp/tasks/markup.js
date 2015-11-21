import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import config from '../config/markup';

gulp.task('markup', () => {
  return gulp.src(config.src)
    .pipe(htmlmin(config.settings))
    .pipe(gulp.dest(config.dest))
});
