'use strict'

import mongoose from 'mongoose'

const Localisation = mongoose.model('Localisation')

exports.listAllLocalisations = function(req, res) {
  Localisation.find({}, function(err, localisations) {
    if (err) {
      res.status(500).send(err)
    }

    res.status(200).json(localisations)
  })
}

exports.createLocalisation = (req, res) => {
  const body = req.body

  if (body && Object.keys(body).length === 2 && body.longitude && body.latitude) {
    const newLocalisation = new Localisation(req.body)
    newLocalisation.save((err, localisation) => {
      if (err) {
        res.status(500).send(err)
      }

      res.status(200).json(localisation)
    })
  } else {
    res.status(400).json({ message: 'Invalid params !' })
  }
}
