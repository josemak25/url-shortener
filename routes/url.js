const { Router } = require("express");
const { celebrate: validate } = require("celebrate");

const urlCtrl = require("../controller/urlController");
const paramValidation = require("../validations/urlValidation");

const router = Router();

router
  .route("/:code")
  .get(validate(paramValidation.verify, { abortEarly: false }), urlCtrl.verify)
  //Add body validation
  .put(validate(paramValidation.create, { abortEarly: false }), urlCtrl.create);

module.exports = router;
