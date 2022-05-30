const express = require('express')
const router = express.Router()
const { getUsers, signUp, logIn, authAdmin } = require('../controller/userController')
const { protect } = require('../middleware/authMiddleware')

router.get('/all', getUsers)
router.post('/', signUp)
router.post('/login', logIn)
router.post('/admin-auth', protect, authAdmin)

module.exports = router