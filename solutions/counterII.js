/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  this.current = init;
  return {
    increment: () => ++this.current,
    decrement: () => --this.current,
    reset: () => {
      this.current = init;
      return this.current;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
