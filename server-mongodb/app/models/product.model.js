const schemaIdFunction = require("./schemaIdFunction");

module.exports = mongoose => {
  
  const schema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      available: {
        type: Boolean,
        default: true
      },
      subcategory: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'SubCategory'
      },
      reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      }],
      brand: { type: String },
      tags: [{ type: String }],
      highlights: [{ type: String }],
      published: { type: Boolean }
  },
  { timestamps: true }
  )
 
  schemaIdFunction(schema);

  const Product = mongoose.model("Product", schema);
  return Product;
}