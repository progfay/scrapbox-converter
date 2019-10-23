import { StrongNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const StrongNodeConverter: NodeConverterType<StrongNodeType> = ({ nodes }, projectName) => (
  <strong>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </strong>
)

export default StrongNodeConverter
