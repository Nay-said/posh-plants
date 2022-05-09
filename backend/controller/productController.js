const asyncHandler = require('express-async-handler')

// Get Products
// @route GET /api/product
// @access Private
const getProducts = asyncHandler(async(req, res) => {
  res.json({ message: 'Products' })
})

// Create Products
// @route POST /api/product
// @access Private
const createProducts = asyncHandler(async(req, res) => {
  if(!req.body.data) {
    res.status(400)
    throw new Error('Payload not in correct format!')
  }
  res.json({ message: 'Created New Product' })
})

// Update Products
// @route PUT /api/product/:id
// @access Private
const updateProducts = asyncHandler(async(req, res) => {
  res.json({ message: `Edited Product #${req.params.id}` })
})

// Delete Products
// @route DELETE /api/product/:id
// @access Private
const deleteProducts = asyncHandler(async(req, res) => {
  res.json({ message: `Deleted Product #${req.params.id}` })
})

module.exports = {
  getProducts, createProducts, updateProducts, deleteProducts
}