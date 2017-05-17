# bearychat.js

[BearyChat][] API 客户端（适用于 Node 和浏览器环境）

[![@BearyChat](http://openapi.beary.chat/badge.svg)](http://openapi.beary.chat/join)
[![Build Status](https://travis-ci.org/bearyinnovative/bearychat.js.svg)](https://travis-ci.org/bearyinnovative/bearychat.js)
![Development Status](https://img.shields.io/badge/status-1.0.0-greeen.svg?style=flat-square)

[BearyChat]: https://bearychat.com

<!-- toc -->

- [安装](#%E5%AE%89%E8%A3%85)
- [用例](#%E7%94%A8%E4%BE%8B)
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

直接使用 API:

```javascript
const bearychat = require('bearychat');
bearychat.rtm.start({token: '<your token>'})
  .then(resp => resp.json())
  .then(data => {console.log(data)});
```

使用 HTTPClient:
```javascript
const HTTPClient = require('bearychat').HTTPClient;
const client = new HTTPClient('<your token>');
client.rtm.start()
  .then(data => {console.log(data)});
```

注意：使用 HTTPClient **不**需要手动将请求转换为 JSON.

[完整 API 列表](./API.md)

## 测试

```
$ npm run test
```

## 贡献

欢迎给 bearychat.js 添砖加瓦，你可以在 [CONTRIBUTING][] 中找到相关说明。

[CONTRIBUTING]: ./CONTRIBUTING.md

## LICENSE

MIT
