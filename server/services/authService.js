const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");
const UserModel = require("../models/User");

const registerUser = async ({ email, password }) => {
  let hash = await bcrypt.hash(password, SALT_ROUNDS);
  const userToRegister = new UserModel({ email, password: hash });

  return userToRegister.save();
};

module.exports = {
  registerUser,
};
