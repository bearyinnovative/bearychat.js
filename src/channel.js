const r = (name) => require(`./channel.${name}`);

export default {
  archive: r('archive'),
  unarchive: r('unarchive'),
  create: r('create'),
  info: r('info'),
  invite: r('invite'),
  join: r('join'),
  kick: r('kick'),
  leave: r('leave'),
  list: r('list'),
}
