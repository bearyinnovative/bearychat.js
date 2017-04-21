import { rtm } from '../src';

describe('isP2P', () => {

  it('shall pass bad cases', () => {
    const cases = [
      null,
      undefined,
      42,
      3.14,
      'foo',
      /foo/,
      {},
      {type: null},
      {type: undefined},
      {type: 42},
      {type: rtm.message.type.CHANNEL_MESSAGE},
      {type: rtm.message.type.CHANNEL_TYPING},
    ];

    for (let c of cases) {
      expect(rtm.message.isP2P(c)).toBe(false);
    }
  });

  it('shall pass', () => {
    const cases = [
      {type: rtm.message.type.P2P_MESSAGE},
      {type: rtm.message.type.P2P_TYPING},
    ];

    for (let c of cases) {
      expect(rtm.message.isP2P(c)).toBe(true);
    }
  });

});

describe('isChatMessage', () => {

  it('shall pass bad cases', () => {
    const cases = [
      null,
      undefined,
      42,
      3.14,
      'foo',
      /foo/,
      {},
      {type: null},
      {type: undefined},
      {type: 42},
      {type: rtm.message.type.P2P_TYPING},
      {type: rtm.message.type.CHANNEL_TYPING},
    ];

    for (let c of cases) {
      expect(rtm.message.isChatMessage(c)).toBe(false);
    }
  });

  it('shall pass', () => {
    const cases = [
      {type: rtm.message.type.P2P_MESSAGE},
      {type: rtm.message.type.CHANNEL_MESSAGE},
    ];

    for (let c of cases) {
      expect(rtm.message.isChatMessage(c)).toBe(true);
    }
  });

});

describe('isFromUser', () => {

  it('shall pass bad cases', () => {
    const cases = [
      [null, {id: 'foo'}],
      [undefined, {id: 'foo'}],
      [42, {id: 'foo'}],
      [3.14, {id: 'foo'}],
      ['foo', {id: 'foo'}],
      [/foo/, {id: 'foo'}],
      [{}, {id: 'foo'}],
      [{uid: null}, {id: 'foo'}],
      [{uid: undefined}, {id: 'foo'}],
      [{uid: 42}, {id: 'foo'}],
      [{uid: 'bar'}, {id: 'foo'}],

      [{uid: 'foo'}, null],
      [{uid: 'foo'}, undefined],
      [{uid: 'foo'}, 42],
      [{uid: 'foo'}, 3.14],
      [{uid: 'foo'}, 'foo'],
      [{uid: 'foo'}, /foo/],
      [{uid: 'foo'}, {}],
      [{uid: 'foo'}, {id: null}],
      [{uid: null}, {id: null}],
      [{uid: undefined}, {id: undefined}],
    ];

    for (let c of cases) {
      expect(rtm.message.isFromUser(c[0], c[1])).toBe(false);
    }
  });

  it('shall pass', () => {
    const cases = [
      [{uid: 'foo'}, {id: 'foo'}],
      [{uid: 'foobar'}, {id: 'foobar'}],
    ];

    for (let c of cases) {
      expect(rtm.message.isFromUser(c[0], c[1])).toBe(true);
    }
  });

});

describe('reply', () => {

  it('should reply channel message', () => {
    const message = {
      type: rtm.message.type.CHANNEL_MESSAGE,
      channel_id: 'foo',
      vchannel_id: 'foo',
      key: 'foo',
    };

    const replyText = 'bar';
    const replyMessage = rtm.message.reply(message, replyText);

    expect(replyMessage.type).toBe(rtm.message.type.CHANNEL_MESSAGE);
    expect(replyMessage.text).toBe(replyText);
    expect(replyMessage.channel_id).toBe(message.channel_id);
    expect(replyMessage.vchannel_id).toBe(message.vchannel_id);
  });

  it('should reply P2P message', () => {
    const message = {
      type: rtm.message.type.P2P_MESSAGE,
      uid: 'foo',
      vchannel_id: 'foo',
      key: 'foo',
    };

    const replyText = 'bar';
    const replyMessage = rtm.message.reply(message, replyText);

    expect(replyMessage.type).toBe(rtm.message.type.P2P_MESSAGE);
    expect(replyMessage.text).toBe(replyText);
    expect(replyMessage.to_uid).toBe(message.uid);
    expect(replyMessage.vchannel_id).toBe(message.vchannel_id);
  });

});

describe('refer', () => {

  it('should refer channel message', () => {
    const message = {
      type: rtm.message.type.CHANNEL_MESSAGE,
      channel_id: 'foo',
      vchannel_id: 'foo',
      key: 'foo',
    };

    const referText = 'bar';
    const referMessage = rtm.message.refer(message, referText);

    expect(referMessage.type).toBe(rtm.message.type.CHANNEL_MESSAGE);
    expect(referMessage.text).toBe(referText);
    expect(referMessage.channel_id).toBe(message.channel_id);
    expect(referMessage.vchannel_id).toBe(message.vchannel_id);
    expect(referMessage.refer_key).toBe(message.key);
  });

  it('should refer P2P message', () => {
    const message = {
      type: rtm.message.type.P2P_MESSAGE,
      uid: 'foo',
      vchannel_id: 'foo',
      key: 'foo',
    };

    const referText = 'bar';
    const referMessage = rtm.message.refer(message, referText);

    expect(referMessage.type).toBe(rtm.message.type.P2P_MESSAGE);
    expect(referMessage.text).toBe(referText);
    expect(referMessage.to_uid).toBe(message.uid);
    expect(referMessage.vchannel_id).toBe(message.vchannel_id);
    expect(referMessage.refer_key).toBe(message.key);
  });

});
