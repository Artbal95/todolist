const {Schema, model, ObjectId} = require("mongoose")

const TodosSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    task: String,
    status: Boolean
})

module.exports = model("Todo", TodosSchema)