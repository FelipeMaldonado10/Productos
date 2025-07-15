const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  categories: [String],
  variants: [
    {
      size: String,
      color: String,
      stock: Number
    }
  ]
});

module.exports = mongoose.model('Product', productSchema);
