const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const authRoutes = require("../routes/auth.router")
const todosRoutes = require("../routes/todos.router")

const app = express()

app.use(cors())
app.use(morgan("tiny"))

app.use("/app", todosRoutes)
app.use("/auth", authRoutes)


module.exports = app