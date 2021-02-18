require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const compresion = require("compression");
const helmet = require("helmet");

app.use(compresion());
// app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 50000 },
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./route/login"));
app.use("/admin", require("./route/dashboard"));
const url = `http://localhost:${process.env.PORT}`;
app.listen(process.env.PORT, () => {
  console.log(url);
});
