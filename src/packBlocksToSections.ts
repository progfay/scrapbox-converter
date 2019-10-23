import { BlockType } from '@progfay/scrapbox-parser'

export default (blocks: BlockType[]) => (
  blocks
    .reduce((sections: BlockType[][], block: BlockType) => {
      if (block.type === 'line') {
        if (block.nodes.length === 0) {
          return [...sections, []]
        } else {
          sections[sections.length - 1].push(block)
          return sections
        }
      }
      return [...sections, [block], []]
    }, [[]])
    .filter(section => section.length !== 0)
)
