let sampleArray = ['a', 10, 'b', 'hola', 122, -15];

/**
 * Function explores the array, searching for what is defined in the parameter
 * @param {(string | number)[]} array 
 * @param {('letters' | 'numbers' | 'highest')} search 
 */
const arrayExplorer = (array, search) => {
  switch(search) {
    case 'letters':
      return array.filter((element) => typeof element !== 'number');;
    case 'numbers':
      return array.filter((element) => typeof element === 'number');;
    case 'highest':
      return fetchHighest(array);
    default:
      return false;
  }
}

/**
 * Searches the array for the highest number
 * @param {(string | number)[]} array 
 * @returns Highest number in the array
 */
const fetchHighest = (array) => {
  const numbers = array.filter((element) => typeof element === 'number');
  const highest = numbers.reduce((acc, cur) => cur > acc ? cur : acc, -Number.MAX_VALUE);
  if(highest === -Number.MAX_VALUE) return false;
  return highest;
}

console.log(arrayExplorer(sampleArray, 'letters'));
console.log(arrayExplorer(sampleArray, 'numbers'));
console.log(arrayExplorer(sampleArray, 'highest'));