const db = require("../models");
const Review = db.reviews;

// Create method in products -> exports.createReview


exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { $regex: new RegExp(title), $options: "i"}} : {};

  Review.find(condition)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || "Some error occured while retrieving the reviews"
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  Review.findById(id)
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

  Review.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not update review with id: ${id}. Did not find the review`})
      }
      else res.status(200).send({ message: "Review updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occured while updating the review with id: ${id}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Review.findByIdAndRemove(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not delete Review with id: ${id}` })
      }
      else res.status(200).send({ message: "Review updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || `Some error occured while deleting the Review with id: ${id}`
      })
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || `Some error occured while deleting the review with id: ${id}`
      })
    })
}

exports.deleteAll = (req, res) => {
  Review.deleteMany({})
    .then(data => {
      res.status(200).send({ message: `${data.deletedCount} reviews deleted successfully!` })
    })
}