const BaseClass = require('../../helpers/BaseClass')

class GmailMessage extends BaseClass {

    getSubject() {
        return 'Message Subject'
    }
    getFrom() {
        return 'Joe Bloggs'
    }
    getReplyTo() {
        return 'joe@bloggs.com'
    }
}

module.exports = GmailMessage
