'use strict'

import mongoose from 'mongoose'

const Localisation = mongoose.model('Localisation')

exports.listAllLocalisations = function(req, res) {
  Localisation.find({}, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.createLocalisation = function(req, res) {
  var newLocalisation = new Localisation(req.body)
  newLocalisation.save(function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}
