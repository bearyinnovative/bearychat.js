// Generated by ./scripts/generate-api with OpenAPI@1.0.0
// for full api documentation, visit https://github.com/bearyinnovative/OpenAPI
import qs from 'querystring';
import fetch from 'isomorphic-fetch';
import { getBasePath } from './api';
import { validate } from './_validate';

export default function p2pList(payload) {
  return new Promise((resolve, reject) => {
    const err = validate('GET', '/p2p.list', payload);
    if (err) {
      reject(err);
      return;
    }

    const opts = {
      headers: { Accept: 'application/json' },
      method: 'GET',
    };

    /* eslint-disable */
    const api = getBasePath('https://api.bearychat.com/v1') + '/p2p.list?' + qs.stringify(payload);
    /* eslint-enable */
    fetch(api, opts).then(resolve).catch(reject);
  });
}
