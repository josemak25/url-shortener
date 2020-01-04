const mongoose = require("mongoose");
const util = require("util");

// config should be imported before importing any other file
const config = require("./index");

const debug = require("debug")("url-shortener:index");

// plugin global promise in mongoose
mongoose.Promise = global.Promise;

// connect to mongo db
const { dbName, dbHost } = config.database;
const mongoUri = `${dbHost}/${dbName}`;

mongoose.connect(mongoUri, {
  keepAlive: 1,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.mongooseDebug) {
  mongoose.set("debug", (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
