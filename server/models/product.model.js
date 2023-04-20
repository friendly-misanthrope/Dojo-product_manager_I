const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [3, "Title must be at least 3 characters"],
    maxLength: [48, "Title must be 48 characters or less"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [12, "Description must be at least 12 characters"],
    maxLength: [384, "Description must be 384 characters or less"]
  }
}, { timestamps: true })


const Product = mongoose.model('product', ProductSchema)
module.exports = Product