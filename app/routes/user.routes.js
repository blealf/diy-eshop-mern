module.exports = app => {
  const routes = require("express").Router()
  const users = require("../controllers/user.controller")

  routes.post("/", users.create)

  routes.get("/", users.findAll)

  routes.get("/:id", users.findOne)

  routes.put("/:id", users.update)

  routes.delete("/:id", users.delete)

  routes.delete("/", users.deleteAll)

  app.use("/api/users", routes)
}