const express = require("express")
const router = express.Router()

const data = [
    {
        "name" : "Atharva Sharma",
        "Age" : 19,
        "email": "abc@gmail.com"
    },
    {
        "name" : "Sumedh",
        "Age": 19
    },
    {
        "name" : "IDK",
        "Age" : 20
    },
    {
        "name" : "GHGHE",
        "Age" : 95
    }
]

router.get("/atharva", (req, res)=>{
    res.json(data[0])
})


router.get("/", (req, res)=>{
    res.json(data)
})

module.exports = router