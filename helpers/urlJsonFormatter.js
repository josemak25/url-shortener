module.exports = function() {
  const shortenedUrl = this.toObject();
  const { _id } = shortenedUrl;
  shortenedUrl.id = _id;
  delete shortenedUrl._id;
  delete shortenedUrl.__v;
  return shortenedUrl;
};
