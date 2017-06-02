- [Full API documentation](#full-api-documentation)
  * [bearychat.meta()](#bearychatmeta)
  * [bearychat.team.info()](#bearychatteaminfo)
  * [bearychat.user.info()](#bearychatuserinfo)
  * [bearychat.user.list()](#bearychatuserlist)
  * [bearychat.user.me()](#bearychatuserme)
  * [bearychat.user.update_me()](#bearychatuserupdate_me)
  * [bearychat.vchannel.info()](#bearychatvchannelinfo)
  * [bearychat.channel.info()](#bearychatchannelinfo)
  * [bearychat.channel.list()](#bearychatchannellist)
  * [bearychat.channel.create()](#bearychatchannelcreate)
  * [bearychat.channel.archive()](#bearychatchannelarchive)
  * [bearychat.channel.unarchive()](#bearychatchannelunarchive)
  * [bearychat.channel.leave()](#bearychatchannelleave)
  * [bearychat.channel.join()](#bearychatchanneljoin)
  * [bearychat.channel.invite()](#bearychatchannelinvite)
  * [bearychat.channel.kick()](#bearychatchannelkick)
  * [bearychat.channel.kickout()](#bearychatchannelkickout)
  * [bearychat.session_channel.info()](#bearychatsession_channelinfo)
  * [bearychat.session_channel.list()](#bearychatsession_channellist)
  * [bearychat.session_channel.create()](#bearychatsession_channelcreate)
  * [bearychat.session_channel.archive()](#bearychatsession_channelarchive)
  * [bearychat.session_channel.convert_to_channel()](#bearychatsession_channelconvert_to_channel)
  * [bearychat.session_channel.leave()](#bearychatsession_channelleave)
  * [bearychat.session_channel.invite()](#bearychatsession_channelinvite)
  * [bearychat.session_channel.kick()](#bearychatsession_channelkick)
  * [bearychat.session_channel.kickout()](#bearychatsession_channelkickout)
  * [bearychat.p2p.info()](#bearychatp2pinfo)
  * [bearychat.p2p.list()](#bearychatp2plist)
  * [bearychat.p2p.create()](#bearychatp2pcreate)
  * [bearychat.message.query()](#bearychatmessagequery)
    + [`latest`](#latest)
    + [`since`](#since)
    + [`window`](#window)
  * [bearychat.message.info()](#bearychatmessageinfo)
  * [bearychat.message.create()](#bearychatmessagecreate)
  * [bearychat.message.delete()](#bearychatmessagedelete)
  * [bearychat.message.update_text()](#bearychatmessageupdate_text)
  * [bearychat.emoji.list()](#bearychatemojilist)
  * [bearychat.sticker.list()](#bearychatstickerlist)
  * [bearychat.rtm.start()](#bearychatrtmstart)

# Full API documentation
## bearychat.meta()
`GET`

返回 BearyChat API 的状态。


```javascript
const bearychat = require('bearychat');

bearychat.meta({


}).then(resp => resp.json())
  .then(data => console.log(data));

/*
API 状态
{
  "version": "1"
}

*/
```

## bearychat.team.info()
`GET`

返回当前团队信息。


```javascript
const bearychat = require('bearychat');

bearychat.team.info({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
team response
{
  "id": "=bw52O",
  "subdomain": "openapi",
  "name": "BearyChat OpenAPI",
  "email_domain": null,
  "logo_url": null,
  "description": "",
  "plan": "basic",
  "created": "2017-01-11T12:28:31.000+0000"
}

*/
```

## bearychat.user.info()
`GET`

返回团队内指定用户完整信息。


```javascript
const bearychat = require('bearychat');

bearychat.user.info({

  token: "<your token>",

  // 必填
  // 指定用户 id
  user_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
user response
{
  "inactive": false,
  "role": "normal",
  "email": "support@bearyinnovative.com",
  "name": "BearyBot",
  "type": "assistant",
  "created": "2017-01-11T12:28:31.000+0000",
  "id": "=bwMkR",
  "avatars": {
    "small": null,
    "medium": null,
    "large": null
  },
  "team_id": "=bw52O",
  "full_name": "倍洽小助手",
  "mobile": null,
  "profile": {
    "bio": null,
    "position": null,
    "skype": null
  }
}

*/
```

## bearychat.user.list()
`GET`

返回团队内的用户列表，获取某个用户的完整信息，请使用 `user.info`.


```javascript
const bearychat = require('bearychat');

bearychat.user.list({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
users response
[
  {
    "inactive": false,
    "role": "normal",
    "email": "support@bearyinnovative.com",
    "name": "BearyBot",
    "type": "assistant",
    "created": "2017-01-11T12:28:31.000+0000",
    "id": "=bwMkR",
    "avatars": {
      "small": null,
      "medium": null,
      "large": null
    },
    "team_id": "=bw52O",
    "full_name": "倍洽小助手",
    "mobile": null,
    "profile": {
      "bio": null,
      "position": null,
      "skype": null
    }
  }
]

*/
```

## bearychat.user.me()
`GET`

返回当前用户的信息。


```javascript
const bearychat = require('bearychat');

bearychat.user.me({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
user response
{
  "inactive": false,
  "role": "normal",
  "email": "support@bearyinnovative.com",
  "name": "BearyBot",
  "type": "assistant",
  "created": "2017-01-11T12:28:31.000+0000",
  "id": "=bwMkR",
  "avatars": {
    "small": null,
    "medium": null,
    "large": null
  },
  "team_id": "=bw52O",
  "full_name": "倍洽小助手",
  "mobile": null,
  "profile": {
    "bio": null,
    "position": null,
    "skype": null
  }
}

*/
```

## bearychat.user.update_me()
`PATCH`

更新当前用户信息。


```javascript
const bearychat = require('bearychat');

bearychat.user.update_me({

  token: "<your token>",

  // 选填
  // 用户名 (@name)
  name: "beary_bot",

  // 选填
  // 用户全名
  full_name: "BearyBot"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
user response
{
  "inactive": false,
  "role": "normal",
  "email": "support@bearyinnovative.com",
  "name": "BearyBot",
  "type": "assistant",
  "created": "2017-01-11T12:28:31.000+0000",
  "id": "=bwMkR",
  "avatars": {
    "small": null,
    "medium": null,
    "large": null
  },
  "team_id": "=bw52O",
  "full_name": "倍洽小助手",
  "mobile": null,
  "profile": {
    "bio": null,
    "position": null,
    "skype": null
  }
}

*/
```

## bearychat.vchannel.info()
`GET`

返回指定聊天会话的完整信息。


```javascript
const bearychat = require('bearychat');

bearychat.vchannel.info({

  token: "<your token>",

  // 必填
  // 聊天会话 id
  vchannel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
vchannel response
// Channel
{
  "private": false,
  "general": true,
  "latest_ts": 1486367046281,
  "uid": "=bw52O",
  "name": "所有人",
  "is_member": false,
  "is_active": true,
  "type": "normal",
  "topic": null,
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

// SessionChannel
{
  "latest_ts": "1489242467694",
  "name": "临时讨论组名称",
  "is_member": true,
  "is_active": true,
  "type": "session",
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

// P2PChannel
{
  "id": "=bw52O",
  "team_id": "=bw52O",
  "vchannel_id": "=bw52O",
  "type": "p2p",
  "is_active": true,
  "is_member": true,
  "member_uids": [
    "=bw52O",
    "=bw52P"
  ],
  "latest_ts": 1485238998284
}

*/
```

## bearychat.channel.info()
`GET`

返回指定讨论组的完整信息。


```javascript
const bearychat = require('bearychat');

bearychat.channel.info({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
channel response
{
  "private": false,
  "general": true,
  "latest_ts": 1486367046281,
  "uid": "=bw52O",
  "name": "所有人",
  "is_member": false,
  "is_active": true,
  "type": "normal",
  "topic": null,
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.channel.list()
`GET`

返回团队内的讨论组列表，获取某个讨论组的完整信息，请使用 `channel.info`.


```javascript
const bearychat = require('bearychat');

bearychat.channel.list({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
channels response
[
  {
    "private": false,
    "general": true,
    "latest_ts": 1486367046281,
    "uid": "=bw52O",
    "name": "所有人",
    "is_member": false,
    "is_active": true,
    "type": "normal",
    "topic": null,
    "member_uids": [
      "=bw52O"
    ],
    "vchannel_id": "=bw52O",
    "id": "=bw52O",
    "team_id": "=bw52O"
  }
]

*/
```

## bearychat.channel.create()
`POST`

创建一个讨论组


```javascript
const bearychat = require('bearychat');

bearychat.channel.create({

  token: "<your token>",

  // 必填
  // 讨论组名称，可以包含 2 到 20 个英文字符或 1 到 10 个中文字符。
  // 允许使用数字、下划线 (`_`)、中线 (`-`) 和点。
  name: "吃喝玩乐在深圳",

  // 选填
  // 讨论组话题
  topic: "今天吃什么？",

  // 选填
  // 讨论组是否为私密？
  private: <boolean>

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
channel response
{
  "private": false,
  "general": true,
  "latest_ts": 1486367046281,
  "uid": "=bw52O",
  "name": "所有人",
  "is_member": false,
  "is_active": true,
  "type": "normal",
  "topic": null,
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.channel.archive()
`POST`

归档一个讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.channel.archive({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
channel response
{
  "private": false,
  "general": true,
  "latest_ts": 1486367046281,
  "uid": "=bw52O",
  "name": "所有人",
  "is_member": false,
  "is_active": false,
  "type": "normal",
  "topic": null,
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.channel.unarchive()
`POST`

恢复一个已被归档的讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.channel.unarchive({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
channel response
{
  "private": false,
  "general": true,
  "latest_ts": 1486367046281,
  "uid": "=bw52O",
  "name": "所有人",
  "is_member": false,
  "is_active": true,
  "type": "normal",
  "topic": null,
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.channel.leave()
`POST`

当前用户离开讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.channel.leave({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.channel.join()
`POST`

当前用户加入指定讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.channel.join({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
channel response
{
  "private": false,
  "general": false,
  "latest_ts": 1486367046281,
  "uid": "=bw52O",
  "name": "吃喝玩乐在深圳",
  "is_member": false,
  "is_active": true,
  "type": "normal",
  "topic": null,
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.channel.invite()
`POST`

当前用户邀请一个团队成员加入讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.channel.invite({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O",

  // 必填
  // 邀请用户 id
  invite_uid: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.channel.kick()
`POST`

当前用户移除一个讨论组成员。


```javascript
const bearychat = require('bearychat');

bearychat.channel.kick({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O",

  // 必填
  // 移除用户 id
  kick_uid: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.channel.kickout()
`POST`

当前用户移除一个讨论组成员。


```javascript
const bearychat = require('bearychat');

bearychat.channel.kickout({

  token: "<your token>",

  // 必填
  // 讨论组 id
  channel_id: "=bw52O",

  // 必填
  // 移除用户 id
  kick_uid: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.session_channel.info()
`GET`

返回一个临时讨论组的完整信息。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.info({

  token: "<your token>",

  // 必填
  // 讨论组 id
  session_channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
session channel response
{
  "latest_ts": "1489242467694",
  "name": "临时讨论组名称",
  "is_member": true,
  "is_active": true,
  "type": "session",
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.session_channel.list()
`GET`

返回团队内已经加入的临时讨论组列表，获取某个临时讨论组的完整信息，
请使用 `session_channel.info`.


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.list({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
session channels response
[
  {
    "latest_ts": "1489242467694",
    "name": "临时讨论组名称",
    "is_member": true,
    "is_active": true,
    "type": "session",
    "member_uids": [
      "=bw52O"
    ],
    "vchannel_id": "=bw52O",
    "id": "=bw52O",
    "team_id": "=bw52O"
  }
]

*/
```

## bearychat.session_channel.create()
`POST`

创建一个临时讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.create({

  token: "<your token>",

  // 选填
  // 临时讨论组名称，可以包含 2 到 20 个英文字符或 1 到 10 个中文字符。
  // 允许使用数字、下划线 (`_`)、中线 (`-`) 和点。
  name: "吃喝玩乐在深圳",

  // 必填
  // 临时讨论组成员 id 列表
  member_uids: ["=bw52O", "=bw52P"]

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
session channel responses
{
  "latest_ts": "1489242467694",
  "name": "临时讨论组名称",
  "is_member": true,
  "is_active": true,
  "type": "session",
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.session_channel.archive()
`POST`

归档一个临时讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.archive({

  token: "<your token>",

  // 必填
  // 临时讨论组 id
  session_channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
session channel response
{
  "latest_ts": "1489242467694",
  "name": "临时讨论组名称",
  "is_member": true,
  "is_active": false,
  "type": "session",
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.session_channel.convert_to_channel()
`POST`

将临时讨论组转换为讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.convert_to_channel({

  token: "<your token>",

  // 必填
  // 临时讨论组 id
  session_channel_id: "=bw52O",

  // 必填
  // 讨论组名称，可以包含 2 到 20 个英文字符或 1 到 10 个中文字符。
  // 允许使用数字、下划线 (`_`)、中线 (`-`) 和点。
  name: "吃喝玩乐在深圳",

  // 选填
  // 讨论组是否为私密？
  private: <boolean>

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
session channel response
{
  "latest_ts": "1489242467694",
  "name": "临时讨论组名称",
  "is_member": true,
  "is_active": false,
  "type": "session",
  "member_uids": [
    "=bw52O"
  ],
  "vchannel_id": "=bw52O",
  "id": "=bw52O",
  "team_id": "=bw52O"
}

*/
```

## bearychat.session_channel.leave()
`POST`

离开临时讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.leave({

  token: "<your token>",

  // 必填
  // 临时讨论组 id
  session_channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.session_channel.invite()
`POST`

邀请一个团队成员加入临时讨论组。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.invite({

  token: "<your token>",

  // 必填
  // 临时讨论组 id
  session_channel_id: "=bw52O",

  // 必填
  // 邀请用户 id
  invite_uid: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.session_channel.kick()
`POST`

移除一个临时讨论组成员。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.kick({

  token: "<your token>",

  // 必填
  // 临时讨论组 id
  session_channel_id: "=bw52O",

  // 必填
  // 邀请用户 id
  kick_uid: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.session_channel.kickout()
`POST`

移除一个临时讨论组成员。


```javascript
const bearychat = require('bearychat');

bearychat.session_channel.kickout({

  token: "<your token>",

  // 必填
  // 临时讨论组 id
  session_channel_id: "=bw52O",

  // 必填
  // 邀请用户 id
  kick_uid: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.p2p.info()
`GET`

返回一个 P2P 聊天会话的完整信息。


```javascript
const bearychat = require('bearychat');

bearychat.p2p.info({

  token: "<your token>",

  // 必填
  // P2P 聊天会话 id
  p2p_channel_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
p2p response
{
  "id": "=bw52O",
  "team_id": "=bw52O",
  "vchannel_id": "=bw52O",
  "type": "p2p",
  "is_active": true,
  "is_member": true,
  "member_uids": [
    "=bw52O",
    "=bw52P"
  ],
  "latest_ts": 1485238998284
}

*/
```

## bearychat.p2p.list()
`GET`

返回 P2P 聊天会话列表，获取某个 P2P 会话的完整信息，请使用 `p2p.info`.


```javascript
const bearychat = require('bearychat');

bearychat.p2p.list({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
p2p list response
[
  {
    "id": "=bw52O",
    "team_id": "=bw52O",
    "vchannel_id": "=bw52O",
    "type": "p2p",
    "is_active": true,
    "is_member": true,
    "member_uids": [
      "=bw52O",
      "=bw52P"
    ],
    "latest_ts": 1485238998284
  }
]

*/
```

## bearychat.p2p.create()
`POST`

创建一个 P2P 聊天会话。


```javascript
const bearychat = require('bearychat');

bearychat.p2p.create({

  token: "<your token>",

  // 必填
  // P2P 聊天另外一方的用户 id
  user_id: "=bw52O"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
p2p response
{
  "id": "=bw52O",
  "team_id": "=bw52O",
  "vchannel_id": "=bw52O",
  "type": "p2p",
  "is_active": true,
  "is_member": true,
  "member_uids": [
    "=bw52O",
    "=bw52P"
  ],
  "latest_ts": 1485238998284
}

*/
```

## bearychat.message.query()
`POST`

查询指定 vchannel 下的消息列表。支持以下几种查询算法：

### `latest`

查询 vchannel 下最新的消息，支持参数：

- `limit`: 查询数量限制，最大值为 100, 默认 20

### `since`

从指定位置开始拉取若干条消息，支持参数：

- `key`: 开始位置的消息 key, 不可以和 `ts` 同时使用
- `ts`: 开始位置的消息 ts, 不可以和 `ts` 同时使用
- `forward`: 向前（时间发生方向）获取条数
- `backward`: 向后（时间发生方向）获取条数

**注意**:

1. 使用 `key` 查询时，查询区间不包括 key 对应的消息
2. 使用 `ts` 查询时，查询区间包括 ts 对应的消息
3. `forward` / `backward` 参数可以同时使用
4. `forward` / `backward` 参数最大值为 100,
5. `forward` / `backward` 均未指定时，默认使用 `forward=100`

### `window`

拉取一定时间窗口内的消息，支持参数：

- `from_key` / `to_key`: 窗口区间的消息 key
- `from_ts` / `to_ts`: 窗口区间的消息 ts
- `forward`: 从 from 方向往 to 方向取的消息数
- `backward`: 从 to 方向往 from 方向取的消息数

**注意**:

1. `{from,to}_key` 和 `{from,to}_ts` 不可以混用
2. 使用 `{from,to}_key` 查询时，查询区间不包括 key 对应的消息
3. 使用 `{from,to}_ts` 查询时，查询区间包括 ts 对应的消息
4. `forward` 和 `backward` 参数只能选其中一个
5. `forward` / `backward` 均未指定时，默认使用 `forward=100`
6. 如果查询区间开始值比结束值大，返回空结果


```javascript
const bearychat = require('bearychat');

bearychat.message.query({

  token: "<your token>",

  // 必填
  // 待查询 vchannel_id
  vchannel_id: "=bw52O",

  // 必填
  // 消息查询 payload
  query: <MessageQuery>

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
message query response
{
  "messages": [
    {
      "key": "1485236262366.0193",
      "updated": "2017-01-24T13:37:42.000+0000",
      "is_channel": false,
      "uid": "=bw52O",
      "fallback": null,
      "attachments": [],
      "created": "2017-01-24T13:37:42.000+0000",
      "vchannel_id": "=bw52O",
      "refer_key": null,
      "robot_id": null,
      "created_ts": 1485236262366,
      "team_id": "=bw52O",
      "subtype": "normal",
      "text": "hello"
    }
  ]
}

*/
```

## bearychat.message.info()
`GET`

返回一条消息的信息。


```javascript
const bearychat = require('bearychat');

bearychat.message.info({

  token: "<your token>",

  // 必填
  // 指定的目标聊天会话 id
  vchannel_id: "=bw52O",

  // 必填
  // 获取消息的 key
  message_key: "1487667236785.0077"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
message response
{
  "key": "1485236262366.0193",
  "updated": "2017-01-24T13:37:42.000+0000",
  "is_channel": false,
  "uid": "=bw52O",
  "fallback": null,
  "attachments": [],
  "created": "2017-01-24T13:37:42.000+0000",
  "vchannel_id": "=bw52O",
  "refer_key": null,
  "robot_id": null,
  "created_ts": 1485236262366,
  "team_id": "=bw52O",
  "subtype": "normal",
  "text": "hello"
}

*/
```

## bearychat.message.create()
`POST`

发送一条消息到指定聊天会话。


```javascript
const bearychat = require('bearychat');

bearychat.message.create({

  token: "<your token>",

  // 必填
  // 指定的目标聊天会话 id
  vchannel_id: "=bw52O",

  // 必填
  // 消息内容
  text: "中午吃啥啊？",

  // 必填
  // 消息附件
  attachments: <array>

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
message response
{
  "key": "1485236262366.0193",
  "updated": "2017-01-24T13:37:42.000+0000",
  "is_channel": false,
  "uid": "=bw52O",
  "fallback": null,
  "attachments": [],
  "created": "2017-01-24T13:37:42.000+0000",
  "vchannel_id": "=bw52O",
  "refer_key": null,
  "robot_id": null,
  "created_ts": 1485236262366,
  "team_id": "=bw52O",
  "subtype": "normal",
  "text": "hello"
}

*/
```

## bearychat.message.delete()
`POST`

删除一条消息。


```javascript
const bearychat = require('bearychat');

bearychat.message.delete({

  token: "<your token>",

  // 必填
  // 消息聊天会话 id
  vchannel_id: "=bw52O",

  // 必填
  // 删除的消息 key
  message_key: "1487667236785.0077"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*

*/
```

## bearychat.message.update_text()
`PATCH`

更新一条消息的内容。


```javascript
const bearychat = require('bearychat');

bearychat.message.update_text({

  token: "<your token>",

  // 必填
  // 消息聊天会话 id
  vchannel_id: "=bw52O",

  // 必填
  // 更新的消息 key
  message_key: "1487667236785.0077",

  // 必填
  // 更新的消息内容
  text: "中午吃啥啊？"

}).then(resp => resp.json())
  .then(data => console.log(data));

/*
message response
{
  "key": "1485236262366.0193",
  "updated": "2017-01-24T13:37:42.000+0000",
  "is_channel": false,
  "uid": "=bw52O",
  "fallback": null,
  "attachments": [],
  "created": "2017-01-24T13:37:42.000+0000",
  "vchannel_id": "=bw52O",
  "refer_key": null,
  "robot_id": null,
  "created_ts": 1485236262366,
  "team_id": "=bw52O",
  "subtype": "normal",
  "text": "hello"
}

*/
```

## bearychat.emoji.list()
`GET`

返回团队内的自定义 emoji 列表


```javascript
const bearychat = require('bearychat');

bearychat.emoji.list({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
emojis response
[
  {
    "id": "=bw52O",
    "uid": "=bw52O",
    "team_id": "=bw52O",
    "name": "hello",
    "type": "emoji",
    "created": "2017-03-13T13:54:16.000+0000",
    "updated": "2017-03-13T13:54:16.000+0000",
    "url": "http://example.com/1.jpg"
  }
]

*/
```

## bearychat.sticker.list()
`GET`

返回当前用户的自定义 sticker 列表


```javascript
const bearychat = require('bearychat');

bearychat.sticker.list({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
sticker packs response
[
  {
    "pack": "黑白熊静态",
    "stickers": [
      {
        "url": "https://dn-bearychat.qbox.me/sticker-gif-20.gif",
        "name": "累",
        "width": 240,
        "height": 240
      }
    ]
  }
]

*/
```

## bearychat.rtm.start()
`POST`

打开 RTM 连接会话


```javascript
const bearychat = require('bearychat');

bearychat.rtm.start({

  token: "<your token>"
}).then(resp => resp.json())
  .then(data => console.log(data));

/*
rtm response
{
  "ws_host": "wss://rtm.bearychat.com/nimbus/ws:xxx",
  "user": {
    "inactive": false,
    "role": "normal",
    "email": "support@bearyinnovative.com",
    "name": "BearyBot",
    "type": "assistant",
    "created": "2017-01-11T12:28:31.000+0000",
    "id": "=bwMkR",
    "avatars": {
      "small": null,
      "medium": null,
      "large": null
    },
    "team_id": "=bw52O",
    "full_name": "倍洽小助手",
    "mobile": null,
    "profile": {
      "bio": null,
      "position": null,
      "skype": null
    }
  }
}

*/
```

