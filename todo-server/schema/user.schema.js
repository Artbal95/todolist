const {Schema, model, ObjectId} = require("mongoose")

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String
})

module.exports = model("User", UserSchema)