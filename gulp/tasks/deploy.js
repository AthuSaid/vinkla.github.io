import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import open from 'open';
import config from '../config/deploy';

gulp.task('gh-pages', () => {
  return gulp.src(config.src)
    .pipe(ghPages())
    .on('end', () => {
      open(config.url);
    });
});

gulp.task('deploy', ['build:production', 'gh-pages', 'clean']);
