const router = require("express").Router();
const { login, postLogin } = require("../controllers/login");
router.get("/", login);
router.post("/", postLogin);
module.exports = router;
