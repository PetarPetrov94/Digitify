const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");
const UserModel = require("../models/User");

const registerUser = async ({ email, password }) => {
  console.log(`Initially here`);
  let hash = await bcrypt.hash(password, SALT_ROUNDS);
  console.log(`now I'm here`);
  const userToRegister = new UserModel({ email, password: hash });
  console.log(userToRegister);
  return userToRegister.save();
};

module.exports = {
  registerUser,
};
