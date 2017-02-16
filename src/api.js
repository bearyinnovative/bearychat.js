let basePath;

function setBasePath(p) {
  basePath = p;
}

function getBasePath(fallback) {
  if (basePath) {
    return basePath;
  }

  if (process.env.BEARYCHAT_API_BASE) {
    return process.env.BEARYCHAT_API_BASE;
  }

  return fallback;
}

export default {
  setBasePath,
  getBasePath,
};
