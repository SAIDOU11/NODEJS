const fs = require('node:fs');

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream('./file2.txt');

readableStream.on('data', (piece) => {
  console.log(piece);
  writeableStream.write(piece);
});
