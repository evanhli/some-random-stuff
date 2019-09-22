/* eslint no-extend-native: 0 */

Function.prototype.myCall = function(newThis, ...args) {
  if (!newThis) {
    newThis = {};
  }
  // Move function into an object passed in that has `this` set.
  newThis.fn = this;
  return newThis.fn(...args);
}

Function.prototype.myApply = function(newThis, args) {
  if (!newThis) {
    newThis = {};
  }
  newThis.fn = this;
  if (args) {
    return newThis.fn(...args);
  }
  return newThis.fn();
}

Function.prototype.myBind = function(newThis, ...args) {
  const temp = this;
  return function (...args2) {
    return temp.myApply(newThis, [...args, ...args2]);
  }
}
