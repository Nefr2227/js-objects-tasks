import _ from 'lodash';

// BEGIN
const countWords = (stroka) => {
  const result = {};
  
  // Проверяем, пустая ли строка
  if (stroka.trim() === '') {
    return result;
  }
 
  const words = _.words(stroka.toLowerCase());
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (result[word]) {
      result[word] += 1;
    } 
    else {
      result[word] = 1;
    }
  }
  
  return result;
}

export default countWords;
// END