setTimeout(() => console.log('This is setTimeout 1'), 1000);
setTimeout(() => console.log('This is setTimeout 2'), 500);
setTimeout(() => console.log('This is setTimeout 3'), 0);

// setTimeout(() => console.log('This is setTimeout 1'), 0);
// setTimeout(() => {
//   console.log('This is setTimeout 2');
//   process.nextTick(() =>
//     console.log('This is the inner next tick inside setTimeout')
//   );
// }, 0);
// setTimeout(() => console.log('This is setTimeout 3'), 0);

// process.nextTick(() => console.log('This is process.nextTick 1'));

// process.nextTick(() => {
//   console.log('This is process.nextTick 2');
//   process.nextTick(() =>
//     console.log('This is the inner next tick inside next tick')
//   );
// });

// process.nextTick(() => console.log('This is process.nextTick 3'));

// Promise.resolve().then(() => console.log('This is Promise.resolve 1'));

// Promise.resolve().then(() => {
//   console.log('This is Promise.resolve 2');
//   process.nextTick(() =>
//     console.log('This is the inner next tick inside Promise then block. ')
//   );
// });

// Promise.resolve().then(() => console.log('This is Promise resolve 3'));

// Promise.resolve().then(() => console.log('This is Promise.resolve 1'));
// process.nextTick(() => console.log('This is process.nextTick 1'));

// nextTick queue
// process.nextTick(() => {
//   console.log('This is process.nextTick 1');
// });

// Promise queue
// Promise.resolve().then(() => {
//   console.log('This is Promise.resolve 1');
// });
