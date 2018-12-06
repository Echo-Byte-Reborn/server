'use strict'
import Message from '../controllers/messageController'

module.exports = function(app) {
  app.route('/message')
    .get(Message.listAllMessages)
    .post(Message.createMessage)
}
