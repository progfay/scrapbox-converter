import { pragma } from 'amphtml-tsx'
import { parse } from '@progfay/scrapbox-parser'
import convert from '../src'
import * as fs from 'fs'
import http from 'http'

const PORT = 8000

const page = fs.readFileSync('tests/input.txt').toString()
const html = '<!doctype html>' + (
  <html AMP>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <style amp-boilerplate>
        {'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'}
      </style>
      <noscript>
        <style amp-boilerplate>
          {'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}'}
        </style>
      </noscript>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
      <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
      <script async custom-element="amp-mathml" src="https://cdn.ampproject.org/v0/amp-mathml-0.1.js"></script>
      <link rel="canonical" href="index.html" />
      <title>Document</title>
    </head>
    <body>
      {convert(parse(page), 'projectName')}
    </body>
  </html>
)

const server = http.createServer()

server.on('request', (_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(html)
  res.end()
})

server.listen(PORT, () => { console.log(`listen on http://localhost:${PORT}`) })
