import pragma from '../../lib/pragma'

export default ({ nodes }, projectName) => (
  <blockquote>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </blockquote>
)
