// BEGIN
const getDomainInfo = (stroka) => {
    if (stroka.startsWith('https://')) {
        return {
            scheme: 'https',
            name: stroka.slice(8)
        };
    }
    
    if (stroka.startsWith('http://')) {
        return {
            scheme: 'http',
            name: stroka.slice(7)
        };
    }
    
    return {
        scheme: 'http',
        name: stroka
    };
}

export default getDomainInfo;
// END