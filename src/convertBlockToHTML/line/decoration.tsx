import pragma from '../../lib/pragma'

export default ({ decos, nodes }, projectName: string): string => (
  <strong class={decos.map(deco => `deco-${deco}`).join(' ')}>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </strong>
)
