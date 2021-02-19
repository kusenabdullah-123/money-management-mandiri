const router = require("express").Router();
const { cekLogin } = require("../middleware/dashboard");
const { getDayUp } = require("../controllers/dashboard");
// router.use(cekLogin);
const url = `http://localhost:${process.env.PORT}`;
router.get("/dashboard", async (req, res) => {
  const { kenaikan, persenDay } = await getDayUp();

  res.render("admin/dashboard", { url, persenDay, kenaikan });
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
module.exports = router;
