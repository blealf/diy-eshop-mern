module.exports = app => {
  const reviews = require("../controllers/review.controller");

  const router = require("express").Router();

  router.get("/", reviews.findAll);

  router.get("/:id", reviews.findOne);

  router.put("/:id", reviews.update);

  router.delete("/:id", reviews.delete);

  router.delete("/", reviews.deleteAll);

  app.use('/api/reviews', router)
}