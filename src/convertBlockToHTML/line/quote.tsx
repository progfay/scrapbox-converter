import { QuoteNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const QuoteNodeConverter: NodeConverterType<QuoteNodeType> = ({ nodes }, projectName) => (
  <blockquote>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </blockquote>
)

export default QuoteNodeConverter
