import uot from './../../src/index.js';

let count = 0;
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('ul').innerHTML += `<li></li>`;
  let savedCount = count;
  uot(progress => {
    progress = easeInOutQuad(progress);
    document.querySelectorAll('li')[savedCount].textContent = progress.toFixed(2);
    if (progress === 1) console.log('complete');
  }, 5000);
  count += 1;
});

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
