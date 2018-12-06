'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LocalisationSchema = new Schema({
  longitude: {
    type: String,
    required: 'truc'
  },
  latitude: {
    type: String,
    required: 'truc'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Localisation', LocalisationSchema)
