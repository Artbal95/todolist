const {Router} = require("express")
const {login} = require("../controllers/auth.controller");
const route = Router()

route.post("/signin", login)

module.exports = route