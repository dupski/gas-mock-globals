const GmailMessage = require('./classes/GmailMessage')

class GmailApp {

  static setCurrentMessageAccessToken(token) {
  }

  static getMessageById(messageId) {
    return new GmailMessage()
  }
}

module.exports = GmailApp
