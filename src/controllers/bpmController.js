'use strict'

import mongoose from 'mongoose'

const Bpm = mongoose.model('Bpm')

exports.listAllBpms = function(req, res) {
  Bpm.find({}, function(err, bpms) {
    if (err) {
      res.status(500).send(err)
    }

    res.status(200).json(bpms)
  })
}

exports.createBpm = (req, res) => {
  const body = req.body

  if (body && Object.keys(body).length === 1 && body.value) {
    const newBpm = new Bpm(body)
    newBpm.save((err, bpm) => {
      if (err) {
        res.status(500).send(err)
      }

      res.status(200).json(bpm)
    })
  } else {
    res.status(400).json({ message: 'Invalid params !' })
  }
}
