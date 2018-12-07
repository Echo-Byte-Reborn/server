'use strict'

import mongoose from 'mongoose'

const Bpm = mongoose.model('Bpm')

exports.listAllBpms = function(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  Bpm.find({}, function(err, bpms) {
    if (err) {
      res.status(500).send(err)
    }

    res.status(200).json(bpms)
  })
}

exports.createBpm = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

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

exports.lastBpm = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  Bpm.find({}, function(err, bpms) {
    if (err) {
      res.status(500).send(err)
    }
    let bpm = bpms

    if (bpms.length > 0) {
      bpm = bpms[bpms.length - 1]
    }

    res.status(200).json(bpm)
  })
}
