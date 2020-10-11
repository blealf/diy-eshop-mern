module.exports = app => {
  const products = require("../controllers/product.controller");

  const router = require("express").Router();

  router.post("/", products.create);

  router.post("/:id/reviews", products.createReview);

  router.get("/", products.findAll);

  router.get("/published", products.findAllPublished);

  router.get("/:id", products.findOne);

  router.get("/:id/reviews", products.getReviews)

  router.put("/:id", products.update);

  router.delete("/:id", products.delete);

  router.delete("/", products.deleteAll);

  app.use('/api/products', router)
}