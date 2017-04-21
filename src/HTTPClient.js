import setInPath from './_setInPath';
import validation from './_validation.json';

class ResponseError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}

class UnexpectedCodeError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

function tryParseResponse(response) {
  return response.json()
    .then(data => ({
      data,
      response,
    }))
    .catch(() => ({
      // throw ResponseError in case response body is not JSON.
      error: new ResponseError(response.statusText, response),
    }));
}

function callMethod(method, payload) {
  return new Promise((resolve, reject) => {
    method.call(this, payload)
      .then(tryParseResponse)
      .then(({ data, response, error }) => {
        if (error) {
          reject(error);
        } else if (typeof data.code === 'number' && data.code !== 0) {
          reject(new UnexpectedCodeError(data.error, data.code));
        } else if (response.status < 200 || response.status >= 300) {
          reject(new ResponseError(response.statusText, response));
        } else {
          resolve(data);
        }
      });
  });
}

function getWrappedMethod(path, token) {
// eslint-disable-next-line import/no-dynamic-require,global-require
  const method = require(`.${path}`);
  let settings = validation[path];
  settings = settings[Object.keys(settings)[0]];
  const needAuth = settings.authentication !== false;
// eslint-disable-next-line func-names
  return function (payload) {
    if (needAuth) {
      payload = Object.assign({}, payload, {
        token,
      });
    }
    return callMethod.call(this, method, payload);
  };
}

export default class HTTPClient {
  constructor(token) {
    Object.keys(validation).forEach((path) => {
      const setPath = path.replace(/^\//, '');
      setInPath(this, setPath, getWrappedMethod(path, token));
    });
  }
}
