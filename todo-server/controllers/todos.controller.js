const Todo = require("../schema/todos.schema")
const User = require("../schema/user.schema")

exports.getAll = async (req, res) => {
    try {
        const {page = 1, sort = ["name", 1]} = req.query
        console.log(sort)
        const options = {
            page,
            limit: 3,
            sort: {
                [sort[0]]: sort[1]
            }
        };
        const {docs, ...info} = await Todo.paginate({}, options)
        res.status(200).json({
            todos: docs,
            info: info
        })
    } catch (e) {
        console.log("Can`t Find Any Todos List")
        res.status(404).json([])
    }
}

exports.createTodo = async (req, res) => {
    try {
        const {name, email, task} = req.body
        const {page = 1, sort = {name: 1}} = req.query

        await new Todo({name, email, task, status: false}).save()

        const options = {
            page,
            limit: 3,
            sort
        };

        const {docs, ...info} = await Todo.paginate({}, options)

        res.status(201).json({
            todos: docs,
            info: info
        })
    } catch (e) {
        console.log("Can`t Find Any Todos List")
        res.status(404).json({
            message: e.message
        })
    }
}

exports.updateTodoById = async (req, res) => {
    try {
        const {id} = req.params
        const {email, task, status} = req.body

        const {active} = await User.find({email})
        if(active){
            const newTodo = await Todo.findByIdAndUpdate({_id: id}, {
                task,
                status
            }, { new: true })
            res.status(201).json({
                todo: newTodo,
                message: "Todo is successfully updated"
            })
        } else {
            res.status(401).json({
                todo: null,
                message: "Unauthorized"
            })
        }
    } catch (e) {
        console.log("Can`t Find Any Todos List")
    }
}