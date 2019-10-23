import { BlockType } from '@progfay/scrapbox-parser'
import line from './line'
import codeBlock from './codeBlock'
import table from './table'

export type BlockConverterType<T extends BlockType> = (block: T, projectName: string) => string
type ConverterType = {
  [key: string]: BlockConverterType<any>
}
const Converter: ConverterType = { line, codeBlock, table }

export default (block: BlockType, projectName: string): string => (Converter[block.type])(block, projectName)
