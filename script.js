const btnEl = document.querySelector('.btn');
const crossiconEl = document.querySelector('.cross-icon');
const trailercontainerEl = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');
btnEl.addEventListener('click', () => {
  trailercontainerEl.classList.remove('active');
});
crossiconEl.addEventListener('click', () => {
  trailercontainerEl.classList.add('active');
  videoEl.pause();
  videoEl.currentTime = 0;
});
