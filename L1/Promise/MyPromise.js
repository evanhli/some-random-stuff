class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined;
    this.reason = undefined;
    this.resolutions = [];
    this.rejections = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  reject(reason) {
    if (this.state !== 'pending') return;
    this.state = 'rejected';
    this.reason = reason;
    this.callRejectionHandlers();

    this.resolutions.splice(0).forEach(resolution => {
      resolution.promise.reject(reason);
    })
  }

  resolve(val) {
    if (this.state !== 'pending') return;
    this.state = 'resolved';
    this.value = val;
    this.callResolutionHandlers();
  }

  callRejectionHandlers() {
    this.rejections.splice(0).forEach(rejection => {
      try {
        const ret = rejection.handler(this.reason);
        if (ret && ret instanceof MyPromise) {
          ret.then((v) => {
            rejection.promise.resolve(v);
          }).catch((e) => {
            rejection.promise.reject(e);
          })
        } else {
          rejection.promise.resolve(ret);
        }
      } catch (e) {
        rejection.promise.reject(e);
      }
    })
  }

  callResolutionHandlers() {
    this.resolutions.splice(0).forEach(resolution => {
      try {
        const ret = resolution.handler(this.value);
        if (ret && ret instanceof MyPromise) {
          ret.then((v) => {
            resolution.promise.resolve(v);
          }).catch((e) => {
            resolution.promise.reject(e);
          })
        } else {
          resolution.promise.resolve(ret);
        }
      } catch (e) {
        resolution.promise.reject(e);
      }
    })
  }

  then(resolutionHandler, rejectionHandler) {
    const newHandler = new MyPromise(() => {});

    if (typeof resolutionHandler === 'function') {
      this.resolutions.push({
        handler: resolutionHandler,
        promise: newHandler
      });
    }

    if (typeof rejectionHandler === 'function') {
      this.rejections.push({
        handler: rejectionHandler,
        promise: newHandler
      })
    }

    if (this.state === 'resolved') {
      this.callResolutionHandlers();
    }

    if (this.state === 'rejected') {
      newHandler.reject(this.reason);
    }

    return newHandler;
  }

  catch(resolutionHandler) {
    const newHandler = new MyPromise(() => {});
    this.rejections.push({
      handler: resolutionHandler,
      promise: newHandler
    });

    if (this.state === 'rejected') {
      this.callRejectionHandlers();
    }

    return newHandler;
  }
}

module.exports = MyPromise;
