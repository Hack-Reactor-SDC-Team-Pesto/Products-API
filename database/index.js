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
  // WHEN WE ADD OUR FIRST MODEL INTO OUR COLLECTION, show collections ON THE COMMAND LINE WILL SHOW US OUR COLLECTIONS. OUR COLLECTION WILL BE TITLED THE PLURAL VERSION OF THE WORD WE USE FOR OUR MODEL, SO OUR COLLECTION SHOULD BE TITLED 'Repos', PLURAL FOR 'Repo', OUR MODEL ON LINE 13.
  // db.products.find({}) shows whats inside the collection
  // mongosh opens up mongo interface (similar to mysql)

  // create and run a node.js application to read and systematically populate database
  // mongo import and aggregation pipelines - not doing etl, but elt
  // create indexes on the correct fields (without, the aggregation pipelines would take months to process)
  // look into: how to keep track of an index in mongodb
  // once you deploy your database, it will cost $
  // spot instances - can go up to a t3 medium