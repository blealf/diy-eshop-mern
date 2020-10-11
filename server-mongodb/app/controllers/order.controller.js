const db = require("../models")
const Order = db.orders

exports.create = (req, res) => {
  if(!req.body){
    res.status(400).send({ message: "Content cannot be empty!"})
    return
  }

  const order = new Order({
    user: req.body.user,
    product: req.body.user,
    quantity: req.body.quantity
  })

  order
    .save()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the order"
      })
    })

}

exports.findAll = (req, res) => {
  Order.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occured while retrieving the orders"
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Order.findById(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not find order with id: ${id}`})
      }
      else res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occured while retrieving the order with id: ${id}`
      })
    })
}

exports.update = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: "Data to update cannot be empty"
    })
  }

  const id = res.params.id;

  Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not update Order with id: ${id}. Did not find the Order`})
      }
      else res.status(200).send({ message: "Order updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occured while updating the Order with id: ${id}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Order.findByIdAndRemove(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not delete Order with id: ${id}` })
      }
      else res.status(200).send({ message: "Order updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || `Some error occured while deleting the Order with id: ${id}`
      })
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || `Some error occured while deleting the order with id: ${id}`
      })
    })
}

exports.deleteAll = (req, res) => {
  Order.deleteMany({})
    .then(data => {
      res.status(200).send({ message: `${data.deletedCount} Orders deleted successfully!` })
    })
}

exports.findAllCheckedOut = (req, res) => {
  Order.find({ checkedout: true })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving order"
      })
    })
}