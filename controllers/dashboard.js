const { promiseQuery } = require("../middleware/promise-query");
const getDayUp = async () => {
  let persenDay;
  const kemarinDay = await promiseQuery(
    "select SUM(kas.masuk) as kemarin FROM kas WHERE day(kas.tanggal) = day(now()-INTERVAL 1 day) AND month(kas.tanggal) = month(now()-INTERVAL 1 day)",
    []
  );
  const nowDay = await promiseQuery(
    "select SUM(kas.masuk) as now FROM kas WHERE day(kas.tanggal) = day(now()) AND month(kas.tanggal) = month(now())",
    []
  );
  const kenaikan = nowDay[0].now - kemarinDay[0].kemarin;
  if (kemarinDay[0].kemarin > 0) {
    persenDay = (kenaikan / kemarinDay[0].kemarin) * 100;
  } else {
    persenDay = 0;
  }

  return { kenaikan, persenDay };
};

module.exports = { getDayUp };
