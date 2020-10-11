const schemaIdFunction = require("./schemaIdFunction");

module.exports = mongoose => {
  const schema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }]
  }, { timestamps: true })

  schemaIdFunction(schema)
  
  const Wishlist = mongoose.model("Wishlist", schema);
  return Wishlist;
}