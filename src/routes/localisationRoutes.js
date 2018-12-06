'use strict'
import Localisation from '../controllers/localisationController'

module.exports = function(app) {
  app.route('/localisation')
    .get(Localisation.listAllLocalisations)
    .post(Localisation.createLocalisation)

  /* app.route('/localisation/:localisationId')
    .get(Localisation.readLocalisation)
    .put(Localisation.updateLocalisation)
    .delete(Localisation.deleteLocalisation) */
}
