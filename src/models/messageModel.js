'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const messageSchema = new Schema({
  message: {
    type: String,
    required: 'truc'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Message', messageSchema)
