const r = (name) => require(`./user.${name}`);

export default {
  info: r('info'),
  list: r('list'),
  me: r('me'),
};
