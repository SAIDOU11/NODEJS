const fs = require('node:fs');
const { log } = require('node:util');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
  console.log('This is form readableStream close event callback');
});
setImmediate(() => console.log('This is setImmediate 1'));
setTimeout(() => console.log('This is setTimeout 1'), 0);
Promise.resolve().then(() => console.log('This is Promise.resolve 1')); // 2
process.nextTick(() => console.log('This is process.nextTick 1')); // 1
