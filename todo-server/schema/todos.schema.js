const {Schema, model} = require("mongoose")
const paginate = require('mongoose-paginate-v2');

const TodosSchema = new Schema({
    name: String,
    email: String,
    task: String,
    status: Boolean
})

TodosSchema.plugin(paginate)

module.exports = model("Todo", TodosSchema)