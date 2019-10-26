/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../src'
import pretty from 'pretty'

describe('codeBlock', () => {
  it('Simple codeBlock', () => {
    const input = `Code Block
code:js
 function () {
   alert(document.location.href)
   console.log("hello")
   // You can also write comments!
 }`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
