const bcrypt = require("bcrypt")

const User = require("../schema/user.schema")

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if (candidate) {
            const checkPassword = await bcrypt.compare(password, candidate.password)

            if (checkPassword) {

                await User.findOneAndUpdate({email}, {active: true})

                res.status(200).json({
                    email,
                    status: checkPassword,
                    message: "You are successfully Logged In"
                })

            } else {
                res.status(404).json({
                    email: "",
                    status: checkPassword,
                    message: "Wrong credentials"
                })
            }
        } else {
            res.status(404).json({
                email: "",
                status: false,
                message: "Wrong credentials"
            })
        }
    } catch (e) {
        res.status(404).json({
            email: "",
            status: false,
            message: e.message
        })
    }
}

exports.signout = async (req, res) => {
    try {
        const {email} = req.body
        await User.findOneAndUpdate({email}, {active: false})
        res.status(200).json({
            status: true,
            message: "You are successfully Sign Out"
        })
    } catch (e) {
        res.status(409).json({
            status: false,
            message: e.message
        })
    }
}