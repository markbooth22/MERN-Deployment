const { request, response } = require("express");
const Pirate = require("../models/pirate.model");


module.exports = {
  getAll: (req, res) => {
    Pirate.find()
      .then((allPirates) => res.json(allPirates))
      .catch((err) => {
        console.log(`Error getting all Pirate documents: ${err}`)
        res.json(err)
      })
  },
  create: (req, res) => {
    console.log(req.body);
    Pirate.create(req.body)
      .then((newPirateObject) => res.json(newPirateObject))
      .catch((err) => {
        console.log(`Error creating all Pirate documents: ${err}`)
        res.json(err)
      })
  },
  getOne: (req, res) => {
    Pirate.findById(req.params.id)
      .then((onePirate) => res.json(onePirate))
      .catch((err) => {
        console.log(`Error getting a single Pirate documents: ${err}`)
        res.json(err)
      })
  },
  update: (req, res) => {
    Pirate.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((updatedPirate) => res.json(updatedPirate))
      .catch((err) => {
        console.log(`Error updating a single Pirate documents: ${err}`)
        res.json(err)
      })
  },
  delete: (req, res) => {
    Pirate.findByIdAndDelete(req.params.id)
      .then((deleted) => res.json(deleted))
      .catch((err) => {
        console.log(`Error deleting a single Pirate documents: ${err}`)
        res.json(err)
      })
  },
}

