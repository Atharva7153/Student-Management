const express = require("express")
const fs = require('fs')
const { json } = require("stream/consumers")


const router = express.Router()


router.get("/students", (req, res)=>{
    const data = fs.readFileSync("data.json", "utf-8")

    const students = JSON.parse(data)

    res.json(students)
})

router.post("/add", (req, res)=>{

    const data = fs.readFileSync("data.json", "utf-8")

    const students = JSON.parse(data)

    const newStudent = {
        id : students.length + 1,
        name : req.body.name,
        age : req.body.age,
        course : req.body.course
    }

    students.push(newStudent)

    fs.writeFileSync(
        "data.json",
        JSON.stringify(students, null, 2)
    )

    res.status(201).json(newStudent)
})



module.exports = router