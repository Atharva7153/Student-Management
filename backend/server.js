const express  = require("express")
const cors = require("cors")
const router = require("./routers/routes")


const app = express()

app.use(cors())
app.use(express.json())

app.use(router)


app.listen(3000, ()=>{
    console.log("Server running on 3000")
})