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
      urlCode: Joi.string()
        .min(8)
        .max(8)
        .required()
    }
  }
};
