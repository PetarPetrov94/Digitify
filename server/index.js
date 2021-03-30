const express = require("express");
const config = require("./config/config");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

require("./config/express")(app);
require("./config/mongoose")(app);

app.listen(config.PORT, () =>
  console.log(`Server is listening on port ${config.PORT}`)
);
