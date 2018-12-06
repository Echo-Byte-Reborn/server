'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const chuteSchema = new Schema({
  x: {
    type: Number,
    required: 'truc'
  },
  y: {
    type: Number,
    required: 'truc'
  },
  z: {
    type: Number,
    required: 'truc'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Chute', chuteSchema)
