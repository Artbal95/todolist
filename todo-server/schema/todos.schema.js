const {Schema, model, ObjectId} = require("mongoose")

const TodosSchema = new Schema({
    name: String,
    email: String,
    task: String,
    status: Boolean
})

module.exports = model("Todo", TodosSchema)