class Request {
  static postTodos(text) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (Math.random() * 10 < 5) throw new Error('Failure');
          resolve(text);
        } catch (error) {
          reject(error);
        }
      }, Math.random() * 1000);
    });
  }
}

export default Request;
