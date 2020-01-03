const { Joi } = require("celebrate");

module.exports = {
  // POST /api/v1/auth/signup
  create: {
    body: {
      fullName: Joi.string()
        .max(250)
        .required(),
      email: Joi.string()
        .email()
        .max(200)
        .required(),
      phone: Joi.string()
        .regex(/^[+[0-9]{14}$/)
        .required(),
      password: Joi.string()
        .min(6)
        .max(255)
        .required(),
      user_type: Joi.string()
        .valid("admin", "vendor", "rider", "investor")
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
