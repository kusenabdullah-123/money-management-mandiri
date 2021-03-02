const router = require("express").Router();
const { cekLogin } = require("../middleware/dashboard");
const {
  getDayUp,
  getMonthUp,
  getText,
  getSaldo,
  getPengeluaran,
  getChart,
} = require("../controllers/dashboard");
// router.use(cekLogin);
const url = `http://localhost:${process.env.PORT}`;
router.get("/dashboard", async (req, res) => {
  const { kenaikan, persenDay } = await getDayUp();
  const { monthUp, persenMonth } = await getMonthUp();
  const [arrowDay, labelDay] = getText(kenaikan);
  const [arrowMonth, labelMonth] = getText(monthUp);
  const saldo = await getSaldo();
  const pengeluaran = await getPengeluaran();
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
    saldo,
    pengeluaran,
  });
});
router.get("/chart", async (req, res) => {
  try {
    const { bulan, kasMasuk, kasKeluar } = await getChart();
    res.status(200).json({ bulan, kasMasuk, kasKeluar }).end();
  } catch (error) {
    res.status(500).json({ status: 500, message: "server error" }).end();
  }
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
module.exports = router;
