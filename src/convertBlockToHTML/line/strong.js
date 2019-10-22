const { strong } = require('../../lib/html')

module.exports = ({ nodes }, projectName) => strong(
  nodes
    .map(node => require('./').nodeConverter(node, projectName))
    .join(''),
  { class: 'strong' }
)
