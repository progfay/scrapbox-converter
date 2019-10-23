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

export default (html: string = ''): string => Object.entries(specialCharMap)
  .reduce(
    (escaped, [key, value]) => escaped.replace(new RegExp(key, 'g'), value),
    html.toString().replace(/&/g, '&amp;')
  )
