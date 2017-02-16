const r = (name) => require(`./message.${name}`);

export default {
  create: r('create'),
  'delete': r('delete'),
  query: r('query'),
  updateText: r('update_text'),
};
