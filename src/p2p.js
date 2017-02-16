const r = (name) => require(`./p2p.${name}`);

export default {
  create: r('create'),
  info: r('info'),
  list: r('list'),
};
