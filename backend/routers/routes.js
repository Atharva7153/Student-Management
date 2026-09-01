const express = require("express")
const fs = require('fs')
const { json } = require("stream/consumers")

const studentController = require("../controllers/studentController")


const router = express.Router()

router.get("/total-students", studentController.getTotalStudents)

router.get("/total-toppers", studentController.getTotalToppers)

router.get("/students", studentController.getAllStudents)

router.post("/add", studentController.addStudents)

router.get("/student/id/:id", studentController.getStudentByID)

router.put("/student/:id", studentController.updateStudentByID);

router.delete("/student/:id", studentController.deleteStudentByID)

router.post("/add-topper", studentController.addTopper)

router.get("/toppers", studentController.getAllToppers)



router.get("/get-:course", studentController.getStudentByCourse)

module.exports = router