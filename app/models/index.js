const dbConfig = require('../config/db.config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose
db.url = dbConfig.url

db.products = require("./product.model.js")(mongoose)
db.users = require("./user.model")(mongoose)
db.orders = require("./order.model")(mongoose)
db.wishlists = require("./wishlist.model")(mongoose)

module.exports = db