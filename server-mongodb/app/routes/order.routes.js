module.exports = app => {
  const orders = require("../controllers/order.controller")
  const router = require("express").Router()

  router.post("/", orders.create)

  router.get("/", orders.findAll)

  router.get("/checkedout", orders.findAllCheckedOut)

  router.get("/:id", orders.findOne)

  router.put("/:id", orders.update)

  router.delete("/:id", orders.delete)

  router.delete("/", orders.deleteAll)

  

  app.use("/api/orders", router)
}