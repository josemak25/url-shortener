const httpStatus = require("http-status");
const validUrl = require("valid-url");
const sendResponse = require("../helpers/response");

module.exports = (req, res, next) => {
  const { shortBaseUrl, originalUrl } = req.body;

  if (!validUrl.isUri(shortBaseUrl)) {
    return res.json(
      sendResponse(httpStatus.BAD_REQUEST, "Invalid Base Url format!", null, {
        error: "Invalid Base Url format!"
      })
    );
  }

  if (!validUrl.isUri(originalUrl)) {
    return res.json(
      sendResponse(httpStatus.BAD_REQUEST, "Invalid Original Url.!", null, {
        error: "Invalid Original Url.!"
      })
    );
  }

  next();
};
