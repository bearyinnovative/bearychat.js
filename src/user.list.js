// Generated by ./scripts/generate-api with OpenAPI@1.0.0
// for full api documentation, visit https://github.com/bearyinnovative/OpenAPI
import fetch from 'isomorphic-fetch';
import { getBasePath } from './api';
import { validate } from './_validate';

export default function userList(payload) {
  return new Promise((resolve, reject) => {
    const err = validate('/user.list', payload);
    if (err) {
      return reject(err);
    }

    const opts = {
      headers: {'Accept': 'application/json'},
      method: 'GET',
    };
    opts.query = payload;

    const api = getBasePath('https://api.bearychat.com/v1') + '/user.list';
    return fetch(api, opts);
  });
}