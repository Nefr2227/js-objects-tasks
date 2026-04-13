// BEGIN
const pick = (data, keys) => {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (data.hasOwnProperty(key)) {
      result[key] = data[key];
    }
  }
  return result;
}

export default pick;
// END