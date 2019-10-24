import { pragma } from 'html-tsx'
import { renderToString, KatexOptions } from 'katex'
import { FormulaNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const FormulaNodeConverter: NodeConverterType<FormulaNodeType> = ({ formula }) => (
  <span>
    {
      renderToString(formula, {
        displayMode: false,
        output: 'html',
        throwOnError: false
      } as KatexOptions)
    }
  </span>
)

export default FormulaNodeConverter
