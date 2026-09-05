const fs = require('fs')
const Student = require("../models/students")
const Topper = require("../models/toppers")


exports.getTotalStudents = async (req, res) => {

    const total = await Student.countDocuments()
    res.json({
        total : total
    })

}

exports.getTotalToppers = async (req, res) => {

    const total = await Topper.countDocuments()

    res.json({
        total: total
    })

}

exports.getAllStudents = async (req, res) => {

    const students = await Student.find()

    res.json(students)
}


exports.addStudents = async (req, res) => {

    const { name, age, branch } = req.body

    if (!name || !age || !branch) {
        return res.status(400).json({
            message: "Some fields are Missing"
        })
    }

    const student = await Student.create({
        name: name,
        age: age,
        course: branch
    })

    console.log("New Student Added")

    res.json(student)

}



exports.getStudentByID = async(req, res) => {

    const id = req.params.id;

    const student = await Student.findById(id)

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        })
    }

    res.json(student)

}

exports.updateStudentByID = async (req, res) => {

    const id = req.params.id;

    const student = await Student.findByIdAndUpdate(
        id,
        req.body,
        {new : true}
    )

    res.json(student);
}

exports.deleteStudentByID = async (req, res) => {

    const id = req.params.id
    const student = await Student.findByIdAndDelete(id)

    if(!student){
        return res.json({
            message : "Student Not Found"
        })
    }

    res.json({
        message : "Student Deleted"
    })


}

exports.deleteTopperByID = async (req, res) => {


    const id = req.params.id

    const topper = await Topper.findByIdAndDelete(id)


    res.json({
        message: "Student Removed from Toppers"
    })


}

exports.addTopper = async (req, res) => {

    const id = req.body._id
    const exists = await Topper.exists({student : id})
    if(exists){
        return res.json({
            message : "This student already exists in Topper List"
        })
    }

    const topper = await Topper.create({
        student : id
    })

    res.status(201).json({ message: "Topper Added Succesfully" })

}

exports.getAllToppers = async (req, res) => {

    const toppers = await Topper.find().populate("student")

    res.json(toppers)

}

exports.getStudentByCourse = async (req, res) => {

    
    const course = req.params.course

    const students = await Student.find({
        course : course
    })

    res.json(students)

}

exports.getCourses = async (req, res)=>{
    const courses = await Student.aggregate([
        {
            $group : {
                _id : "$course",
                total : {$sum : 1}
            }
        }
    ])

    res.json(courses)
}

