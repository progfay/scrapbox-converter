const { a } = require('../../../lib/html')
const escape = require('../../../lib/escapeHTMLSpecialChars')

const Converters = [
  require('./youtube')
]

const LinkConverter = ({ href, content, pathType }) =>
  a(
    escape(content || href),
    { href: pathType === 'root' ? `https://scrapbox.io${href}` : href }
  )

module.exports = node => {
  if (node.pathType !== 'absolute' || node.content) return LinkConverter(node)

  for (const Converter of Converters) {
    const html = Converter(node)
    if (html) return html
  }

  return LinkConverter(node)
}
