const express = require("express")

const studentController = require("../controllers/studentController")

const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")


const router = express.Router()
const role = "admin"

router.get("/total-students", studentController.getTotalStudents)

router.get("/total-toppers", studentController.getTotalToppers)

router.get("/get-courses", studentController.getCourses)

router.get("/get-toppers-by-course", studentController.getToppersByCourse)

router.get("/students", studentController.getAllStudents)

router.get("/get-:course", studentController.getStudentByCourse)


router.use(authMiddleware)



router.post("/add", roleMiddleware(role), studentController.addStudents)

router.get("/student/id/:id", studentController.getStudentByID)

router.put("/student/:id", roleMiddleware(role), studentController.updateStudentByID);

router.delete("/student/:id", roleMiddleware(role), studentController.deleteStudentByID)

router.delete("/delete-topper/:id", roleMiddleware(role), studentController.deleteTopperByID)

router.post("/add-topper", roleMiddleware(role), studentController.addTopper)

router.get("/toppers", studentController.getAllToppers)



module.exports = router