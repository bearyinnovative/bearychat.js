# bearychat.js

[BearyChat][] API client for Node and the Browser.

[![@BearyChat](http://openapi.beary.chat/badge.svg)](http://openapi.beary.chat/join)
[![Build Status](https://travis-ci.org/bearyinnovative/bearychat.js.svg)](https://travis-ci.org/bearyinnovative/bearychat.js)
![Development Status](https://img.shields.io/badge/status-1.0.0-greeen.svg?style=flat-square)

[BearyChat]: https://bearychat.com

[中文文档](./README_CN.md)

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Test](#test)
- [Contributing](#contributing)
  * [Generating API Client](#generating-api-client)
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

Plain usage example:

```javascript
const bearychat = require('bearychat');
bearychat.rtm.start({token: '<your token>'})
  .then(resp => resp.json())
  .then(data => {console.log(data)});
```

Use HTTPClient:
```javascript
const HTTPClient = require('bearychat').HTTPClient;
const client = new HTTPClient('<your token>');
client.rtm.start()
  .then(data => {console.log(data)});
```

Note that you **DON'T** need to parse response to JSON with HTTPClient, this is handled automatically.

[Full API Documentation](./API.md)

## Test

```
$ npm run test
```

## Contributing

Contributing is welcome, the contribution guide can be found in [CONTRIBUTING][]

[CONTRIBUTING]: ./CONTRIBUTING.md


### Generating API Client

1. npm run download-api-schema
2. npm run build:src

## LICENSE

MIT
