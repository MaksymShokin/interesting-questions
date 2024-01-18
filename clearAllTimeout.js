/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  // your code here
  let id = setTimeout(null, 0);
  while (id >= 0) {
    window.clearTimeout(id);
    id--;
  }
}

const timer1 = setTimeout(() => console.log('timer 1'), 2000);
const timer2 = setTimeout(() => console.log('timer 2'), 3000);
const timer3 = setTimeout(() => console.log('timer 3'), 4000);
clearAllTimeout();

// This will clear all setInterval timers as well because they share the same id pool as setTimeout.
