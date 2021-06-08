const db = require("../models");
const Product = db.products;

// Image upload
const fs = require('fs');
const path = require('path');

exports.create = (req, res) => {
  if(!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    brand: req.body.brand,
    available: req.body.available,
    category: req.body.category,
    highlights: req.body.highlights,
    tags: req.body.tags,
    reviews: req.body.reviews,
    ratings: req.body.ratings,
    published: req.body.published ? req.body.published : false,
    model: req.body.model,
    discount: req.body.discount,
    saleExpiry: req.body.saleExpiry,

    images: (req.files) ? [{
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files.filename)),
      contentType: 'image/png'
    }] : null
  })

  product
    .save()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the product"
      })
    })
}

exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { $regex: new RegExp(title), $options: "i"}} : {};

  Product.find(condition)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occured while retrieving products"
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then(data => {
      if(!data)
        res.status(404).send({ message: "Product not found with id " + id })
      else res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieveing Product with id: " + id
      })
    })
}

exports.update = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: "Data to update cannot be empty"
    })
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
      if(!data)
        res.status(404).send({ message: `Cannot up date Product with id ${id}. Product not found`})
      else res.status(200).send({ message: "Product was updated successfully"})
    })
      .catch(err => {
        res.status(500).send({ message: "Error updating Product with id: " + id})
      })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Product.findByIdAndRemove(id)
    .then(data => {
      if(!data)
        res.status(404).send({ message: `Cannot delete Product with id: ${id}. Product not found`})
      else res.status(200).send({ message: "Product was deleted successfully!"})
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting Product with id: " + id
      })
    })
}

exports.deleteAll = (req, res) => {
  Product.deleteMany({})
    .then(data => {
      res.status(200).send({ message: `${data.deletedCount} Products were deleted successfully!`})
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occured while removing all products"})
    })
}

exports.findAllPublished = (req, res) => {
  Product.find({ published: true })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving products"
      })
    })
}

exports.getReviews = (req, res) => {
  const id = req.params.id

  Product.findById(id).populate("reviews")
    .then(data => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving product reviews"
      })
    })
}