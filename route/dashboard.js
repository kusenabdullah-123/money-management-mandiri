const router = require("express").Router();
const { cekLogin } = require("../middleware/dashboard");
const { getDayUp, getMonthUp, getText } = require("../controllers/dashboard");
// router.use(cekLogin);
const url = `http://localhost:${process.env.PORT}`;
router.get("/dashboard", async (req, res) => {
  const { kenaikan, persenDay } = await getDayUp();
  const { monthUp, persenMonth } = await getMonthUp();
  const [arrowDay, labelDay] = getText(kenaikan);
  const [arrowMonth, labelMonth] = getText(monthUp);
  res.render("admin/dashboard", {
    url,
    persenDay,
    kenaikan,
    monthUp,
    persenMonth,
    arrowDay,
    arrowMonth,
    labelDay,
    labelMonth,
  });
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
module.exports = router;
