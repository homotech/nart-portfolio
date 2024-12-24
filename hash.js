const bcrypt = require("bcryptjs");

const password = "Babyruler999.";
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then((hash) => {
  console.log("Store this hash in your .env.local file:");
  console.log(hash);
});
