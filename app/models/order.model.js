const schemaIdFunction = require("./schemaIdFunction");

module.exports = mongoose => {
  const schema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number
    },
    checkedout: {
      type: Boolean,
      default: false
    }
  }, { timestamps: true })

  schemaIdFunction(schema)
  
  const Order = mongoose.model("Order", schema);
  return Order;
}