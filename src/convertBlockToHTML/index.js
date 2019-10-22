const UnimplementedConverter = block => block.type
const line = require('./line')
const codeBlock = require('./codeBlock')
const table = require('./table')

const Converter = { line, codeBlock, table }

module.exports = (block, projectName) => (Converter[block.type] || UnimplementedConverter)(block, projectName)
