const { log } = require('node:console');
const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}.`);
});

emitter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log('Serving complementary drink.');
  }
});

console.log('Do Work before events occurs in the system.');

emitter.emit('order-pizza', 'large', 'chicken');
