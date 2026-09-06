const express = require('express')
const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")
const { overwriteMiddlewareArguments } = require('mongoose')

const router = express.Router()

router.post("/register", authController.registerUser)

router.post("/login", authController.login)

router.get("/profile", authMiddleware, authController.getProfile)

router.get("/logout", authController.logout)

router.get("/me", authMiddleware, authController.getProfile)

module.exports = router