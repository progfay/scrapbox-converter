const { renderToString } = require('katex')
const { span } = require('../../lib/html')

module.exports = ({ formula }) => {
  const formulaHTML = renderToString(formula, {
    displayMode: true,
    output: 'html',
    throwOnError: false
  })
  return span(formulaHTML)
}
