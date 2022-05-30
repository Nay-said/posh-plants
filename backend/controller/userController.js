const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
const res = require('express/lib/response')

// Get All Users
// @route GET /api/users/all
// @access Public
const getUsers = asyncHandler(async(req, res) => {
  const users = await User.find()
  res.json(users)
})

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
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid login credentials')
  }
})

// Authenticate Admin User
// @route POST /api/admin-auth
// @access Private
const authAdmin = asyncHandler(async(req, res) => {
  const {email} = req.body
  const user = await User.findOne({email})

  if(user && user.isAdmin) {
    res.status(200).json(req.user)
  } else {
    res.status(400)
    throw new Error('Invalid Permission! Not an admin account.')
  }
})

// Generate JWT Token
const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '60d'
  })
}

module.exports = {
  getUsers, signUp, logIn, authAdmin
}