const { Schema, model } = require("mongoose");

const schema = new Schema(
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

schema.methods.toJSON = function() {
  const shortenedUrl = this.toObject();
  const { _id } = shortenedUrl;
  shortenedUrl.id = _id;
  delete shortenedUrl._id;
  delete shortenedUrl.__v;
  return shortenedUrl;
};

module.exports = model("url", schema);
