const express = require('express')
const router = express.Router()
const { getProducts, getProductById, createProducts, updateProducts, deleteProducts  } = require('../controller/productController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
  .get(getProducts)
  .post(protect, createProducts)

router.route('/:id')
  .get(getProductById)
  .put(protect, updateProducts)
  .delete(protect, deleteProducts) 

module.exports = router