const {Router} = require("express")
const {login, signout} = require("../controllers/auth.controller");
const route = Router()

route.post("/signin", login)
route.post("/signout", signout)

module.exports = route