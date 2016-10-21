/* eslint-disable no-undef */

'use strict';

const konami = document.querySelector('.konami');

if (window.speechSynthesis && konami) {
  console.log('https://en.m.wikipedia.org/wiki/Konami_Code');

  const songs = [
    'The power of love, is a curious thing. Make a one man weep, make another man sing. Change a hawk to a little white dove. More than a feeling that\'s the power of love.',
    'Never gonna give you up, never gonna let you down. Never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye. Never gonna tell a lie and hurt you.',
    'Walking like a man. Hitting like a hammer. She\'s a juvenile scam. Never was a quitter. Tasty like a raindrop. She\'s got the look.'
  ];

  const keys = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  let index = 0;

  let elements = konami.querySelectorAll('kbd');

  window.addEventListener('keydown', event => {
    window.speechSynthesis.cancel();

    if (keys[index] === event.key) {
      konami.classList.add('active');

      index += 1;

      elements[index - 1].classList.add('active');
    }

    if (keys.length === index) {
      index = 0;

      setTimeout(() => {
        konami.classList.remove('active');
        elements.forEach(element => element.classList.remove('active'));
      }, 1000);

      const lyrics = songs[Math.round(Math.random() * (songs.length - 1))];

      window.speechSynthesis.speak(new SpeechSynthesisUtterance(lyrics));
    }
  });
}
