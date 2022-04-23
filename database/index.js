const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
  product_id: {type: Number, unique: true},
  name: String,
  description: String,
  category: String,
  default_price: Number,
  features: Array,
  skus:  //of objects in Features collection
});

let Product = mongoose.model('Product', productSchema);

module.exports = {};

//DEAR READER ->
  // command 'mongosh' opens up mongo interface (similar to mysql)
  // When we add our first model into a collection, the command 'show collections' will display all collections in a given database. Our collection will be titled the plural version of whatever word we choose for our model (ex: if model = Product, collection = Products).
  // 'db.products.find({})' shows whats inside the collection

  // ETL OPTIONS
  // 1. create and run a node.js application to read and systematically populate database
  // 2. mongo import and aggregation pipelines - not ETL, but ELT
  // >> create indexes on the correct fields (without, the aggregation pipelines would take months to process)
  // >> spot instances - can go up to a t3 medium