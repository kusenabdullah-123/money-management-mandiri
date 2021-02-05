require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const url = `http://localhost:${process.env.PORT}`;
app.get("/", (req, res) => {
  res.render("login");
});
app.get("/admin/dashboard", (req, res) => {
  res.render("admin/dashboard", { url });
});
app.get("/admin/kas", (req, res) => {
  res.render("admin/kas/", { url });
});
app.listen(process.env.PORT, () => {
  console.log(url);
});
