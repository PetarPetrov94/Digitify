module.exports = (req, res, next) => {
  if (!req.email) {
    res.redirect("/auth/login");
    return;
  }
  next();
};
