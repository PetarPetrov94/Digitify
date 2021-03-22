const config = {
  development: {
    PORT: 4200,
    DB_CONNECTION: "mongodb://localhost/digitify-dev",
  },
  production: {
    PORT: 42,
    DB_CONNECTION:
      "mongodb+srv://admin:theDreamIsMyReality@digitify-prod.utsja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

module.exports = config[process.env.NODE_ENV.trim()];
