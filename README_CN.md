# bearychat.js

[BearyChat][] API 客户端（适用于 Node 和浏览器环境）

[![Build Status](https://travis-ci.org/bearyinnovative/bearychat.js.svg)](https://travis-ci.org/bearyinnovative/bearychat.js)
![Development Status](https://img.shields.io/badge/status-WIP-yellow.svg?style=flat-square)

[BearyChat]: https://bearychat.com

<!-- toc -->

- [安装](#%E5%AE%89%E8%A3%85)
- [用例](#%E7%94%A8%E4%BE%8B)
  * [`incoming.send`](#incomingsend)
  * [`incoming.builder`](#incomingbuilder)
  * [`rtm.start`](#rtmstart)
  * [`rtm.currentTeamInfo`](#rtmcurrentteaminfo)
  * [`rtm.currentTeamMembers`](#rtmcurrentteammembers)
  * [`rtm.currentTeamChannels`](#rtmcurrentteamchannels)
  * [`rtm.userInfo`](#rtmuserinfo)
  * [`rtm.channelInfo`](#rtmchannelinfo)
- [测试](#%E6%B5%8B%E8%AF%95)
- [贡献](#%E8%B4%A1%E7%8C%AE)
- [LICENSE](#license)

<!-- tocstop -->

## 安装

```
$ npm i bearychat
```

假如你使用 `yarn`:

```
$ yarn add bearychat
```

## 用例

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

## 测试

```
$ npm run test
```

## 贡献

## LICENSE

MIT
