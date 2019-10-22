const { pre } = require('../../lib/html')
const escape = require('../../lib/escapeHTMLSpecialChars')

module.exports = ({ text }) => pre(escape(text))
