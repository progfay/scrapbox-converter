import pragma from '../../lib/pragma'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'

export default ({ text }) => (
  <pre>
    {escapeHTMLSpecialChars(text)}
  </pre>
)
