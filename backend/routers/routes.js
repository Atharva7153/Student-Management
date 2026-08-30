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

router.get("/student/id/:id", (req, res)=>{
    const data = fs.readFileSync("data.json", "utf-8");
    const students = JSON.parse(data);

    const id = Number(req.params.id);

    const student = students.find(
        (student) => student.id === id
    )

    if(!student){
        return res.status(404).json({
            message : "Student not found"
        })
    }

    res.json(student)
})

router.put("/student/:id", (req, res) => {

    const data = fs.readFileSync("data.json", "utf-8");
    const students = JSON.parse(data);

    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;

    fs.writeFileSync(
        "data.json",
        JSON.stringify(students, null, 2)
    );

    res.json(student);

});

module.exports = router