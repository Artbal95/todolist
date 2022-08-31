const {Schema, model, ObjectId} = require("mongoose")

const UserSchema = new Schema({
    id: ObjectId,
    email: String,
    password: String
})

module.exports = model("User", UserSchema)