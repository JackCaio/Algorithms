/**
 * @param {Number[]} arr 
 * @returns Addition of the Array elements
 */
const sum = (arr) => {
  return arr.reduce((acc, cur) => Number(acc) + Number(cur));
}

/**
 * @param {Number[]} arr 
 * @returns Subtraction of the Array elements
 */
const sub = (arr) => {
  return arr.reduce((acc, cur) => Number(acc) - Number(cur));
}

/**
 * @param {Number} a 
 * @param {Number} b 
 * @returns Multiplication of the elements
 */
const mul = (a, b = 1) => {
  return a * b;
}

/**
 * Verify if b is not 0, and then returns the division a / b;
 * @param {Number} a 
 * @param {Number} b 
 * @returns Division of the elements
 */
const div = (a, b = 1) => {
  if(b === 0) throw new Error('There can not be a division with 0 dividend');
  return a / b;
}

// const calculatorMap = {
//   '+': sum,
//   '-': sub,
//   '*': mul,
//   '/': div
// }

// console.log(calculatorMap['+']([1, 2, 3, 5]));
// console.log(calculatorMap['-']([20, 2, 3, 5]));
// console.log(calculatorMap['*'](2, 4));
// console.log(calculatorMap['/'](6, 2));
// console.log(calculatorMap['/'](10, 0));

const calculatorMap = new Map();
calculatorMap.set('+', sum);
calculatorMap.set('-', sub);
calculatorMap.set('*', mul);
calculatorMap.set('/', div);

console.log(calculatorMap.get('+')([1, 2, 3, 5]));
console.log(calculatorMap.get('-')([1, 2, 3, 5]));
console.log(calculatorMap.get('*')(2, 4));
console.log(calculatorMap.get('/')(6, 2));
console.log(calculatorMap.get('/')(10, 0));