import { BlockType } from '@progfay/scrapbox-parser'

export default (blocks: BlockType[]) => {
  const sections = []
  let section = []

  for (const block of blocks) {
    if (block.type === 'line') {
      if (block.nodes.length === 0) {
        sections.push([...section])
        section = []
      } else {
        section.push(block)
      }
    } else {
      sections.push([...section])
      section = []
      sections.push([block])
    }
  }

  sections.push(section)
  return sections.filter(section => section.length !== 0)
}
