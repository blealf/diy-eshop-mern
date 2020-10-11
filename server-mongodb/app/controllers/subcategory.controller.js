const db = require("../models");
const SubCategory = db.subcategories;
const Category = db.categories;

// Create method in category -> exports.createSubCategory

exports.findAll = (req, res) => {
  const name = req.query.title;
  const condition = name ? { name: { $regex: new RegExp(name), $options: "i"}} : {};

  SubCategory.find(condition)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || "Some error occured while retrieving the SubCategorys"
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  SubCategory.findById(id)
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

  SubCategory.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not update SubCategory with id: ${id}. Did not find the SubCategory`})
      }
      else res.status(200).send({ message: "SubCategory updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occured while updating the SubCategory with id: ${id}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  SubCategory.findByIdAndRemove(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not delete SubCategory with id: ${id}` })
      }
      else res.status(200).send({ message: "SubCategory updated successfully!" })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || `Some error occured while deleting the SubCategory with id: ${id}`
      })
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || `Some error occured while deleting the SubCategory with id: ${id}`
      })
    })
}

exports.deleteAll = (req, res) => {
  SubCategory.deleteMany({})
    .then(data => {
      res.status(200).send({ message: `${data.deletedCount} SubCategorys deleted successfully!` })
    })
}

exports.getCategory = (req, res) => {
  const id = req.params.id

  SubCategory.findById(id)
    .then(data => {
      Category.findById(data["category"])
        .then(cat_data => {
          res.send(cat_data)
        })
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occured while retrieving that data"
      })
    })
}