const { a } = require('../../lib/html')
const escape = require('../../lib/escapeHTMLSpecialChars')

module.exports = ({ href }) => a(escape(`#${href}`), { href })
