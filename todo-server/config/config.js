require('dotenv').config()

exports.PORT = process.env.PORT || 8000
exports.MONGODB_DATABASE = process.env.MONGODB_DATABASE || ""
exports.MONGODB_PASS = process.env.MONGODB_PASS || ""