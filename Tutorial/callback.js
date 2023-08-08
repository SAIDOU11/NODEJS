function greet(name) {
  console.log(`Hello there ${name}`);
}

function higherOrderFunction(callback) {
  const name = 'Saidou';
  callback(name);
}

higherOrderFunction(greet);
