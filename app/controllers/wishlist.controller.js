const db = require("../models");
const Wishlist = db.wishlists;

exports.create = (req, res) => {
  if(!req.body){
    res.status(400).send({ message: "Content cannot be empty"});
    return;
  }

  const wishlist = new Wishlist({
    user: req.body.user,
    products: req.body.products
  })

  wishlist
    .save()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Wishlist"
      })
    })
}

exports.findAll = (req, res) => {
  Wishlist.find()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || "Some error occured while retrieving the Wishlists"
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  Wishlist.findById(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not retrieve product with id: ${id}`})
      } 
      else res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occured while retrieving the product with id: ${id}`
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

  Wishlist.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not update Wishlist with id: ${id}. Did not find the Wishlist`})
      }
      else res.status(200).send({ message: "Wishlist updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occured while updating the Wishlist with id: ${id}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Wishlist.findByIdAndRemove(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not delete Wishlist with id: ${id}` })
      }
      else res.status(200).send({ message: "Wishlist updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || `Some error occured while deleting the Wishlist with id: ${id}`
      })
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || `Some error occured while deleting the Wishlist with id: ${id}`
      })
    })
}

exports.deleteAll = (req, res) => {
  Wishlist.deleteMany({})
    .then(data => {
      res.status(200).send({ message: `${data.deletedCount} Wishlists deleted successfully!` })
    })
}