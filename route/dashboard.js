const router = require("express").Router();
const { cekLogin } = require("../middleware/dashboard");
// router.use(cekLogin);
const url = `http://localhost:${process.env.PORT}`;
router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard", { url });
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
module.exports = router;
