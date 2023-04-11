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
const mul = (a, b) => {
  return a * b;
}

/**
 * Verify if b is not 0, and then returns the division a / b;
 * @param {Number} a 
 * @param {Number} b 
 * @returns Division of the elements
 */
const div = (a, b) => {
  if(b === 0) return null;
  return a / b;
}

const calculatorMap = {
  '+': sum,
  '-': sub,
  '*': mul,
  '/': div
}

console.log(calculatorMap['+']([1, 2, 3, 5]));
console.log(calculatorMap['-']([20, 2, 3, 5]));
console.log(calculatorMap['*'](2, 4));
console.log(calculatorMap['/'](6, 2));
console.log(calculatorMap['/'](10, 0));