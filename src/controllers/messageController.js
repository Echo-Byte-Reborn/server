'use strict'

import mongoose from 'mongoose'

const Message = mongoose.model('Message')

exports.listAllMessages = function(req, res) {
  Message.find({}, function(err, messages) {
    if (err) {
      res.status(500).send(err)
    }

    res.status(200).json({ data: messages })
  })
}

exports.createMessage = (req, res) => {
  const body = req.body

  if (body && Object.keys(body).length === 1 && body.message) {
    const newMessage = new Message(body)
    newMessage.save((err, message) => {
      if (err) {
        res.status(500).send(err)
      }

      res.status(200).json(message)
    })
  } else {
    res.status(400).json({ message: 'Invalid params !' })
  }
}
