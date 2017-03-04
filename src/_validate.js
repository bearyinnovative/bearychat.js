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

  /* eslint-disable */
  for (let p of Object.keys(s.parameters)) {
    const ps = s.parameters[p];
    if (ps.required && payload[p] === undefined) {
      return `${p} required`;
    }
  }
  /* eslint-enable */

  return null;
}

export default {
  validate,
};
