const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const User = require("./src/schema/user.schema")

const app = require("./src/root/app")

const {PORT, MONGODB_DATABASE, MONGODB_PASS} = require("./src/config/config");


(function () {
    try {
        const uri = `mongodb+srv://${MONGODB_DATABASE}:${MONGODB_PASS}@cluster0.8m6ce7w.mongodb.net/?retryWrites=true&w=majority`
        mongoose.connect(uri, {}, async () => {
            const salt = await bcrypt.genSalt(10)
            await new User({
                email: "admin@admin.ru",
                password: await bcrypt.hash("admin123", salt)
            }).save()
        });

        app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
    } catch (e) {
        console.log("Server is Stop")
    }
})()