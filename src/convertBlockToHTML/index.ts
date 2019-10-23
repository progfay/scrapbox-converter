import line from './line'
import codeBlock from './codeBlock'
import table from './table'

const UnimplementedConverter = block => block.type
const Converter = { line, codeBlock, table }

export default (block, projectName: string): string => (Converter[block.type] || UnimplementedConverter)(block, projectName)
