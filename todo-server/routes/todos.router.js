const {Router} = require("express")

const {getAll, createTodo, updateTodoById} = require("../controllers/todos.controller");
const route = Router()

route.get("/", getAll)
route.post("/create", createTodo)
route.put("/update/:id", updateTodoById)

module.exports = route