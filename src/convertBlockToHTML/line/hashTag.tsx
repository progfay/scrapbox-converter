import { pragma } from 'html-tsx'
import { HashTagNodeType } from '@progfay/scrapbox-parser'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'
import { NodeConverterType } from '.'

const HashTagNodeConverter: NodeConverterType<HashTagNodeType> = ({ href }) => (
  <a href={href}>
    {escapeHTMLSpecialChars(`#${href}`)}
  </a>
)

export default HashTagNodeConverter
