// Generated by ./scripts/generate-api with OpenAPI@1.0.0
// for full api documentation, visit https://github.com/bearyinnovative/OpenAPI
import fetch from 'isomorphic-fetch';
import { getBasePath } from './api';
import { validate } from './_validate';

export default function messageUpdateText(payload) {
  return new Promise((resolve, reject) => {
    const err = validate('/message.update_text', payload);
    if (err) {
      return reject(err);
    }

    const opts = {
      headers: {'Accept': 'application/json'},
      method: 'PATCH',
    };
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(payload);

    const api = getBasePath('https://api.bearychat.com/v1') + '/message.update_text';
    return fetch(api, opts);
  });
}