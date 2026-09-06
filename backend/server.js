const express  = require("express")
const cors = require("cors")
const router = require("./routers/routes")
const authRouter = require("./routers/auth")

const dotenv = require("dotenv")

const connectDb = require("./config/db")
const cookieParser = require("cookie-parser")

dotenv.config()


const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use(authRouter)
app.use(router)


connectDb()

app.listen(3000, ()=>{
    console.log("Server running on 3000")
})