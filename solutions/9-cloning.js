// BEGIN
const cloneShallow = (data) => {
    let result = {};
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++){
        result[keys[i]] = data[keys[i]];
    }
    return result;
}

export default cloneShallow;
// END