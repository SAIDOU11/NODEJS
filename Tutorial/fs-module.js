const { readFile } = require('node:fs');
const fs = require('node:fs/promises');

console.log('First');

fs.readFile('file.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log('Second');

// const { log } = require('node:console');
// const fs = require('node:fs');

// console.log('First');
// const fileContent = fs.readFileSync('./file.txt', 'utf-8');
// console.log(fileContent);

// console.log('Second');

// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log('Third');

// fs.writeFileSync('./greet.txt', 'Hello World!');

// fs.writeFile('./greet.txt', ' Hello Saidou!', { flag: 'a' }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File written');
//   }
// });
