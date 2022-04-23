const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  id: Number, //{type: Number, unique: true}
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number
})

const Product = mongoose.model('Product', Product);

//

const UpdatedProduct = new mongoose.Schema({
  id: Number, //{type: Number, unique: true}
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number
})

const UpdatedProduct = mongoose.model('UpdatedProduct', UpdatedProduct);

//

const Photos = new mongoose.Schema({
  thumbnail_url: String,
  url: String
})

const Results = new mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: Number,
  sale_price: Numbermo
  // 'default?': Boolean,
  // photos: [Photos],
  // skus:
})


const Style = new mongoose.Schema({
  product_id: Number, //{type: Number, unique: true}
  results: [Results]
})

const Style = mongoose.model('Style', Style);


module.exports = { Product, UpdatedProduct, Style };