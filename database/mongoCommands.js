// this page houses all the commands I have used to manipulate my mongoDB collections

function mongoImport() {
  "mongoimport --db=sdc --collection=updatedproducts --type=csv --headerline --file=database/product.csv";
}

function indexSampleData() {
  db.sampleproducts.createIndex({ "id": 1 }, {"unique": true})
  db.samplefeatures.createIndex({ "product_id": 1 }, {"unique": false})
}

function indexRealData() {
  db.products.createIndex({ "id": 1 }, {"unique": false})
  db.features.createIndex({ "product_id": 1 }, {"unique": false})

  //TAKE 2 (index 'productId' field on new collection)
  db.updatedproducts.createIndex({ "id": 1 }, {"unique": false})
  db.updatedproducts.countDocuments() //1000011
}


function aggregateFeaturesToProducts() {
  db.products.aggregate([{
    $lookup: {
      from: "features",
      localField: "id",
      foreignField: "product_id",
      as: "features"
    }}, {
    $out: "products" }])

    //TAKE 2 (features -> products)
    db.updatedproducts.aggregate([{ $lookup: {from: "features", localField: "id", foreignField: "product_id", as: "features"}}, {$out: "updatedproducts" }])
    db.updatedproducts.countDocuments() //1000011
}


function indexAndAggregateSkusToStyles() {
//test aggregation
  db.samplestyles.aggregate([{
    $lookup: {
      from: "sampleskus",
      localField: "id",
      foreignField: "styleId",
      as: "skus"
    }}, {
    $out: "samplestyles" }])

//real aggregation
  db.styles.aggregate([{
    $lookup: {
      from: "skus",
      localField: "id",
      foreignField: "styleId",
      as: "skus"
    }}, {
    $out: "styles" }])
//WHOOPS started this without indexing, gotta go do that

//index style id
  db.styles.createIndex({ "id": 1 }, {"unique": false})
  db.skus.createIndex({ "styleId": 1 }, {"unique": false})

  //I DID NOT DELETE MY COLLECTIONS YET SO I DID NOT HAVE TO DO THIS STEP AGAIN FOR TAKE 2

}

function indexAndAggregateStylesToProducts() {
  //test aggregation
    db.sampleproducts.aggregate([{
      $lookup: {
        from: "samplestyles",
        localField: "id",
        foreignField: "productId",
        as: "styles"
      }}, {
      $out: "sampleproducts" }])

  //real aggregation
    db.products.aggregate([{
      $lookup: {
        from: "styles",
        localField: "id",
        foreignField: "productId",
        as: "styles"
      }}, {
    $out: "products" }])
  //index style id
    db.styles.createIndex({ "productId": 1 }, {"unique": false})

    //TAKE 2 (styles -> products)
    db.updatedproducts.aggregate([{ $lookup: {from: "styles", localField: "id", foreignField: "productId", as: "styles"}}, {$out: "updatedproducts" }])

}

function indexAndAggregateRelatedToProducts() {
    //real aggregation
      db.products.aggregate([{
        $lookup: {
          from: "related",
          localField: "id",
          foreignField: "current_product_id",
          as: "related"
        }}, {
        $out: "products" }])
    //index style id
      db.related.createIndex({ "current_product_id": 1 }, {"unique": false})

    //TAKE 2 (related -> products)
    db.products.aggregate([{ $lookup: {from: "related",localField: "id",foreignField: "current_product_id",as: "related"}}, {$out: "products" }])
    db.updatedproducts.countDocuments() //1000011
}


function removeProductIdField() {
  //real aggregation
    db.products.updateMany(
      {},
      { $unset: { related.current_product_id: "" }}
    )
}