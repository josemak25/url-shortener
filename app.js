/**
 * third party libraries
 */
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");
const logger = require("morgan");

/**
 * server configuration
 */
const config = require("./config");
const routes = require("./routes");
const error = require("./config/error");

/**
 * express application
 */
const app = express();
const server = http.Server(app);

// start db
require("./config/database");

// start db caches
require("./services/cache.service");

// secure apps by setting various HTTP headers
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false
  })
);

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors({ credentials: true, origin: true }));

// parsing the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable detailed API logging in dev env
if (config.env === "development") {
  app.use(logger("dev"));
}

// mount all routes on root [/] path
app.all("*", routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

//opens a port if the environment is not test
if (process.env.NODE_ENV !== "test") {
  server.listen(config.port, () =>
    console.info(`server started on port ${config.port} (${config.env})`)
  );
}
