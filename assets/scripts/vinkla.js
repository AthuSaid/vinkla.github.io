'use strict';

console.log('GitHub: https://github.com/vinkla');
console.log('Medium: https://medium.com/@vinkla');
console.log('Twitter: https://twitter.com/vinkla');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
