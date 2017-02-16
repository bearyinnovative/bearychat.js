// Generated by ./scripts/generate-api with OpenAPI@1.0.0
// for full api documentation, visit https://github.com/bearyinnovative/OpenAPI
import fetch from 'isomorphic-fetch';
import { getBasePath } from './api';
import { validate } from './_validate';

export default function channelJoin(payload) {
  return new Promise((resolve, reject) => {
    const err = validate('/channel.join', payload);
    if (err) {
      return reject(err);
    }

    const opts = {
      headers: {'Accept': 'application/json'},
      method: 'POST',
    };
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(payload);

    const api = getBasePath('https://api.bearychat.com/v1') + '/channel.join';
    return fetch(api, opts);
  });
}