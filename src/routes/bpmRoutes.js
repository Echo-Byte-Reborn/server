'use strict'
import Bpm from '../controllers/bpmController'

module.exports = function(app) {
  app.route('/bpm')
    .get(Bpm.listAllBpms)
    .post(Bpm.createBpm)
}
