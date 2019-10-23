import { PlainNodeType } from '@progfay/scrapbox-parser'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'
import { NodeConverterType } from '.'

const PlainNodeConverter: NodeConverterType<PlainNodeType> = ({ text }) => escapeHTMLSpecialChars(text)

export default PlainNodeConverter
