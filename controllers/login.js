const { promiseQuery } = require("../middleware/promise-query");
const login = async (req, res) => {
  res.render("login");
};
const postLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const result = await promiseQuery(
      `select users.nama,users.password,users.username from users where username = ? and password = ?`,
      [username, password]
    );

    if (result.length > 0) {
      req.session.login = true;
      return res.status(200).json({
        status: true,
        message: "succes login",
      });
    } else {
      return res
        .status(200)
        .json({ status: false, message: "wrong username or password" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "internal server error" });
  }
};
module.exports = { login, postLogin };
