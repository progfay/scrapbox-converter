const { highlightAuto } = require('highlight.js')
const { pre, code } = require('../lib/html')

module.exports = ({ content }) => pre(code(highlightAuto(content).value))
