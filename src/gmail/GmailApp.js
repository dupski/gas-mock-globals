const GmailMessage = require('./classes/GmailMessage')

class GmailApp {

  static setCurrentMessageAccessToken(token) {
  }

  static getAliases() {
    return []
  }

  static getMessageById(messageId) {
    return new GmailMessage()
  }
}

module.exports = GmailApp
