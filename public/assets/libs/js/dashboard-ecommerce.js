// ==============================================================
// Total Revenue
// ==============================================================
Morris.Area({
  element: "morris_totalrevenue",
  behaveLikeLine: true,
  data: [
    { x: "2016 Q1", y: 0 },
    { x: "2016 Q2", y: 7500 },
    { x: "2017 Q3", y: 15000 },
    { x: "2017 Q4", y: 22500 },
    { x: "2018 Q5", y: 30000 },
    { x: "2018 Q6", y: 40000 },
  ],
  xkey: "x",
  ykeys: ["y"],
  labels: ["Y"],
  lineColors: ["#5969ff"],
  resize: true,
});
