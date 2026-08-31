const express = require("express")
const fs = require('fs')
const { json } = require("stream/consumers")


const router = express.Router()

router.get("/total-students", (req, res)=>{

    const data = fs.readFileSync("data.json", "utf-8")
    const students = JSON.parse(data)

    res.json({
        total : students.length
    })
    
})

router.get("/total-toppers", (req, res)=>{

    const data = fs.readFileSync("toppers.json", "utf-8")
    const students = JSON.parse(data)

    res.json({
        total : students.length
    })
    
})

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
        course : req.body.branch
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

router.delete("/student/:id", (req, res)=>{

    

    const data = fs.readFileSync("data.json", "utf-8")
    const students = JSON.parse(data)

    const TopperData = fs.readFileSync("toppers.json", "utf-8")
    const toppers = JSON.parse(TopperData)


    const id = Number(req.params.id)

    const newTopper = toppers.filter(
        topper => topper.id !== id
    )

    const newStudent = students.filter(
        student => student.id !== id
    )

    fs.writeFileSync(
        "data.json",
        JSON.stringify(newStudent, null , 2)
    )

    fs.writeFileSync(
        "toppers.json",
        JSON.stringify(newTopper, null, 2)
    )


    res.json({
        message : "Student Deleted Successfully"
    })

    
})

router.post("/add-topper", (req, res)=>{

    const data = fs.readFileSync("toppers.json", "utf-8")

    const students = JSON.parse(data)
    const name = req.body.name

    const existingStudent = students.some(
        student => student.name == name
    )

    if(existingStudent){
        return res.json({
            message : "Student already exist in Toppers list"
        })
    }

    const newStudent = {
        id : students.length + 1,
        name : req.body.name,
        age : req.body.age,
        course : req.body.course
    }

    

    students.push(newStudent)

    fs.writeFileSync(
        "toppers.json",
        JSON.stringify(students, null, 2)
    )

    res.status(201).json({message : "Topper Added Succesfully"})
})

router.get("/toppers", (req, res)=>{
    const data = fs.readFileSync("toppers.json", "utf-8")

    const students = JSON.parse(data)

    res.json(students)
})

router.get("/get-cs", (req, res)=>{

    const data = fs.readFileSync("data.json", "utf-8")

    const students = JSON.parse(data)

    const Students = students.filter(
        student => student.course == "CSE"
    )

    res.json(Students)

})

router.get("/get-mech", (req, res)=>{

    const data = fs.readFileSync("data.json", "utf-8")

    const students = JSON.parse(data)

    const Students = students.filter(
        student => student.course == "Mechanical"
    )

    res.json(Students)

})

module.exports = router