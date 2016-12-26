import fetch from 'isomorphic-fetch';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Send payload to incoming hook.
 */
export default function (hook, payload) {
  let body = payload;
  if (typeof payload !== 'string') {
    body = JSON.stringify(payload);
  }

  return fetch(hook, {
    method: 'POST',
    headers,
    body,
  });
}
