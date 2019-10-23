import { BlankNodeType } from '@progfay/scrapbox-parser'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'
import { NodeConverterType } from './'

const BlankNodeConverter: NodeConverterType<BlankNodeType> = ({ text }) => escapeHTMLSpecialChars(text)
export default BlankNodeConverter
