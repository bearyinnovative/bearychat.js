const type = {
  UNKNOWN: 'unknown',
  PING: 'ping',
  PONG: 'pong',
  REPLY: 'reply',
  OK: 'ok',
  P2P_MESSAGE: 'message',
  P2P_TYPING: 'typing',
  CHANNEL_MESSAGE: 'channel_message',
  CHANNEL_TYPING: 'channel_typing',
  UPDATE_USER_CONNECTION: 'update_user_connection',
};

function isP2P(message) {
  if (!message) {
    return false;
  }

  return [
    type.P2P_MESSAGE,
    type.P2P_TYPING,
  ].indexOf(message.type) !== -1;
}

function isChatMessage(message) {
  if (!message) {
    return false;
  }

  return [
    type.P2P_MESSAGE,
    type.CHANNEL_MESSAGE,
  ].indexOf(message.type) !== -1;
}

function isFromUser(message, user) {
  if (!message || !user) {
    return false;
  }

  if (!message.uid || !user.id) {
    return false;
  }

  return message.uid === user.id;
}

function reply(message, text) {
  const replyMessage = {
    text,
    vchannel_id: message.vchannel_id,
  };

  if (isP2P(message)) {
    replyMessage.type = type.P2P_MESSAGE;
    replyMessage.to_uid = message.uid;
  } else {
    replyMessage.type = type.CHANNEL_MESSAGE;
    replyMessage.channel_id = message.channel_id;
  }

  return replyMessage;
}

function refer(message, text) {
  const referMessage = reply(message, text);
  referMessage.refer_key = message.key;

  return referMessage;
}

export default {
  type,

  isP2P,
  isChatMessage,
  isFromUser,

  reply,
  refer,
};
