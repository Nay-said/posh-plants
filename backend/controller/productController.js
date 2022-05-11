const Product = require('../Models/productModel')
const asyncHandler = require('express-async-handler')

// Get Products
// @route GET /api/product
// @access Private
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find()
  res.json(products)
})

// Create Products
// @route POST /api/product
// @access Private
const createProducts = asyncHandler(async(req, res) => {
  if(!req.body.productName) {
    res.status(400)
    throw new Error('Payload not in correct format!')
  }

  const product = await Product.create({
    productName: req.body.productName
  })
  res.json(product)
})

// Update Products
// @route PUT /api/product/:id
// @access Private
const updateProducts = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)

  if(!product) {
    res.status(400)
    throw new Error('Product Not Found!')
  }

  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json(updatedProduct)
})

// Delete Products
// @route DELETE /api/product/:id
// @access Private
const deleteProducts = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)

  if(!product) {
    res.status(400)
    throw new Error('Product Not Found!')
  }

  await product.remove()

  res.json({ 
    id: req.params.id, 
    message: `Deleted Product id:${req.params.id}` 
  })
})

module.exports = {
  getProducts, createProducts, updateProducts, deleteProducts
}