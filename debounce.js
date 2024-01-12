const debounce = (func, delay) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

const debouncedFn = debounce(() => console.log('debouncedFn'), 2000);
debouncedFn()
debouncedFn()
debouncedFn()