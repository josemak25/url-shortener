const { Router } = require("express");

const authToken = require("../policies/auth_policy");
const urlCtrl = require("../controllers/urlController");

const router = Router();

const validUrl = require("valid-url");
const URL = require("../model/url");
const shortCode = require("../helpers/uniqueUriGenerator");
