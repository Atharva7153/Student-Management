const express = require("express")

const studentController = require("../controllers/studentController")
const authMiddleware = require("../middleware/authMiddleware")


const router = express.Router()

router.get("/total-students", studentController.getTotalStudents)

router.get("/total-toppers", studentController.getTotalToppers)

router.get("/get-courses", studentController.getCourses)

router.get("/students", studentController.getAllStudents)

router.get("/get-:course", studentController.getStudentByCourse)

router.use(authMiddleware)





router.post("/add", studentController.addStudents)

router.get("/student/id/:id", studentController.getStudentByID)

router.put("/student/:id", studentController.updateStudentByID);

router.delete("/student/:id", studentController.deleteStudentByID)

router.delete("/delete-topper/:id", studentController.deleteTopperByID)

router.post("/add-topper", studentController.addTopper)

router.get("/toppers", studentController.getAllToppers)



module.exports = router