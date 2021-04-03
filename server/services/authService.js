const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");
const UserModel = require("../models/User");

const registerUser = async ({ email, password }) => {
  let hash = await bcrypt.hash(password, SALT_ROUNDS);
  const userToRegister = new UserModel({ email, password: hash });

  return userToRegister.save();
};

const loginUser = async ({ email, password }) => {
  let userToLogin = await UserModel.findOne({ email });
  if (!userToLogin) throw { message: "User not found!" };

  let passwordMatch = await bcrypt.compare(password, userToLogin.password);
  if (!passwordMatch) throw { message: "Wrong password!" };

  let token = await jwt.sign({ email: email }, SECRET, { expiresIn: "1h" });
  return token;
};

module.exports = {
  registerUser,
  loginUser,
};
