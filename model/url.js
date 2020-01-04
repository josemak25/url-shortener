const { Schema, model } = require("mongoose");
const urlJsonFormatter = require("../helpers/urlJsonFormatter");

const schema = new Schema(
  {
    originalUrl: {
      type: String,
      unique: true,
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

schema.methods.toJSON = urlJsonFormatter;

module.exports = model("url", schema);
