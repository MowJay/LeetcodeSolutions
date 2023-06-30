var TimeLimitedCache = function () {
  this.cache = {};
  this.timeouts = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const returnValue = key in this.cache;
  if (returnValue) clearTimeout(this.timeouts[key]);
  this.cache[key] = value;
  this.timeouts[key] = setTimeout(() => {
    delete this.cache[key];
  }, duration);

  return returnValue;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return key in this.cache ? this.cache[key] : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
