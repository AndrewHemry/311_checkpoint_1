let express = require("express")
let router = express.Router()

// Linking to controller to access functions
let userController = require("../controllers/users")

// List All Users
router.get("/users", userController.listAll)

// List Specific User
router.get("/users/:id", userController.showSpecific)

// Create New User
router.post("/users", userController.createNew)

// Update Existing User
router.put("/users/:id", userController.updateExisting)

// Delete Existing User
router.delete("/users/:id", userController.deleteUser)

module.exports = router