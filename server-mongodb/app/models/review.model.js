// const { Schema } = require("mongoose");
const schemaIdFunction = require("./schemaIdFunction");

module.exports = mongoose => {
  const schema = new mongoose.Schema({
    rating: {
      type: Number
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  }, { timestamps: true})

  schemaIdFunction(schema);

  const Review = mongoose.model("Review", schema)
  return Review
}
