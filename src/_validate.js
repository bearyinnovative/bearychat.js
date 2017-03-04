const validation = require('./_validation.json');

function getValidationSettings(method, path) {
  let rv;

  rv = validation[path];
  if (!rv) return null;

  rv = rv[method];
  if (!rv) return null;

  return rv;
}

function validate(method, path, payload) {
  payload = payload || {};

  const s = getValidationSettings(method, path);
  if (!s) {
    return 'unsupported api';
  }

  if (s.authentication !== false && !payload.token) {
    return 'auth token required';
  }

  if (s.parameters.length > 0) {
    /* eslint-disable */
    for (let ps of s.parameters) {
      if (ps.required && payload[ps.name] === undefined) {
        return `${ps.name} required`;
      }
    }
    /* eslint-enable */
  }

  return null;
}

export default {
  validate,
};
