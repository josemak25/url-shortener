const Query = require("./queries");
const URL = require("../model/url");

// sync all models to general query methods
const UrlQuery = new Query(URL);

// export synched model for use on controller
module.exports = { UrlQuery };
