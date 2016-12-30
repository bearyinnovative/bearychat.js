import Client from './rtm.client';
import message from './rtm.message';

function currentTeamInfo(token) {
  return (new Client(token)).currentTeamInfo();
}

function currentTeamMembers(token) {
  return (new Client(token)).currentTeamMembers();
}

function currentTeamChannels(token) {
  return (new Client(token)).currentTeamChannels();
}

function userInfo(token, userId) {
  return (new Client(token)).userInfo(userId);
}

function channelInfo(token, channelId) {
  return (new Client(token)).channelInfo(channelId);
}

function start(token) {
  return (new Client(token)).start();
}

export default {
  currentTeamInfo,
  currentTeamMembers,
  currentTeamChannels,
  userInfo,
  channelInfo,

  start,

  Client,

  message,
};
