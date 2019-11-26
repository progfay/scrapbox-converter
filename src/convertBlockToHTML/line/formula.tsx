import { pragma } from 'amphtml-tsx'
import { FormulaNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const FormulaNodeConverter: NodeConverterType<FormulaNodeType> = ({ formula }) => (
  <amp-mathml
    layout='container'
    data-formula={`\\[${formula}\\]`} />
)

export default FormulaNodeConverter
