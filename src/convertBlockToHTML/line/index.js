const Converter = {
  blank: require('./blank'),
  code: require('./code'),
  decoration: require('./decoration'),
  formula: require('./formula'),
  googleMap: require('./googleMap'),
  hashTag: require('./hashTag'),
  icon: require('./icon'),
  image: require('./image'),
  link: require('./link'),
  plain: require('./plain'),
  strong: require('./strong'),
  strongIcon: require('./strongIcon'),
  strongImage: require('./strongImage'),
  quote: require('./quote')
}

const nodeConverter = (node, projectName) => Converter[node.type](node, projectName)

module.exports = ({ nodes }, projectName) => nodes
  .map(node => nodeConverter(node, projectName))
  .join('')

module.exports.nodeConverter = nodeConverter
