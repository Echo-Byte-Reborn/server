'use strict'

import mongoose from 'mongoose'

const Localisation = mongoose.model('Localisation')

exports.listAllLocalisations = function(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  Localisation.find({}, function(err, localisations) {
    if (err) {
      res.status(500).send(err)
    }

    res.status(200).json(localisations)
  })
}

exports.createLocalisation = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  const body = req.body

  if (body && Object.keys(body).length === 2 && body.longitude && body.latitude) {
    const newLocalisation = new Localisation(body)
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
