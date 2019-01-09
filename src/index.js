const instances = [];
const raf = requestAnimationFrame;
const p = performance;

/**
 *
 */
function tick() {
  for (let i = instances.length - 1; i >= 0; i -= 1) {
    const instance = instances[i];
    const progress = (p.now() - instance[2]) / instance[1];
    instance[0](progress <= 1 ? progress : 1);
    if (progress >= 1) instances.splice(i, 1);
  }
  if (instances.length > 0) raf(tick);
}

/**
 *
 * @param {function} callback
 * @param {number} duration
 */
function uot(callback, duration) {
  instances.push([callback, duration, p.now()]);
  if (instances.length < 2) raf(tick);
}

export default uot;
