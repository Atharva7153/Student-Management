const Users = require("../models/user")
const bcrypt = require("bcrypt")

exports.registerUser = async (req, res) =>{
    const {name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await Users.create({
        name,
        email,
        password : hashedPassword
    })

    res.json({
        message : "User Registered Succesfully",
        user
    })
}