const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("login");
});
router.get("/getLogin", (req, res) => {
  req.session.login = true;
  res.redirect("/admin/dashboard");
});
module.exports = router;
