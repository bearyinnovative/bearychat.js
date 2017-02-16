const r = (name) => require(`./team.${name}`);

export default {
  info: r('info'),
};
