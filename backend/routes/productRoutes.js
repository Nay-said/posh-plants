const express = require('express')
const router = express.Router()
const { getProducts, createProducts, updateProducts, deleteProducts  } = require('../controller/productController')

router.route('/')
  .get(getProducts)
  .post(createProducts)

router.route('/:id')
  .put(updateProducts)
  .delete(deleteProducts) 

module.exports = router