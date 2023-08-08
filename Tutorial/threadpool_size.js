const crypto = require('node:crypto');

// In windows

//  UV_THREADPOOL_SIZE=6 node app
// Hash : 3 1539
// Hash : 2 1547
// Hash : 4 1547
// Hash : 5 1551
// Hash : 1 1659
// Hash : 6 1676

const MAX_CALLS = 16;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash : ${i + 1}`, Date.now() - start);
  });
}

// const start = Date.now();
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// console.log('Hash: ', Date.now() - start);

// Password Based Key Derivation Function 2
// one of the most popular method to Hash passwords before storing them.
// crypto.pbkdf2;
