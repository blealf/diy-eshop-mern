module.exports = app => {
  const categories = require("../controllers/category.controller")
  const router = require("express").Router()

  router.post("/", categories.create)

  router.post("/:id/subcategories", categories.createSubCategory)

  router.get("/", categories.findAll)

  router.get("/:id", categories.findOne)

  router.get("/:name/subcategories", categories.getSubCategories)

  router.put("/:id", categories.update)

  router.delete("/:id", categories.delete)

  router.delete("/", categories.deleteAll)

  app.use("/api/categories", router)
}