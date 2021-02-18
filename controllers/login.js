const { promiseQuery } = require("../middleware/promise-query");
const login = async (req, res) => {
  res.render("login");
};
const postLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const result = await promiseQuery(
      `select * from users where username = ? and password = ?`,
      [username, password]
    );

    result
      ? res
          .status(200)
          .json({
            status: true,
            nama: result[0].nama,
            username: result[0].username,
          })
      : res.status(200).json({ status: false, error: "eror" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { login, postLogin };
