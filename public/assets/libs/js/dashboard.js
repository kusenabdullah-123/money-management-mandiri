import { CountUp } from "../../vendor/countup/countUp.min.js";

window.addEventListener("DOMContentLoaded", async (event) => {
  // weiget
  const dayCount = document.querySelector("#countDay").innerHTML;
  const monthCount = document.querySelector("#countMonth").innerHTML;
  const saldo = document.querySelector("#saldo").innerHTML;
  const pengeluaran = document.querySelector("#pengeluaran").innerHTML;
  const countUp = new CountUp("countDay", dayCount);
  const monthUp = new CountUp("countMonth", monthCount);
  const saldoUp = new CountUp("saldo", saldo);
  const pengeluaranUp = new CountUp("pengeluaran", pengeluaran);
  countUp.start();
  monthUp.start();
  saldoUp.start();
  pengeluaranUp.start();
  // Chart
  const getDataChart = async () => {
    const { data } = await axios.get("/admin/chart");
    return data;
  };
  const { bulan, kasMasuk, kasKeluar } = await getDataChart();
  const ctx = document.getElementById("chart_dashboard").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: bulan,
      datasets: [
        {
          label: "Masuk",
          data: kasMasuk,
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Keluar",
          data: kasKeluar,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],

          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
