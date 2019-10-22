const { strong } = require('../../lib/html')

module.exports = ({ decos, nodes }, projectName) =>
  strong(
    nodes
      .map(node => require('./').nodeConverter(node, projectName))
      .join(''),
    { class: decos.map(deco => `deco-${deco}`) }
  )
