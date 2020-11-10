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
      discount: {
        type: Number,
      },
      available: {
        type: Boolean,
        default: true
      },
      model: {
        type: String,
        required: true
      },
      ratings: [{
        score: Number,
        user: String
      }],
      reviews: [{
        title: String,
        body: String,
        user: String
      }],
      brand: { type: String },
      tags: [{ type: String }],
      highlights: [{ type: String }],
      published: { type: Boolean },
      saleExpiry: {
        type: Date
      },
      images: [{
        data: Buffer,
        contentType: String
      }]
  },
  { timestamps: true }
  )
 
  schemaIdFunction(schema);

  const Product = mongoose.model("Product", schema);
  return Product;
}