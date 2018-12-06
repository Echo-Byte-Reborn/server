'use strict'
import Chute from '../controllers/chuteController'

module.exports = function(app) {
  app.route('/chute')
    .get(Chute.listAllChutes)
    .post(Chute.createChute)
}
