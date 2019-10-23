import { HashTagNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'
import { NodeConverterType } from '.'

const HashTagNodeConverter: NodeConverterType<HashTagNodeType> = ({ href }) => (
  <a href={href}>
    {escapeHTMLSpecialChars(`#${href}`)}
  </a>
)

export default HashTagNodeConverter
