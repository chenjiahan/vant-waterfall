export let supportsPassive = false;

try {
  const opts = {};
  Object.defineProperty(opts, 'passive', {
    get() {
      /* istanbul ignore next */
      supportsPassive = true;
    }
  });
  window.addEventListener('test-passive', null, opts);
} catch (e) {}

export function on(target, event, handler, passive = false) {
  target.addEventListener(
    event,
    handler,
    supportsPassive ? { capture: false, passive } : false
  );
}

export function off(target, event, handler) {
  target.removeEventListener(event, handler);
}
