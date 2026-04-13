import _ from 'lodash';

// BEGIN
const fill = (company, keys, data) => {
    if (keys.length === 0){
        keys = Object.keys(data);
    }
    let result = company;
    for (let i = 0; i < keys.length; i++){
        if (Object.hasOwn(data, keys[i])){
            result[keys[i]] = data[keys[i]]
        }
    }
    return result;
}

export default fill;
// END