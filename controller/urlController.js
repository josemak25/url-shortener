const httpStatus = require("http-status");
const validUrl = require("valid-url");

const { UrlQuery } = require("../queries");
const shortCode = require("../helpers/uniqueUriGenerator");

const sendResponse = require("../helpers/response");

exports.create = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.verify = async (req, res, next) => {
  const { code: urlCode } = req.params;

  try {
    const urlExits = await UrlQuery.findOne({ urlCode });

    if (urlExits) return res.redirect(urlExits.originalUrl);

    return res.status(httpStatus.BAD_REQUEST).json(
      sendResponse(httpStatus.BAD_REQUEST, "Wrong link", null, {
        error: "Wrong link, no link matches the requested uri"
      })
    );
  } catch (err) {
    next(err);
  }
};
