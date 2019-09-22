require('../Function')
const assert = require('chai').assert;

describe('Function.call', () => {
  it('attaches a new function to the prototype', () => {
    const test = function () {};
    assert.isDefined(test.myCall);
  })

  it('calls a function with `this` set', () => {
    const test = function() {
      return this.foo + ' bar'
    };
    assert.strictEqual('foo bar', test.myCall({ foo: 'foo' }));
  })

  it('calls a function with the given args list', () => {
    const test = function(a, b, c) {
      return '' + a + b + c;
    };
    assert.strictEqual('abc', test.myCall({}, 'a', 'b', 'c'));
  })


  it('calls a function with the given args list with null `this`', () => {
    const test = function(a, b, c) {
      return '' + a + b + c;
    };
    assert.strictEqual('abc', test.myCall(null, 'a', 'b', 'c'));
  })
});


describe('Function.apply', () => {
  it('attaches a new function to the prototype', () => {
    const test = function () {};
    assert.isDefined(test.myApply);
  })

  it('calls a function with `this` set', () => {
    const test = function() {
      return this.foo + ' bar'
    };
    assert.strictEqual('foo bar', test.myApply({ foo: 'foo' }));
  })

  it('calls a function with the given args list', () => {
    const test = function(a, b, c) {
      return '' + a + b + c;
    };
    assert.strictEqual('abc', test.myApply({}, ['a', 'b', 'c']));
  })


  it('calls a function with the given args list with null `this`', () => {
    const test = function(a, b, c) {
      return '' + a + b + c;
    };
    assert.strictEqual('abc', test.myApply(null, ['a', 'b', 'c']));
  })
});

describe('Function bind', () => {
  it('attaches a new function to the prototype', () => {
    const test = function () {};
    assert.isDefined(test.myBind);
  })

  it('returns a function', () => {
    const test = function() {};
    assert.isFunction(test.myBind())
  })

  it('sets the this of the function', () => {
    const test = {
      whatIsThis: function () {
        return this.test;
      }
    }
    assert.isUndefined(test.whatIsThis());
    const bound = test.whatIsThis.myBind({ test: 'foo' });
    assert.strictEqual('foo', bound())
  })

  it('partially applies parameters', () => {
    const test = {
      whatIsThis: function (a, b, c) {
        return '' + this.test + a + b + c;
      }
    }
    assert.strictEqual('undefinedabc', test.whatIsThis('a', 'b', 'c'));
    const bound = test.whatIsThis.myBind({ test: 'foo' }, 'a', 'b');
    assert.equal(bound('c'), 'fooabc');
  })
});
