const mongoose = require('mongoose');

//product ->

const Product = new mongoose.Schema({
  id: Number, //{type: Number, unique: true}
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number
})

const Product = mongoose.model('Product', Product);

//updated product ->

const UpdatedProduct = new mongoose.Schema({
  id: Number, //{type: Number, unique: true}
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number
})

const UpdatedProduct = mongoose.model('UpdatedProduct', UpdatedProduct);

//photos, results, style ->

const Photos = new mongoose.Schema({
  thumbnail_url: String,
  url: String
})

const Results = new mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: Number,
  sale_price: Number
})

const Style = new mongoose.Schema({
  product_id: Number, //{type: Number, unique: true}
  results: [Results]
})

const Style = mongoose.model('Style', Style);


module.exports = { Product, UpdatedProduct, Style };