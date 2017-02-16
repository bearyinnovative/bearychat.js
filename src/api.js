let _basePath;

function setBasePath(basePath) {
  _basePath = basePath;
}

function getBasePath(fallback) {
  if (_basePath) {
    return _basePath;
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
