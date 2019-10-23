import { highlightAuto } from 'highlight.js'
import pragma from '../lib/pragma'

export default ({ content }) => (
  <pre>
    <code>
      {highlightAuto(content).value}
    </code>
  </pre>
)
