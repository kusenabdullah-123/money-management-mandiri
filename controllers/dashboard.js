const { promiseQuery } = require("../middleware/promise-query");
const getDayUp = async () => {
  let persenDay;
  const yesterday = await promiseQuery(
    "select SUM(kas.masuk) as kemarin FROM kas WHERE day(kas.tanggal) = day(now()-INTERVAL 1 day) AND month(kas.tanggal) = month(now()-INTERVAL 1 day)",
    []
  );
  const nowDay = await promiseQuery(
    "select SUM(kas.masuk) as now FROM kas WHERE day(kas.tanggal) = day(now()) AND month(kas.tanggal) = month(now())",
    []
  );
  const kenaikan = nowDay[0].now - yesterday[0].kemarin;
  if (yesterday[0].kemarin > 0) {
    persenDay = Math.floor((kenaikan / yesterday[0].kemarin) * 100);
  } else {
    persenDay = 0;
  }

  return { kenaikan, persenDay };
};

const getMonthUp = async () => {
  let persenMonth;
  const lastMonth = await promiseQuery(
    "SELECT SUM(kas.masuk) as inLastMonth FROM kas WHERE month(kas.tanggal) = month(now() - INTERVAL 1 month) AND year(kas.tanggal) = YEAR(now())",
    []
  );
  const month = await promiseQuery(
    "SELECT SUM(kas.masuk) as inMonth FROM kas WHERE month(kas.tanggal) = month(now()) AND year(kas.tanggal) = YEAR(now())",
    []
  );
  const monthUp = month[0].inMonth - lastMonth[0].inLastMonth;
  if (lastMonth[0].inLastMonth > 0) {
    persenMonth = Math.floor((monthUp / lastMonth[0].inLastMonth) * 100);
  } else {
    persenMonth = 0;
  }
  return { monthUp, persenMonth };
};
const getText = (value) => {
  return value < 0
    ? ["fa-arrow-down", "text-secondary"]
    : ["fa-arrow-up", "text-success"];
};
module.exports = { getDayUp, getMonthUp, getText };
