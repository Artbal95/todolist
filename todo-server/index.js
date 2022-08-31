const mongoose = require("mongoose");

const app = require("./root/app")

const {PORT, MONGODB_DATABASE, MONGODB_PASS} = require("./config/config");


(function () {
    try {
        const uri = `mongodb+srv://${MONGODB_DATABASE}:${MONGODB_PASS}@cluster0.8m6ce7w.mongodb.net/?retryWrites=true&w=majority`
        mongoose.connect(uri, {}, () => console.log("Mongo DB is Connected"));


        app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
    } catch (e) {
        console.log("Server is Stop")
    }
})()