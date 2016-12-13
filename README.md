# bearychat.js

[BearyChat][] API client for Node and the Browser.

[BearyChat]: https://bearychat.com

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

## Test

```
$ npm run test
```

## Contributing

## LICENSE

MIT
