const schemaIdFunction = require("./schemaIdFunction")
 
module.exports = mongoose => {
  const schema = mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    subcategories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory"
    }]
  })

  schemaIdFunction(schema);

  const Category = mongoose.model("Category", schema);
  return Category;
}