const bcrypt = require("bcryptjs");

async function hashPassword() {
  const hash = await bcrypt.hash("Babyruler999.", 10);
  console.log("", hash);
}

hashPassword();
