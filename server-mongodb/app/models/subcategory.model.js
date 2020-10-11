const schemaIdFunction = require("./schemaIdFunction");

module.exports = mongoose => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category"
    }
  })

  schemaIdFunction(schema);

  const SubCategory = mongoose.model("SubCategory", schema);
  return SubCategory;
}