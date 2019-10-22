const { blockquote } = require('../../lib/html')

module.exports = ({ nodes }, projectName) => blockquote(
  nodes
    .map(node => require('./').nodeConverter(node, projectName))
    .join('')
)
