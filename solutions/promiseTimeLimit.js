/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const timeLimit =
  (fn, t) =>
  (...args) =>
    Promise.race([
      new Promise((res, rej) => {
        fn(...args)
          .then(res)
          .catch(rej);
      }),
      new Promise((_, rej) => setTimeout(() => rej("Time Limit Exceeded"), t)),
    ]);

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
