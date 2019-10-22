const packBlocksToSections = require('./src/packBlocksToSections')
const convertSectionToHTML = require('./src/convertSectionToHTML')
const { h1, section } = require('./src/lib/html')
const escape = require('./src/lib/escapeHTMLSpecialChars')

const convert = ({ title, blocks }, projectName) => (
  h1(escape(title), { class: 'title' }) + packBlocksToSections(blocks).map(s => section(convertSectionToHTML(s, projectName))).join('')
)

module.exports = convert
