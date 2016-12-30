# bearychat.js

[BearyChat][] API client for Node and the Browser.

[![Build Status](https://travis-ci.org/bearyinnovative/bearychat.js.svg)](https://travis-ci.org/bearyinnovative/bearychat.js)
![Development Status](https://img.shields.io/badge/status-WIP-yellow.svg?style=flat-square)

[BearyChat]: https://bearychat.com

[中文文档](./README_CN.md)

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
  * [`incoming.send`](#incomingsend)
  * [`incoming.builder`](#incomingbuilder)
  * [`rtm.start`](#rtmstart)
  * [`rtm.currentTeamInfo`](#rtmcurrentteaminfo)
  * [`rtm.currentTeamMembers`](#rtmcurrentteammembers)
  * [`rtm.currentTeamChannels`](#rtmcurrentteamchannels)
  * [`rtm.userInfo`](#rtmuserinfo)
  * [`rtm.channelInfo`](#rtmchannelinfo)
  * [`rtm.message`](#rtmmessage)
  * [`rtm.loop`](#rtmloop)
- [Test](#test)
- [Contributing](#contributing)
- [LICENSE](#license)

<!-- tocstop -->

## Install

```
$ npm i bearychat
```

or with `yarn`

```
$ yarn add bearychat
```

## Usage

### `incoming.send`

```javascript
import { incoming } from 'bearychat';

const myWebhookUri = 'https://hook.bearychat.com/incoming/keep-calm-and-pusing';

incoming
  .send(myWebhookUri, { text: 'Hello, world' })
  .then(() => {
    console.log('incoming sent!');
  });
```

### `incoming.builder`

```javascript
import { incoming } from 'bearychat';

incoming
  .withText('Hello, world')  // or .withMarkdown('**Hello, world**')
  .to('扯犊子')
  .withAttachment({ text: 'It is simple,' })
  .withAttachment({ text: 'but colorful', color: '#ffa500' })
  .build();
```

### `rtm.start`

```javascript
import { rtm } from 'bearychat';

const rtmToken = 'keep-secret-and-safe';

rtm.start(rtmToken)
  .then((user) => {
    console.log(user);
  });
```

### `rtm.currentTeamInfo`

```javascript
import { rtm } from 'bearychat';

const rtmToken = 'keep-secret-and-safe';

rtm.currentTeamInfo(rtmToken)
  .then((team) => {
    console.log(team);
  });
```

### `rtm.currentTeamMembers`

```javascript
import { rtm } from 'bearychat';

const rtmToken = 'keep-secret-and-safe';

rtm.currentTeamMembers(rtmToken)
  .then((members) => {
    console.log(members);
  });
```

### `rtm.currentTeamChannels`

```javascript
import { rtm } from 'bearychat';

const rtmToken = 'keep-secret-and-safe';

rtm.currentTeamChannels(rtmToken)
  .then((channels) => {
    console.log(channels);
  });
```

### `rtm.userInfo`

```javascript
import { rtm } from 'bearychat';

const rtmToken = 'keep-secret-and-safe';
const userId = '=bw4242';

rtm.userInfo(rtmToken, userId)
  .then((user) => {
    console.log(user);
  });
```

### `rtm.channelInfo`

```javascript
import { rtm } from 'bearychat';

const rtmToken = 'keep-secret-and-safe';
const channelId = '=bw4242';

rtm.channelInfo(rtmToken, channelId)
  .then((channel) => {
    console.log(channel);
  });
```

### `rtm.message`

Provides handful helpers for rtm message parsing.

### `rtm.loop`

To archive more flexible usage, `bearychat.js` won't provide any implementations
for `rtm.loop`. You can use [`examples/rtm_loop`](./exapmles/rtm_loop) as
implementation reference.

Basically, `rtm.loop` contains 3 stages:

1. `rtm.start`: Use rtm token to authenticate user and open a websocket
connection.
2. `ping`: Keep sending `type=ping` message to server after connected. Pinging
interval with `5000ms` is suggested.
3. `loop`: Subscribe to websocket's message event and consume the message comes
from the server. You can use `rtm.message` for message parsing.

## Test

```
$ npm run test
```

## Contributing

## LICENSE

MIT
