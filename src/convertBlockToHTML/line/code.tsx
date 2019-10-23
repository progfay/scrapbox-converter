import { CodeNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from './'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'

const CodeConverter: NodeConverterType<CodeNodeType> = ({ text }) => (
  <pre>
    {escapeHTMLSpecialChars(text)}
  </pre>
)

export default CodeConverter
