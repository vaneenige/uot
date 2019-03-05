const observers = [];
const raf = requestAnimationFrame;
const p = performance;

function tick() {
  let count = observers.length;
  let observer;
  while (count--) {
    observer = observers[count];
    const progress = (p.now() - observer[3]) / observer[1];
    observer[0](progress <= 1 ? progress : 1);
    if (progress >= 1) {
      (observer[2] -= 1) > 0 || observers.splice(count, 1);
      observer[3] = p.now();
    }
  }
  observers.length < 1 || raf(tick);
}

function uot(callback, duration, repeat = 1) {
  observers.push([callback, duration, repeat, p.now()]) > 1 || raf(tick);
}

export default uot;
