const observers = [];
const raf = requestAnimationFrame;
const p = performance;

function tick() {
  let len=observers.length, o;
  while (len--) {
    o = observers[len];
    const progress = (p.now() - o[2]) / o[1];
    o[0](progress <= 1 ? progress : 1);
    progress < 1 || observers.splice(len, 1);
  }
  observers.length < 1 || raf(tick);
}

function uot(callback, duration) {
  observers.push([callback, duration, p.now()]) > 1 || raf(tick);
}

export default uot;
