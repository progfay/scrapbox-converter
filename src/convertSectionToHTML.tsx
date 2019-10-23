import pragma from './lib/pragma'
import convertBlockToHTML from './convertBlockToHTML'
import { BlockType } from '@progfay/scrapbox-parser'

const convertSectionToHTML = (section: BlockType[], projectName): string => section.reduce(
  (html, block, index, blocks): string => {
    const { indent } = block
    const pIndent = index === 0 ? 0 : blocks[index - 1].indent
    const tag = indent > pIndent ? '<ul>' : '</ul>'
    const count = Math.abs(indent - pIndent)
    const innerHTML = convertBlockToHTML(block, projectName)

    if (block.type !== 'line') return html + tag.repeat(count) + innerHTML

    const line = indent === 0 ? (<p>{innerHTML}</p>) : (<li>{innerHTML}</li>)

    return html + tag.repeat(count) + line
  }, '') + '</ul>'.repeat(section[section.length - 1].indent)

export default convertSectionToHTML
