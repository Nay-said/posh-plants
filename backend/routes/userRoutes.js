const express = require('express')
const router = express.Router()
const { signUp, logIn, getUserInfo } = require('../controller/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', signUp)
router.post('/login', logIn)
router.get('/my-account', protect, getUserInfo)



module.exports = router