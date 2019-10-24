import { pragma } from 'html-tsx'
import { StrongNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const StrongNodeConverter: NodeConverterType<StrongNodeType> = ({ nodes }, projectName) => (
  <strong>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </strong>
)

export default StrongNodeConverter
