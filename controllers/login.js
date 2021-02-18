const login = (req, res) => {
  res.render("login");
};
const postLogin = (req, res) => {
  let a = false;
  a
    ? res.status(200).json({ status: 200 }).end()
    : res.status(500).json({ status: 500 }).end();
};
module.exports = { login, postLogin };
