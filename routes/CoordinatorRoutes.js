const router = require('express').Router()
const coordinatorController = require('../controllers/CoordinatorController')
const authMiddleWare = require('../middleware/AuthMiddleware')

//API
router.post("/coordinator",coordinatorController.addCoordinator)
router.post("/coordinator/login",coordinatorController.loginCoordinator)
router.get("/coordinator/list",authMiddleWare.authUser,coordinatorController.listAllCoordinators)

module.exports = router