const { Router } = require("express");
const { celebrate: validate } = require("celebrate");

const urlCtrl = require("../controller/urlController");
const paramValidation = require("../validations/urlValidation");

const router = Router();

router
  .route("/:urlCode")
  // Add body validation
  .get(validate(paramValidation.verify, { abortEarly: false }), urlCtrl.verify);

module.exports = router;
