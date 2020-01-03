const { Router } = require("express");
const router = Router();

const urlRoute = require("./url");

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) =>
  res.send({ check: "shortener server started ok" })
);

//mount url-shortener routes
router.use("/shorten", urlRoute);

module.exports = router;
