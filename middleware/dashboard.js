const cekLogin = (req, res, next) => {
  if (!req.session.login) {
    return res.redirect("/");
  }
  next();
};

module.exports = { cekLogin };
