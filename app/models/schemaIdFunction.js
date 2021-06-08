
module.exports = schema => {
  return  schema.method("toJSON", function() {
            const { __v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
          });
}