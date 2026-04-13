// BEGIN
const make = (name, massive = null) =>{
    let result = {
            name: name,
            state: 'moderating',
            createdAt: Date.now()
        }
    if (massive !== null){
        let keys = Object.keys(massive);
        for (let i = 0; i < keys.length; i++){
            result[keys[i]] = massive[keys[i]]
        }
    }
    return result;
}

export default make;
// END