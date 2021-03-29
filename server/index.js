const express = require("express");
const config = require("./config/config");
const cors = require("cors");

const routes = require("./routes");

const app = express();

require("./config/express")(app);
require("./config/mongoose")(app);

app.use(cors());
app.use(routes);

app.listen(config.PORT, () =>
  console.log(`Server is listening on port ${config.PORT}`)
);
