import { pragma } from 'amphtml-tsx'
import { ExternalLinkNodeType, InternalLinkNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType, SubNodeConverterType } from '../'
import escapeHTMLSpecialChars from '../../../lib/escapeHTMLSpecialChars'
import youtube from './youtube'
import twitter from './twitter'

const Converters: SubNodeConverterType<LinkNodeType>[] = [youtube, twitter]

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
