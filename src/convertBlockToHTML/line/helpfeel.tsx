import { HelpfeelNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from './'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'

const HelpfeelConverter: NodeConverterType<HelpfeelNodeType> = ({ text }) => (
  <pre class="helpfeel">
    {escapeHTMLSpecialChars(text)}
  </pre>
)

export default HelpfeelConverter
