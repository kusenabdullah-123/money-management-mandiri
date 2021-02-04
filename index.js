require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("login");
});
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
