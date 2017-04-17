const rtm = require('bearychat').rtm;
const WebSocket = require('ws');

const rtmToken = process.env.RTM_TOKEN;

function loop(wsHost, me) {
  const ws = new WebSocket(wsHost);

  // Send a message (as JSON)
  // and mantain a `call_id` sequence.
  let callId = 0;
  const send = (message) => {
    if (!message.call_id) {
      message.call_id = ++callId;
    }

    ws.send(JSON.stringify(message));
  };

  ws.on('open', () => {
    console.log(`connected as ${me.name}`);

    setInterval(() => {
      // PING every 5s
      send({type: rtm.message.type.PING});
    }, 5000);
  });

  ws.on('message', (data) => {
    const message = JSON.parse(data);

    if (!rtm.message.isChatMessage(message)) {
      return;
    }

    if (rtm.message.isFromUser(message, me)) {
      return;
    }

    // Refering all messages (quite annoying ;))
    console.log(`replying ${message.text}`);
    send(rtm.message.refer(message, ':ok_hand:'));
  });
}

rtm.start({token: rtmToken})
  .then((resp) => resp.json())
  .then(({ ws_host, user }) => {
    return loop(ws_host, user);
  })
  .catch((err) => {
    console.log(err);
  });
