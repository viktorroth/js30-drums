document.addEventListener('keydown', (ev) => {
  playAudio(ev);
  const key = document.querySelector(`.key[data-key='${ev.keyCode}']`);
  key.classList.add('playing');
  key.addEventListener('transitionend', removeTransition);
})

document.addEventListener('touchstart', (ev) => {
  const key = ev.path[0];
  console.log(key);
  const audio = document.querySelector(`audio[data-key='${key.getAttribute('data-key')}']`);
  if (!audio) return; // stop the function from running
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
  key.addEventListener('transitionend', removeTransition);
})

function removeTransition(ev) {
  this.classList.remove('playing');
}

function playAudio(ev) {
  const audio = document.querySelector(`audio[data-key='${ev.keyCode}']`);
  if (!audio) return; // stop the function from running
  audio.currentTime = 0; // rewind to the start
  audio.play();
}