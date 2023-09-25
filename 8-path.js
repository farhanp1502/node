const { totalmem } = require('os');
const path = require('path')

console.log(path.sep);
//  /

const filepath = path.join('content','subtotal','test.txt');
console.log(filepath);
// content/subtotal/test.txt

const base = path.basename(filepath);
console.log(base);
// test.txt

const absolute = path.resolve(__dirname,'content','subtotal','test.txt')
console.log(absolute);
