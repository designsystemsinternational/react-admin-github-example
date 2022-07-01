// Run like this:
// node scripts/hash_password.js password

const bcrypt = require("bcrypt");

const saltRounds = 10;
const password = process.argv[2];

bcrypt.hash(password, saltRounds, function (err, hash) {
  console.log("Hash is:", hash);
});
