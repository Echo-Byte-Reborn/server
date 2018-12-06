'use strict'

import mongoose from 'mongoose'

const Chute = mongoose.model('Chute')

exports.listAllChutes = function(req, res) {
  Chute.find({}, function(err, chutes) {
    if (err) {
      res.status(500).send(err)
    }

    res.status(200).json(chutes)
  })
}

exports.createChute = (req, res) => {
  const body = req.body

  if (body && Object.keys(body).length === 3 && body.x && body.y && body.z) {
    const newChute = new Chute(body)
    newChute.save((err, chute) => {
      if (err) {
        res.status(500).send(err)
      }

      res.status(200).json(chute)
    })
  } else {
    res.status(400).json({ message: 'Invalid params !' })
  }
}
