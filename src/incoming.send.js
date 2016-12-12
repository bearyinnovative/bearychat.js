import fetch from 'isomorphic-fetch';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Send payload to incoming hook.
 */
export default function(hook, payload, callback) {
  if (typeof payload !== 'string') {
    payload = JSON.stringify(payload);
  }

  return fetch(hook, {
    method: 'POST',
    headers,
    body: payload,
  });
};
