const { Router } = require("express");

const urlCtrl = require("../controller/urlController");

const router = Router();

const validUrl = require("valid-url");
const URL = require("../model/url");
const shortCode = require("../helpers/uniqueUriGenerator");


module.exports = router