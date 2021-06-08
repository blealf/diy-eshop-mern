const db = require("../models");
const User = db.users;
const bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  if(!req.body){
    res.status(400).send({ message: "Content cannot be empty"})

    return;
  }

  const newUser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => {
          res.status(200).send(user)
        })
        .catch(err => {
          res.status(500).send({ message: err.message || "Some error occured while creating the product"})
        })
    })
  })
}

exports.findAll = (req, res) => {
  const fullname = req.query.fullname
  const condition = fullname ? { fullname: { $regex: new RegExp(fullname), $options: "1"}} : {} ;

  User.find(condition)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({ message: 
      err.message || "SOme error occured while retrieving users"})
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: "Could not find the user with id: " + id})
      } else res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message : err.message || "Some error occured while retrieving the user with id: " + id
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

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not update User with id: ${id}, user was not found`})
      } else res.status(200).send({
        message: "User updated successfully"
      })
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Some erro occured while updating user with id : ${id}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if(!data){
        res.status(404).send({ message: `Could not delete the User with id: ${id}`})
      } else res.status(200).send({ message: "User was deleted successfully"})
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Some error occured while deleting the user with id: ${id}`
      })
    })
}

exports.deleteAll = (req, res) => {
  User. deleteMany({})
    .then(data => {
      res.status(200).send({ message: `${data.deletedCount} users were deleted successfully`})
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while removing users"
      })
    })
}