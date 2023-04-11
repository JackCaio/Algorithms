const crypto = require('crypto');

/**
 * Discovered the module after searching for a bit, found it to be simpler to understand
 * @returns Random ID in the format XXXX-AAAA-BBBB-CCCC
 */
const genId = () => {
  const hash = crypto.randomBytes(8).toString('hex');
  const id = hash.match(/.{4}/g).join('-');
  return id
}

console.log(genId());

/**
 * First function I could think of, really simple to understand
 * @returns Random ID in the format XXXX-AAAA-BBBB-CCCC
 */
const genIdSimple = () => {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result.match(/.{4}/g).join('-');
}

console.log(genIdSimple());