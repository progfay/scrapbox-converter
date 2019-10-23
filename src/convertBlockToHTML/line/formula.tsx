import { renderToString } from 'katex'
import pragma from '../../lib/pragma'

export default ({ formula }) => (
  <span>
    {
      renderToString(formula, {
        displayMode: true,
        output: 'html',
        throwOnError: false
      })
    }
  </span>
)
