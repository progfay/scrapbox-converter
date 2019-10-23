import pragma from '../../lib/pragma'

export default ({ nodes }, projectName) => (
  <strong>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </strong>
)
