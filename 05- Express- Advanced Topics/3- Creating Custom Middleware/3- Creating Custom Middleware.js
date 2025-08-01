const logger = require("./logger");
const authenticator = require("./authenticator");

const express = require("express");
const app = express();

app.use(logger);
app.use(authenticator);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
