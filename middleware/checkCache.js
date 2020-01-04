const httpStatus = require("http-status");
const sendResponse = require("../helpers/response");
const cache = require("../services/cache.service");

module.exports = async (req, res, next) => {
  const { originalUrl } = req.body;

  try {
    // Find the item is in the cache
    const urlData = await cache.getFromCache(
      "originalUrl",
      JSON.stringify({ originalUrl })
    );

    if (urlData) {
      return res.json(sendResponse(httpStatus.OK, "success", urlData, null));
    }
  } catch (err) {
    next(err);
  }

  next();
};
