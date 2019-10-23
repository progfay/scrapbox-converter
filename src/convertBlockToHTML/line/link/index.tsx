import { ExternalLinkNodeType, InternalLinkNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../../lib/pragma'
import escapeHTMLSpecialChars from '../../../lib/escapeHTMLSpecialChars'
import youtube from './youtube'

const Converters = [youtube]

type LinkNodeType = ExternalLinkNodeType | InternalLinkNodeType

const LinkConverter = (linkNode: LinkNodeType) => {
  const { pathType, href, content } = linkNode
  return (
    <a href={pathType === 'root' ? `https://scrapbox.io${href}` : href}>
      {escapeHTMLSpecialChars(content || href)}
    </a>
  )
}

export default node => {
  if (node.pathType !== 'absolute' || node.content) return LinkConverter(node)

  for (const Converter of Converters) {
    const html = Converter(node)
    if (html) return html
  }

  return LinkConverter(node)
}
