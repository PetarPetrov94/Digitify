const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");

const registerUser = async ({ email, password }) => {
  let salt = await bcrypt.genSalt(SALT_ROUNDS);
  let hash = await bcrypt.hash(password, salt);

  const user = new User({ email, password: hash });
  return user.save();
};

module.exports = {
  registerUser,
};
