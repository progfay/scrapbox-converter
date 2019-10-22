const specialCharMap = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  ' ': '&nbsp;',
  ' ': '&ensp;',
  ' ': '&emsp;',
  '–': '&ndash;',
  '—': '&mdash;'
}

module.exports = (html = '') => Object.entries(specialCharMap)
  .reduce(
    (escaped, [key, value]) => escaped.replace(new RegExp(key, 'g'), value),
    html.toString().replace(/&/g, '&amp;')
  )
