function isObject(maybeObject) {
  const type = typeof maybeObject;
  return maybeObject && (type === 'object' || type === 'function');
}

export default function setInPath(object, pathStr, value) {
  const path = pathStr.split('.');
  const length = path.length;
  const lastIndex = length - 1;
  for (let nested = object, index = 0; index < length; index += 1) {
    const key = path[index];
    if (index !== lastIndex) {
      nested[key] = nested = isObject(nested[key]) ? nested[key] : {};
    } else {
      nested[key] = value;
    }
  }
}
