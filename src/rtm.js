const r = (name) => require(`./rtm.${name}`);

export default {
  start: r('start'),
  message: r('message'),
};
