module.exports = (req, res, next) => {
  if (req.email) {
    return res.redirect("/products");
  }
  next();
};
