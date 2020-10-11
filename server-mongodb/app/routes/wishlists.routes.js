module.exports = app => {
  const wishlists = require("../controllers/wishlist.controller");

  const router = require("express").Router();

  router.post("/", wishlists.create);

  router.get("/", wishlists.findAll);

  router.get("/:id", wishlists.findOne);

  router.put("/:id", wishlists.update);

  router.delete("/:id", wishlists.delete);

  router.delete("/", wishlists.deleteAll);

  app.use('/api/wishlists', router)
}