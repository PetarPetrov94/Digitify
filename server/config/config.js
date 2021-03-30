const config = {
  development: {
    PORT: 4300,
    DB_CONNECTION: "mongodb://localhost/digitify-dev",
    SALT_ROUNDS: 10,
    SECRET: "VeRiBiGSiCRiT",
    COOKIE_NAME: "USER_SESSION",
  },
  production: {
    PORT: 42,
    DB_CONNECTION:
      "mongodb+srv://admin:theDreamIsMyReality@digitify-prod.utsja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    SALT_ROUNDS: 10,
    SECRET: "VeRiBiGSiCRiT",
    COOKIE_NAME: "USER_SESSION",
  },
};

module.exports = config[process.env.NODE_ENV.trim()];
