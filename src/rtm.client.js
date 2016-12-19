import fetch from 'isomorphic-fetch';
import URI from 'urijs';

const DEFAULT_RTM_API_BASE = 'https://rtm.bearychat.com';

class Client {

  constructor(token, opts) {
    opts = opts || {};
    opts.rtmAPIBase = opts.rtmAPIBase || DEFAULT_RTM_API_BASE;

    this.token = token;
    this.rtmAPIBase = opts.rtmAPIBase;
  }

  request(resource, opts) {
    opts = opts || {};

    const query = opts.query || {};
    query.token = this.token;
    delete opts.query;

    const resourceUri = URI(this.rtmAPIBase)
      .path(resource)
      .query(query)
      .toString();
    return fetch(resourceUri, opts)
      .then((resp) => {
        return resp.json().then(({code, error, result}) => {
          if (code !== 0) {
            throw error;
          }

          return result;
        });
      });
  }

  currentTeamInfo() {
    return this.request('v1/current_team.info', {method: 'GET'});
  }

  currentTeamMembers() {
    return this.request('v1/current_team.members', {method: 'GET'});
  }

  currentTeamChannels() {
    return this.request('v1/current_team.channels', {method: 'GET'});
  }

  userInfo(userId) {
    return this.request('v1/user.info', {
      method: 'GET',
      query: {user_id: userId},
    });
  }

  channelInfo(channelId) {
    return this.request('v1/channel.info', {
      method: 'GET',
      query: {channel_id: channelId},
    });
  }

  start() {
    return this.request('start', {method: 'POST'});
  }

}

export default Client;
