// BEGIN
const get = (data, keys) => {
    let result = data;
    for (let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (!Object.hasOwn(result, key) || result === null || result === undefined ){
            return null;
        }
        result = result[key];
    }
    return result;
}

export default get;
// END