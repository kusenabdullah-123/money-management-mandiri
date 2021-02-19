const cekLogin = (req, res, next) => {
  const url = `http://localhost:${process.env.PORT}`;
  if (!req.session.login) {
    return res.render("admin/forbiden", { url });
  }
  next();
};

module.exports = { cekLogin };
