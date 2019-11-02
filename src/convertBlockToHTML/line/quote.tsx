import { pragma } from 'amphtml-tsx'
import { QuoteNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const QuoteNodeConverter: NodeConverterType<QuoteNodeType> = ({ nodes }, projectName) => (
  <blockquote>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </blockquote>
)

export default QuoteNodeConverter
