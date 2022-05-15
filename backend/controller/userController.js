const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
const res = require('express/lib/response')

// Register New User
// @route POST /api/users
// @access Public
const signUp = asyncHandler(async(req, res) => {
  const { name, email, password } = req.body
  // Required fields
  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Missing required fields')
  }

  // Avoid duplicate account (Unique email)
  const userExists = await User.findOne({email})

  if(userExists) {
    res.status(400)
    throw new Error('Duplicated, account with this email already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPaswd = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name, email, password: hashedPaswd
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('User data invalid')
  }
})

// Authenticate (User Login)
// @route POST /api/users/login
// @access Public
const logIn = asyncHandler(async(req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid login credentials')
  }
})

// Get User Info
// @route GET /api/my-account
// @access Private
const getUserInfo = asyncHandler(async(req, res) => {
  const { _id, name, email } = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email
  })
  // res.send(`User id ${_id} Info: ${name}, ${email}`)
})

// Generate JWT Token
const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '60d'
  })
}

module.exports = {
  signUp, logIn, getUserInfo
}