const fs = require('fs')
const parse = require('@progfay/scrapbox-parser')

const convert = require('../lib').default

const html = body => `
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.2/katex.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css">
</head>
<body>
  ${body}
</body>
`

const page = fs.readFileSync('tests/page.txt').toString()
const body = convert(parse(page), 'progfay-pub')
console.log(body)

require('http').createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html(body))
}).listen(8080, () => { console.log('Serve on http://localhost:8080 !') })
