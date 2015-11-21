import config from './';

export default {
  src: config.source + '/*.html',
  dest: config.public,
  settings: {
    collapseWhitespace: true,
    minifyJS: true
  }
};
