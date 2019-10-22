const escape = require('./escapeHTMLSpecialChars')

const renderAttributes = attr => (
  Object
    .entries(attr)
    .map(([key, value]) => `${escape(key)}="${escape(Array.isArray(value) ? value.join(' ') : value)}"`)
    .join(' ')
)

const createRenderer = tagName =>
  (children = '', attr) => (
    `<${tagName}${attr ? ` ${renderAttributes(attr)}` : ''}>${children}</${tagName}>`
  )

const tagNameList = ['p', 'li', 'section', 'strong', 'pre', 'code', 'a', 'blockquote', 'table', 'tr', 'th', 'td', 'span', 'iframe', 'h1', 'h3', 'div', 'span']

for (const tagName of tagNameList) {
  module.exports[tagName] = createRenderer(tagName)
}
