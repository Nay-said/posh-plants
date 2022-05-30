const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product name required!']
  },
  price: {
    type: Number,
    required: [true, 'Product price required!']
  },
  type: {
    type: String,
    required: [true, 'Product type required!']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', goalSchema)