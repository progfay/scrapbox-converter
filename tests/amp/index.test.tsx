import { pragma } from 'amphtml-tsx'
import AmpHTMLValidator from 'amphtml-validator'
import * as fs from 'fs'
import { parse as parseScrapbox } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

declare global {
  namespace jest {
    interface Matchers<R> {
      isValidAmpHTML(): Promise<CustomMatcherResult>
    }
  }
}

expect.extend({
  isValidAmpHTML: async (html: string) => {
    const validator = await AmpHTMLValidator.getInstance()
    const { status, errors } = validator.validateString(html)
    if (status === 'PASS') return { pass: true, message: '' }
    const lines = html.split('\n')
    const message = () => errors.map(
      ({ message, line, col, code }) => `${line}:${col} ${lines[line-1]}\n${code}: ${message}\n`
    ).join('\n')
    return { pass: false, message }
  }
})

describe('AMP', () => {
  it('Sample AMP page', () => {
    const page = fs.readFileSync('./tests/page/input.txt').toString()
    const html: string = '<!doctype html>' + (
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
          <link rel="canonical" href="index.html" />
          <title>Document</title>
        </head>
        <body>
          {convert(parseScrapbox(page), 'projectName')}
        </body>
      </html>
    )
    return expect(pretty(html)).isValidAmpHTML()
  })
})
