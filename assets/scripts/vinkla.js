'use strict';

if ('speechSynthesis' in window) {
  const songs = [
    'The power of love, is a curious thing. Make a one man weep, make another man sing. Change a hawk to a little white dove. More than a feeling that\'s the power of love.',
    'Never gonna give you up, never gonna let you down. Never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye. Never gonna tell a lie and hurt you.'
  ];

  let keys = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'a',
    'b',
  ];

  let index = 0;

  window.addEventListener('keydown', function(event) {
    window.speechSynthesis.cancel();

    if (keys[index] === event.key) {
      console.log(keys[index++]);
    }

    if (keys.length === index) {
      index = 0;

      const lyrics = songs[Math.round(Math.random() * (songs.length - 1))];

      window.speechSynthesis.speak(new SpeechSynthesisUtterance(lyrics));
    }
  });
}
