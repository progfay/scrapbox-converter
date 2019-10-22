const convertBlockToHTML = require('./convertBlockToHTML')
const { p, li } = require('./lib/html')

const convertSectionToHTML = (section, projectName) => section.reduce(
  (html, block, index, blocks) => {
    const { indent } = block
    const pIndent = index === 0 ? 0 : blocks[index - 1].indent
    const tag = indent > pIndent ? '<ul>' : '</ul>'
    const count = Math.abs(indent - pIndent)
    const innerHTML = convertBlockToHTML(block, projectName)

    if (block.type !== 'line') return html + tag.repeat(count) + innerHTML

    const line = indent === 0 ? p(innerHTML) : li(innerHTML)

    return html + tag.repeat(count) + line
  }, '') + '</ul>'.repeat(section[section.length - 1].indent)

module.exports = convertSectionToHTML
