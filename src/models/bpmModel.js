'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bpmSchema = new Schema({
  value: {
    type: Number,
    required: 'truc'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Bpm', bpmSchema)
