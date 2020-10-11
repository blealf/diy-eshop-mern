const dbConfig = require('../config/db.config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose
db.url = dbConfig.url

db.products = require("./product.model.js")(mongoose)
db.users = require("./user.model")(mongoose)
db.categories = require("./category.model")(mongoose)
db.subcategories = require("./subcategory.model")(mongoose)
db.reviews = require("./review.model")(mongoose)
db.orders = require("./order.model")
db.wishlists = require("./wishlist.model")

module.exports = db