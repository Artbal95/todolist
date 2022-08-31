const Todo = require("../schema/todos.schema")

exports.getAll = async (req, res) => {
    try {
        const {page = 1, sort = {name: 1}} = req.query
        const list = await Todo.find({}, null, {
            skip: page,
            limit: 3,
            sort
        })
        res.status(200).json({
            list
        })
    } catch (e) {
        console.log("Can`t Find Any Todos List")
        res.status(404).json({
            list: []
        })
    }
}

exports.createTodo = async (req, res) => {
    try {
        const {name, email, task} = req.body
        if(!name && !email && !task){
            throw new Error("You must write All inputs")
        }
        const newTodo = new Todo({name, email, task, status: false})
        await newTodo.save()
        res.status(201).json({
            newTodo
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
        const {task, status} = req.body
        const newTodo = Todo.findByIdAndUpdate({_id: id}, {
            task,
            status
        }, { new: true })
        res.status(201).json({
            newTodo
        })
    } catch (e) {
        console.log("Can`t Find Any Todos List")
    }
}