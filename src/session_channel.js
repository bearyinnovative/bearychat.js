const r = (name) => require(`./session_channel.${name}`);

export default {
  archive: r('archive'),
  convertToChannel: r('convert_to_channel'),
  create: r('create'),
  info: r('info'),
  invite: r('invite'),
  kick: r('kick'),
  leave: r('leave'),
  list: r('list'),
};
