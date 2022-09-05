const bcrypt = require("bcrypt")
const User = require("../schema/user.schema")

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        //    Check if there have candidate
        const candidate = await User.findOne({email})
        console.log(candidate, "candidate");
        if (candidate) {
            const isCheck = await bcrypt.compare(password, candidate.password)
            if (isCheck) {
                res.status(200).json({
                    status: isCheck,
                    message: "You Are successfully Logged In"
                })
            } else {
                res.status(404).json({
                    status: isCheck,
                    message: "Wrong credentials"
                })
            }
        } else {
            res.status(404).json({
                status: false,
                message: "Wrong credentials"
            })
        }
    } catch (e) {
        res.status(404).json({
            status: false,
            message: e.message
        })
    }


}