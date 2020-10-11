const db = require("../models");
const { mongoose } = require("../models");
const Category = db.categories;
const SubCategory = db.subcategories;

exports.create = (req, res) => {
  if(!req.body){
    res.status(400).send({ message: "Content cannot be empty!" })
    return;
  }

  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    // subcategories: req.body.subcategories
    // name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1,)
  })

  category
    .save()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({ 
        message: 
          err.message || "Some error occured while creating the category"})
    })
}

exports.createSubCategory = (req, res) => {
  if(!req.body){
    res.status(400).send({ message: "Content cannot be empty"});
    return;
  }
  const categoryId = req.params.id;

  const subCategory = new SubCategory({
    name: req.body.name,
    category: categoryId
  })

  subCategory
    .save()
    .then(data => {
      res.status(200).send(data)
      Category.findById(categoryId)
        .then(categoryData => {
          categoryData.subcategories.push(data.id);
          categoryData.save()
          .catch(err => {
            console.log(err.message)
          })
        })
        .catch(err => {
          console.log(err.message)
        })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the SubCategory"
      })
    })
}

exports.findAll = (req, res) => {
  const name = req.query.name
  const condition = name ? { name: { $regex: new RegExp(name), $options: "i"}} : {};

  Category.find(condition)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({ message: 
        err.message || "Some error occured while retrieving categories"})
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findById(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not find the category with id: ${id}`})
      }
      else {
        res.status(200).send(data)
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message || `Some error occured while retrieving the user with id: ${id}`})
    })
}

exports.update = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: "Data to update cannot be empty"
    })
  }
  
  const id = req.params.id;

  Category.findByIdAndUpdate(id, req.body,  { useFindAndModify: false})
    .then(data => {
      if(!data) {
        res.status(500).send({ message: `Could not update Category with id: ${id}. Category not found`})
      }
      else {
        res.status(200).send({ message: "Category updated successfully!"})
      }
    })
    .catch(err => {
      res.status(500).send({ message: 
        err.message || `Some error occured while updating category with id: ${id}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Category.findByIdAndRemove(id)
    .then(data => {
      if(!data) {
        res.status(404).send({ message: `Could not delete Category with id: ${id}. Category not found`})
      }
      else {
        res.status(200).send({ message: "Category deleted successfully!"})
      }
    })
    .catch(err => {
      res.status(500).send({ message: 
        err.message || `Some error occured while deleting category with id: ${id}`
      })
    })
}

exports.deleteAll = (req, res) => {
  Category.deleteMany({})
    .then(data => {
      res.status(200).send({ message: `${data.deletedCount} categories was deleted successfully!`})
    })
    .catch(err => {
      res.status(500).send({ message: 
        err.message || "Some error occured while deleting categories"
      })
    })
}

exports.getSubCategories = (req, res) => {
  const name = req.params.name

  Category.find({ name: name }).populate("subcategories")
    .then(data => {
      if(!data){
        res.status(404).send({ message: "Could not get the subcategories"})
      }
      else {
        res.status(200).send(data)
      }
      
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || "Some error occured while retrieving the subcategories"
      })
    })
}