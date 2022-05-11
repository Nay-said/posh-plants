const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product name required!']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', goalSchema)