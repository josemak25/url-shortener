const httpStatus = require("http-status");

const { UrlQuery } = require("../queries");
const shortCode = require("../helpers/uniqueUriGenerator");

const sendResponse = require("../helpers/response");

exports.create = async (req, res, next) => {
  try {
    const { shortBaseUrl, originalUrl } = req.body;

    const urlExist = await UrlQuery.findOne({ originalUrl });

    if (urlExist) {
      return res
        .status(httpStatus.FOUND)
        .json(sendResponse(httpStatus.FOUND, "success", urlExist, null));
    }

    const urlCode = shortCode();

    const shortUrl = `${shortBaseUrl}/${urlCode}`;

    // Add the shortUrl to db
    const url = await UrlQuery.create({ originalUrl, shortUrl, urlCode });

    // Add the shortUrl to cache
    cache.addToCache("originalUrl", JSON.stringify({ originalUrl }), url);

    return res.json(sendResponse(httpStatus.OK, "success", url, null));
  } catch (err) {
    next(err);
  }
};

exports.verify = async (req, res, next) => {
  const { urlCode } = req.params;

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
