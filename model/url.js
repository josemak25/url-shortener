const { Schema, model } = require("mongoose");

const URL = new Schema(
  {
    originalUrl: {
      type: String,
      required: true
    },
    urlCode: {
      type: String,
      required: true
    },
    shortUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = model("url", URL);
