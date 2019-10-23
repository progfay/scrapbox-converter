import { ExternalLinkNodeType, InternalLinkNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '../'
import pragma from '../../../lib/pragma'
import escapeHTMLSpecialChars from '../../../lib/escapeHTMLSpecialChars'
import youtube from './youtube'

export type ConverterType = (node: LinkNodeType, projectName: string) => string | null
const Converters: ConverterType[] = [youtube]

export type LinkNodeType = ExternalLinkNodeType | InternalLinkNodeType

const LinkConverter: NodeConverterType<LinkNodeType> = (linkNode: LinkNodeType) => {
  const { pathType, href, content } = linkNode
  return (
    <a href={pathType === 'root' ? `https://scrapbox.io${href}` : href}>
      {escapeHTMLSpecialChars(content || href)}
    </a>
  )
}

const LinkNodeConverter: NodeConverterType<LinkNodeType> = (node, projectName) => {
  if (node.pathType !== 'absolute' || node.content) return LinkConverter(node, projectName)

  for (const Converter of Converters) {
    const html = Converter(node, projectName)
    if (html !== null) return html
  }

  return LinkConverter(node, projectName)
}

export default LinkNodeConverter
