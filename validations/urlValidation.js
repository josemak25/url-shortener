const { Joi } = require("celebrate");

module.exports = {
  // POST /api/v1/auth/signup
  create: {
    body: {
      shortBaseUrl: Joi.string().required(),
      originalUrl: Joi.string()
        .uri()
        .required()
    }
  },

  //GET /api/v1/shorten/verify
  verify: {
    params: {
      code: Joi.string().required()
    }
  }
};
