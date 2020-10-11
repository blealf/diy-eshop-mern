module.exports = app => {
  const subcategories = require("../controllers/subcategory.controller");

  const router = require("express").Router();

  router.get("/", subcategories.findAll);

  router.get("/:id", subcategories.findOne);

  router.put("/:id", subcategories.update);

  router.delete("/:id", subcategories.delete);

  router.delete("/", subcategories.deleteAll);

  app.use('/api/subcategories', router)
}