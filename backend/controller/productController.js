const Product = require('../Models/productModel')
const asyncHandler = require('express-async-handler')

// Get All Products
// @route GET /api/product
// @access Public
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find()
  res.json(products)
})

// Get Product By Id
// @route GET /api/product/:id
// @access Public
const getProductById = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)

  if(!product) {
    res.status(400)
    throw new Error('Product Not Found!')
  }

  res.json(product)
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
    productName: req.body.productName,
    price: req.body.price,
    type: req.body.type,
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
  getProducts, getProductById, createProducts, updateProducts, deleteProducts
}