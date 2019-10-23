import pragma from '../../lib/pragma'
import escapeHTMLSpecialChars from '../../lib/escapeHTMLSpecialChars'

export default ({ href }) => (
  <a href={href}>
    {escapeHTMLSpecialChars(`#${href}`)}
  </a>
)
