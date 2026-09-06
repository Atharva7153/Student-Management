const Users = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const user = require("../models/user");


exports.registerUser = async (req, res) => {
    console.log("Fetched Register")
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await Users.create({
        name,
        email,
        password: hashedPassword
    })

    res.json({
        message: "User Registered Succesfully",
        user
    })

    console.log("Done")
}


exports.login = async (req, res) => {
    const { email, password } = req.body

    console.log(email, password)

    const user = await Users.findOne({ email })

    console.log(user)

    if (!user) {
        return res.status(401).json({
            message: "User not found"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(401).json({
            message: "Incorrect password"
        })
    }

    const token = jwt.sign(

        { userId: user._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }

    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 1000
    });

    res.json({
        message: "Login Succesfull",
        user
    })


}

exports.logout = async (req, res) =>{
    
    res.clearCookie("token")
    res.json({
        message : "Logout Successfull"
    })
}

exports.getProfile = async (req, res)=>{

    const user = await Users.findById(req.userId).select("-password")

    if(!user){
        return res.status(401).json({
            message : "User Not Found"
        })
    }

    res.json({
        user
    })
}

