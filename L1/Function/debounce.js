function debounce(fn, time = 0) {
  // set the timeout function in closure scope so that we can clear it on the next function call
  let inDebounce;
  return function(...args) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => fn(...args), time);
  }
}

function throttle(fn, time = 0) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      inThrottle = setTimeout(() => {
        fn(...args)
        inThrottle = null;
      }, time);
    }
  }
}

function log(s) {
  console.log(s);
}

let debounced = debounce(log, 100);

debounced('a')
debounced('b')
debounced('c')
debounced('d')

let throttled = throttle(log, 100);

throttled('a')
throttled('b')

setTimeout(() => throttled('c'), 150);


