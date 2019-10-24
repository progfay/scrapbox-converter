import { pragma } from 'html-tsx'
import { highlightAuto } from 'highlight.js'
import { BlockConverterType } from '.'
import { CodeBlockType } from '@progfay/scrapbox-parser'

const CodeBlockConverter: BlockConverterType<CodeBlockType> = ({ content }) => (
  <pre>
    <code>
      {highlightAuto(content).value}
    </code>
  </pre>
)

export default CodeBlockConverter
