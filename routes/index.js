const { Router } = require("express");
const router = Router();

const urlShortenerRoute = require("./urlShortener");
const shortenedUrlVerifierRoute = require("./shortenedUrlVerifier");

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) =>
  res.send({ check: "shortener server started ok" })
);

// mount shortened url verifier routes
router.use("/", shortenedUrlVerifierRoute);

// mount url-shortener routes
router.use("/shorten", urlShortenerRoute);

module.exports = router;
