const BaseClass = require('../../helpers/BaseClass')

class GmailMessage extends BaseClass {

    constructor () {
        super()
        this._data.id = '16b0aec3facf3e9a'
        this._data.headers = {
            'message-id': '<NUXo2y9nh0c2qNedEJnALukvg@mail.gmail.com>'
        }
        this._data.date = new Date("2010-01-02T01:02:03.12345")
        this._data.subject = 'Message Subject'
        this._data.to = 'Tim Frost <tim@frost.com>'
        this._data.cc = ''
        this._data.bcc = ''
        this._data.from = 'Joe Bloggs <joe@bloggs.com>'
        this._data.replyTo = 'joe@bloggs.com'
        this._data.body = '<p>Message Body</p>'
        this._data.plainBody = 'Message Body'
        this._data.isInTrash = false
        this._data.attachments = []
    }

    getId() {
        return this._data.id
    }
    getDate() {
        return this._data.date
    }
    getSubject() {
        return this._data.subject
    }
    getTo() {
        return this._data.from
    }
    getCc() {
        return this._data.cc
    }
    getBcc() {
        return this._data.bcc
    }
    getFrom() {
        return this._data.from
    }
    getReplyTo() {
        return this._data.replyTo
    }
    getBody() {
        return this._data.body
    }
    getPlainBody() {
        return this._data.plainBody
    }
    getHeader(headerName) {
        return this._data.headers[headerName.toLowerCase()]
    }
    getAttachments() {
        return this._data.attachments
    }
    isInTrash() {
        return this._data.isInTrash
    }
}

module.exports = GmailMessage
