const { Router } = require("express");
const { celebrate: validate } = require("celebrate");

const urlCtrl = require("../controller/urlController");
const paramValidation = require("../validations/urlValidation");
const validateUri = require("../middleware/validateUri");
const checkCache = require("../middleware/checkCache");

const router = Router();

router
  .route("/")
  //Add body validation
  .post(
    [
      validate(paramValidation.create, { abortEarly: false }),
      validateUri,
      checkCache
    ],
    urlCtrl.create
  );

router
  .route("/:code")
  //Add body validation
  .get(validate(paramValidation.verify, { abortEarly: false }), urlCtrl.verify);

module.exports = router;
